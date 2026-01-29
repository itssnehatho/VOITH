import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = ['/home2.png', '/homepage.jpg', '/home2.png'];

const AboutUsImage = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const scrollHeightRef = useRef(null);
  const imageContainerRef = useRef(null);
  const trackRef = useRef(null);
  const textPanelRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const timer = setTimeout(() => {
      if (!sectionRef.current || !wrapperRef.current || !scrollHeightRef.current || !imageContainerRef.current) return;

      const totalScrollDistance = (images.length + 1) * window.innerHeight;
      scrollHeightRef.current.style.height = `${totalScrollDistance}px`;

      const ctx = gsap.context(() => {
        if (trackRef.current) {
          gsap.set(trackRef.current, { y: 0 });
        }

        if (textPanelRef.current) {
          gsap.set(textPanelRef.current, { opacity: 0, x: -30 });
        }

        let containerHeight = imageContainerRef.current?.clientHeight || window.innerHeight;
        const updateMeasurements = () => {
          containerHeight = imageContainerRef.current?.clientHeight || window.innerHeight;
        };
        window.addEventListener('resize', updateMeasurements);

        const slidePhaseEnd = 0.15;

        ScrollTrigger.create({
          trigger: scrollHeightRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
          onUpdate: (self) => {
            const progress = self.progress;

            if (progress <= slidePhaseEnd) {
              const slideProgress = progress / slidePhaseEnd;
              const width = gsap.utils.interpolate(100, 50, slideProgress);

              gsap.set(imageContainerRef.current, {
                width: `${width}%`,
              });

              if (textPanelRef.current) {
                const textOpacity = gsap.utils.interpolate(0, 1, Math.min(1, slideProgress * 1.5));
                const textX = gsap.utils.interpolate(-30, 0, slideProgress);
                gsap.set(textPanelRef.current, { opacity: textOpacity, x: textX });
              }
            } else {
              gsap.set(imageContainerRef.current, { width: '50%' });

              if (textPanelRef.current) {
                gsap.set(textPanelRef.current, { opacity: 1, x: 0 });
              }
            }

            if (progress > slidePhaseEnd) {
              const cycleProgress = (progress - slidePhaseEnd) / (1 - slidePhaseEnd);
              const totalImages = images.length;
              const lastIndex = totalImages - 1;
              const computedIndex = Math.min(lastIndex, Math.round(cycleProgress * lastIndex));

              if (computedIndex !== currentIndexRef.current) {
                currentIndexRef.current = computedIndex;
                setCurrentIndex(computedIndex);
              }

              if (trackRef.current) {
                gsap.set(trackRef.current, {
                  y: -cycleProgress * lastIndex * containerHeight,
                });
              }
            }
          },
        });
      }, sectionRef);

      return () => {
        window.removeEventListener('resize', updateMeasurements);
        ctx.revert();
      };
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <div className="relative w-full h-[60vh] overflow-hidden">
              <img
                src={image}
                alt={`VOITH project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Neutral Background on Mobile */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8" style={{ backgroundColor: '#FAF5ED' }}>
              <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                FEATURED COMPANY
              </h3>

              <h2 className="font-['Times_New_Roman',serif] text-3xl text-gray-900 leading-tight mb-4 uppercase">
                UNITED&nbsp;TRADERS<br />SYNDICATE
              </h2>

              <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                TOYOTA NEPAL
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">
                Toyota Nepal, represented by United Traders Syndicate (UTS), is the official distributor of Toyota vehicles, parts, and services in Nepal. With over five decades of presence, Toyota Nepal offers a wide range of reliable cars, SUVs, pickups, and MPVs, along with comprehensive after-sales support through its showrooms and service centers.
              </p>

              <button className="group border border-gray-900 text-gray-900 bg-transparent px-8 py-3 text-xs tracking-[0.15em] uppercase rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">VIEW PROJECTS</span>
                <span className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout: fixed-height scroll area + sticky content so ScrollTrigger has no pin/snap */}
      <div ref={wrapperRef} className="hidden md:block relative w-full">
        <div ref={scrollHeightRef} className="relative w-full" style={{ minHeight: '100vh' }}>
          <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Neutral Background Applied Here */}
        <div
          ref={textPanelRef}
          className="absolute left-0 top-0 w-1/2 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-between"
          style={{ backgroundColor: '#FAF5ED', opacity: 0 }}
        >
          <div>
            <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-8 sm:mb-10 md:mb-12">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
              FEATURED COMPANY
            </h3>

            <h1 className="font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-[-0.02em] uppercase">
              UNITED&nbsp;TRADERS<br />SYNDICATE
            </h1>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
              TOYOTA NEPAL
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-[1.85] tracking-[-0.01em] mb-8 sm:mb-10 text-justify">
              Toyota Nepal, represented by United Traders Syndicate (UTS), is the official distributor of Toyota vehicles, parts, and services in Nepal. With over five decades of presence, Toyota Nepal offers a wide range of reliable cars, SUVs, pickups, and MPVs, along with comprehensive after-sales support through its showrooms and service centers.
            </p>

            <button className="group border border-gray-900 text-gray-900 bg-transparent px-8 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm font-light tracking-[0.15em] uppercase rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">VIEW PROJECTS</span>
              <span className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Images */}
        <div
          ref={imageContainerRef}
          className="absolute top-0 right-0 h-full overflow-hidden"
          style={{ width: '100%' }}
        >
          <div
            ref={trackRef}
            className="absolute inset-0 w-full"
            style={{ height: `${images.length * 100}%` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full overflow-hidden"
                style={{ height: `${100 / images.length}%` }}
              >
                <img
                  src={image}
                  alt={`VOITH project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white z-10">
            <span className="text-sm font-light">{currentIndex + 1}</span>
            <span className="text-white/50">/</span>
            <span className="text-sm font-light text-white/70">{images.length}</span>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsImage;
