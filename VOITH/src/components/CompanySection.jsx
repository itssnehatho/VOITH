import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CompanySection = ({
  title,
  subtitle,
  description,
  images,
  image,
  imageAlt,
  buttonText = 'VIEW PROJECTS',
  buttonHref,
  ariaLabel,
}) => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageContainerRef = useRef(null);
  const trackRef = useRef(null);
  const textPanelRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);

  const imageList =
    Array.isArray(images) && images.length >= 1
      ? images
      : image
        ? [image, image, image]
        : ['/homepage.jpg', '/home2.png', '/homepage.jpg'];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const timer = setTimeout(() => {
      if (!sectionRef.current || !wrapperRef.current || !imageContainerRef.current) return;

      const ctx = gsap.context(() => {
        if (trackRef.current) gsap.set(trackRef.current, { y: 0 });
        if (textPanelRef.current) gsap.set(textPanelRef.current, { opacity: 0, y: 36 });
        if (imageContainerRef.current) gsap.set(imageContainerRef.current, { width: '50%' });

        let containerHeight = imageContainerRef.current?.clientHeight || window.innerHeight;
        const updateMeasurements = () => {
          containerHeight = imageContainerRef.current?.clientHeight || window.innerHeight;
        };
        window.addEventListener('resize', updateMeasurements);

        const totalScrollDistance = (imageList.length + 1) * window.innerHeight;
        const textPhaseEnd = 0.05;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${totalScrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: 2,
          onUpdate: (self) => {
            const progress = self.progress;

            if (progress <= textPhaseEnd) {
              const t = progress / textPhaseEnd;
              if (textPanelRef.current) {
                gsap.set(textPanelRef.current, {
                  opacity: Math.min(1, t * 2),
                  y: gsap.utils.interpolate(36, 0, t),
                });
              }
            } else {
              if (textPanelRef.current) gsap.set(textPanelRef.current, { opacity: 1, y: 0 });
            }

            if (progress > textPhaseEnd) {
              const cycleProgress = (progress - textPhaseEnd) / (1 - textPhaseEnd);
              const lastIndex = imageList.length - 1;
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
  }, [imageList.length]);

  const textBlock = (
    <>
      <div>
        <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-8 sm:mb-10 md:mb-12">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
          FEATURED COMPANY
        </h3>
        <h2 className="font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-[-0.02em] uppercase">
          {title}
        </h2>
      </div>
      <div>
        {subtitle && (
          <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
            {subtitle}
          </h3>
        )}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-[1.85] tracking-[-0.01em] mb-8 sm:mb-10 text-justify">
          {description}
        </p>
        {buttonHref && (
          <a
            href={buttonHref}
            className="group inline-block border border-gray-900 text-gray-900 bg-transparent px-8 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm font-light tracking-[0.15em] uppercase rounded-full hover:bg-[#E85244] hover:border-[#E85244] hover:text-white transition-colors duration-100 relative overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-100">{buttonText}</span>
            <span className="absolute inset-0 z-0 bg-[#E85244] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
          </a>
        )}
      </div>
    </>
  );

  return (
    <section ref={sectionRef} className="w-full relative" aria-label={ariaLabel || title}>
      {/* Mobile */}
      <div className="md:hidden">
        {imageList.map((img, index) => (
          <div key={index} className="w-full">
            <div className="relative w-full h-[60vh] overflow-hidden">
              <img src={img} alt={`${imageAlt || title} ${index + 1}`} className="w-full h-full object-cover" />
            </div>
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 bg-[#FFFBF5]">
              <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                FEATURED COMPANY
              </h3>
              <h2 className="font-['Times_New_Roman',serif] text-3xl text-gray-900 leading-tight mb-4 uppercase">
                {title}
              </h2>
              {subtitle && (
                <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                  {subtitle}
                </h3>
              )}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">{description}</p>
              {buttonHref && (
                <a
                  href={buttonHref}
                  className="group inline-block border border-gray-900 text-gray-900 bg-transparent px-8 py-3 text-xs tracking-[0.15em] uppercase rounded-full hover:bg-[#E85244] hover:border-[#E85244] hover:text-white transition-colors duration-100 relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-100">{buttonText}</span>
                  <span className="absolute inset-0 z-0 bg-[#E85244] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div ref={wrapperRef} className="hidden md:block relative w-full h-screen overflow-hidden">
        <div
          ref={textPanelRef}
          className="absolute left-0 top-0 w-1/2 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-between bg-[#FFFBF5]"
          style={{ opacity: 0 }}
        >
          {textBlock}
        </div>

        <div
          ref={imageContainerRef}
          className="absolute top-0 right-0 h-full overflow-hidden w-1/2"
        >
          <div
            ref={trackRef}
            className="absolute inset-0 w-full"
            style={{ height: `${imageList.length * 100}%` }}
          >
            {imageList.map((img, index) => (
              <div key={index} className="w-full overflow-hidden" style={{ height: `${100 / imageList.length}%` }}>
                <img src={img} alt={`${imageAlt || title} ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white z-10">
            <span className="text-sm font-light">{currentIndex + 1}</span>
            <span className="text-white/50">/</span>
            <span className="text-sm font-light text-white/70">{imageList.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
