import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = ['/home2.png', '/homepage.jpg', '/home2.png'];

const AboutUsImage = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRefs = useRef([]);
  const textPanelRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const timer = setTimeout(() => {
      if (!sectionRef.current || !wrapperRef.current || !imageContainerRef.current) return;

      const ctx = gsap.context(() => {
        // Initial states
        imageRefs.current.forEach((img, index) => {
          if (img) {
            gsap.set(img, { 
              opacity: index === 0 ? 1 : 0,
              scale: index === 0 ? 1 : 1.1,
              y: 0,
            });
          }
        });

        
        if (textPanelRef.current) {
          gsap.set(textPanelRef.current, { opacity: 0, x: -30 });
        }

        // Total scroll distance
        const totalScrollDistance = (images.length + 1) * window.innerHeight;
        const slidePhaseEnd = 0.15; // First 15% is for sliding animation

        // Single ScrollTrigger for everything
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${totalScrollDistance}`,
          pin: true,
          scrub: 2, 
          pinSpacing: true,
          ease: 'power1.out',
          onUpdate: (self) => {
            const progress = self.progress;

            
            if (progress <= slidePhaseEnd) {
              const slideProgress = progress / slidePhaseEnd;
              
              // Image slides 
              const width = gsap.utils.interpolate(100, 55, slideProgress);
              const xPercent = gsap.utils.interpolate(0, 81.8, slideProgress);
              
              gsap.set(imageContainerRef.current, {
                width: `${width}%`,
                xPercent: xPercent,
              });

              
              if (textPanelRef.current) {
                const textOpacity = gsap.utils.interpolate(0, 1, Math.min(1, slideProgress * 1.5));
                const textX = gsap.utils.interpolate(-30, 0, slideProgress);
                gsap.set(textPanelRef.current, { opacity: textOpacity, x: textX });
              }
            } else {
              
              gsap.set(imageContainerRef.current, {
                width: '55%',
                xPercent: 81.8,
              });
              
              // Keep text visible
              if (textPanelRef.current) {
                gsap.set(textPanelRef.current, { opacity: 1, x: 0 });
              }
            }

           
            if (progress > slidePhaseEnd) {
              const cycleProgress = (progress - slidePhaseEnd) / (1 - slidePhaseEnd);
              const totalImages = images.length;
              const lastIndex = totalImages - 1;

              imageRefs.current.forEach((img, index) => {
                if (!img) return;

                const segmentSize = 1 / totalImages;
                const start = index * segmentSize;
                const end = (index + 1) * segmentSize;
                const fadeZone = 0.2; 

                let opacity = 0;
                let scale = 1.05;

               
                if (index === lastIndex && cycleProgress >= start) {
                  opacity = 1;
                  const localProgress = (cycleProgress - start) / (1 - start);
                  scale = 1 + (0.03 * localProgress);
                  setCurrentIndex(lastIndex);
                } else if (cycleProgress >= start && cycleProgress < end) {
                  opacity = 1;
                  const localProgress = (cycleProgress - start) / segmentSize;
                  scale = 1 + (0.02 * localProgress);
                  setCurrentIndex(index);
                } else if (index < lastIndex && cycleProgress >= end && cycleProgress < end + fadeZone) {
                  
                  const fadeProgress = (cycleProgress - end) / fadeZone;
                  opacity = 1 - (fadeProgress * fadeProgress); // Ease out
                  scale = 1.02 + (0.01 * fadeProgress);
                } else if (index > 0 && cycleProgress >= start - fadeZone && cycleProgress < start) {
          
                  const fadeProgress = (cycleProgress - (start - fadeZone)) / fadeZone;
                  opacity = fadeProgress * (2 - fadeProgress); // Ease in-out
                  scale = 1.05 - (0.05 * fadeProgress);
                }

                gsap.set(img, { 
                  opacity: Math.max(0, Math.min(1, opacity)),
                  scale: scale,
                });
              });
            }
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

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
            <div className="px-6 py-8 bg-[#f8f7f4]">
              <h3 className="font-['Times_New_Roman',serif] text-3xl text-gray-900 leading-tight mb-4">
                OUR VISION
              </h3>
              <div className="flex items-center gap-2 mb-4 text-xs tracking-widest uppercase text-gray-600">
                <span>Unity</span>
                <span>•</span>
                <span>Collaboration</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We are committed to building remarkable futures through unity, collaboration, and shared purpose.
              </p>
              <a href="/about" className="inline-block px-5 py-2.5 border border-gray-900 text-gray-900 text-xs tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div ref={wrapperRef} className="hidden md:block relative h-screen bg-[#f8f7f4] overflow-hidden">
        {/* Left side  */}
        <div
          ref={textPanelRef}
          className="absolute left-0 top-0 w-[45%] h-full z-10 flex flex-col justify-center px-12 lg:px-16 xl:px-20"
          style={{ opacity: 0 }}
        >
          <div className="max-w-md">
            {/* Main Title */}
            <h2 className="font-['Times_New_Roman',serif] text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.05] mb-8 tracking-[-0.02em] font-normal">
              OUR<br />
              VISION
            </h2>

            {/* Category Tags */}
            <div className="flex items-center gap-3 mb-6 text-xs tracking-[0.15em] uppercase text-gray-700">
              <span>Unity</span>
              <span className="text-gray-400">•</span>
              <span>Collaboration</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-[1.75] font-light mb-8">
              We are committed to building remarkable futures through unity, collaboration, and shared purpose. Our organization empowers companies to achieve sustainable growth and create lasting national impact.
            </p>

            {/* CTA Button */}
            <a
              href="/about"
              className="inline-block px-6 py-3 border border-gray-900 text-gray-900 text-xs tracking-[0.15em] uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right side */}
        <div
          ref={imageContainerRef}
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: '100%' }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="absolute inset-0 w-full h-full"
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <img
                src={image}
                alt={`VOITH project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Image Counter */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white z-10">
            <span className="text-sm font-light">{currentIndex + 1}</span>
            <span className="text-white/50">/</span>
            <span className="text-sm font-light text-white/70">{images.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsImage;
