import { useEffect, useState, useRef } from 'react';
import { ABOUT_US_CONTENT } from '../constants';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' } 
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []); 

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 md:py-28 lg:py-32"> 
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-[1800ms] ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6' 
          }`}>
            <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              <img 
                src="/home2.png" 
                alt="VOITH Building" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]" 
              />
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 transition-all duration-[1800ms] ease-out delay-[200ms] ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}> 
            <h2 className={`text-xs md:text-sm font-light text-gray-500 mb-10 tracking-[0.2em] uppercase transition-all duration-[1500ms] ease-out delay-[300ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {ABOUT_US_CONTENT.title}
            </h2>
            <p className={`text-base md:text-lg lg:text-xl text-gray-700 leading-[1.85] mb-12 tracking-[-0.01em] font-light transition-all duration-[1500ms] ease-out delay-[400ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {ABOUT_US_CONTENT.description} 
            </p>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                window.location.hash = '#about';
              }}
              className={`group inline-block px-12 py-5 bg-gray-900 text-white font-light text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition-all duration-500 ease-out hover:shadow-xl relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <span className="relative z-10">{ABOUT_US_CONTENT.buttonText}</span>
              <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;