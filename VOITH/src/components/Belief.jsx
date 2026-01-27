import { useEffect, useState, useRef } from 'react';
import { BELIEF_TEXT } from '../constants';

const Belief = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-white via-[#fafafa] to-white min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 text-center">
        <div className="flex justify-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24">
          <div className={`flex items-center justify-center transition-all duration-[2000ms] ease-out ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}`}>
            <img 
              src="/voithlogo.png" 
              alt="VOITH" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transition-all duration-700 ease-out hover:scale-105 filter drop-shadow-lg"
            />
          </div>
        </div>
        
        <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-[1.8] sm:leading-[1.9] max-w-4xl mx-auto uppercase tracking-[0.08em] font-light transition-all duration-[1800ms] ease-out delay-[300ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-red-600/80">{BELIEF_TEXT.split(' ')[0]}</span> {BELIEF_TEXT.split(' ').slice(1).join(' ')}
        </p>
      </div>
    </section>
  );
};

export default Belief;
