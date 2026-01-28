import { useEffect, useState, useRef } from 'react';
import { HERO_CONTENT } from '../constants';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 2500);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat scale-[1.1]"
        style={{
          backgroundImage: "url('/homepage.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-start text-left max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
        <div className="max-w-4xl lg:max-w-5xl relative w-full">
          {/* Headline  */}
          <h1 className={`font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-3 sm:mb-4 md:mb-5 leading-[1.1] tracking-[-0.03em] transition-all duration-[1800ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {HERO_CONTENT.title}
          </h1>
          
          {/* Body  */}
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl lg:max-w-4xl leading-[1.75] sm:leading-[1.85] font-light tracking-[-0.01em] text-justify transition-all duration-[1800ms] ease-out delay-[300ms] mb-4 sm:mb-5 md:mb-6 lg:mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {HERO_CONTENT.description}
          </p>
          
          {/* Exp Button  */}
          <div className={`transition-all duration-[1800ms] ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#work';
              }}
              className="group inline-flex items-center gap-3 px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 lg:py-5 border border-white/80 text-white font-light text-xs sm:text-sm uppercase tracking-[0.15em] rounded-full hover:bg-white/10 hover:border-white transition-all duration-500 ease-out backdrop-blur-md hover:backdrop-blur-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 whitespace-nowrap">EXPLORE PROJECTS</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 


