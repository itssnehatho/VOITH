import { useEffect, useState, useRef } from 'react';
import { HERO_CONTENT } from '../constants';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 2500);
  }, []);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY * 0.5);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/homepage.jpg')",
          transform: `translateY(${scrollY}px) scale(1.1)`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-6 md:pr-16 lg:pr-24 xl:pr-32 pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40">
        <div className="max-w-4xl lg:max-w-5xl relative w-full">
          {/* Headline - Primary Typography */}
          <h1 className={`font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-[1.1] tracking-[-0.03em] transition-all duration-[1800ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {HERO_CONTENT.title}
          </h1>
          
          {/* Subheadline/Body - Secondary Typography */}
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl lg:max-w-4xl leading-[1.75] sm:leading-[1.85] font-light tracking-[-0.01em] transition-all duration-[1800ms] ease-out delay-[300ms] mb-8 sm:mb-10 md:mb-12 lg:mb-14 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {HERO_CONTENT.description}
          </p>
          
          {/* CTA Button - Tertiary Typography */}
          <div className={`transition-all duration-[1800ms] ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#work';
              }}
              className="group inline-block px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 lg:py-5 border border-white/80 text-white font-light text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white transition-all duration-500 ease-out backdrop-blur-md hover:backdrop-blur-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 whitespace-nowrap">EXPLORE PROJECTS</span>
              <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 


