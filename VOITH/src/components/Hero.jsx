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
    <section ref={sectionRef} className="relative w-full h-[calc(100vh-70px)]in-h-[580px] max-h-[calc(100vh-70px)] overflow-hidden">
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

      <div className="relative z-10 h-full flex flex-col justify-start items-start text-left pl-4 md:pl-8 lg:pl-12 xl:pl-16 pr-8 md:pr-16 lg:pr-24 xl:pr-32 pt-72 md:pt-88 lg:pt-[28rem]">
        <div className="max-w-4xl lg:max-w-5xl">
          <h1 className={`font-['Times_New_Roman',serif] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-10 md:mb-12 leading-[1.1] tracking-[-0.03em] transition-all duration-[1800ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
            {HERO_CONTENT.title}
          </h1>
          <p className={`text-base md:text-lg lg:text-xl text-white/95 max-w-3xl lg:max-w-4xl leading-[1.85] font-light tracking-[-0.01em] transition-all duration-[1800ms] ease-out delay-[300ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
            {HERO_CONTENT.description}
          </p>
        </div>
      </div>

      <div className={`absolute bottom-16 md:bottom-20 lg:bottom-24 right-4 md:right-8 lg:right-12 xl:right-16 z-20 transition-all duration-[1800ms] ease-out delay-[500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '#work';
          }}
          className="group px-12 py-5 border border-white/80 text-white font-light text-sm uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white whitespace-nowrap transition-all duration-500 ease-out backdrop-blur-md hover:backdrop-blur-lg hover:shadow-xl relative overflow-hidden"
        >
          <span className="relative z-10">EXPLORE PROJECTS</span>
          <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero; 





// {/* <div className={`absolute bottom-16 md:bottom-20 lg:bottom-24 right-4 md:right-8 lg:right-12 xl:right-16 z-20 transition-all duration-[1500ms] ease-out delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//         }`}>
//         <a
//           href="#work"
//           onClick={(e) => {
//             e.preventDefault();
//             window.location.hash = '#work';
//           }}
//           className="px-10 py-4 border-2 border-white/90 text-white font-semibold text-sm uppercase tracking-[0.12em] hover:bg-white hover:text-gray-900 whitespace-nowrap rounded-full transition-all duration-300 ease-out backdrop-blur-sm hover:backdrop-blur-none hover:shadow-2xl"
//         >
//           EXPLORE US 
//         </a>
//       </div> */} 


