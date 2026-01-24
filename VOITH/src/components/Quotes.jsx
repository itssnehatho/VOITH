import { useEffect, useState, useRef } from 'react';

const Quotes = () => {
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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const quotes = [
    {
      text: "Building excellence through innovation and integrity, we create lasting value for Nepal's future.",
      author: "VOITH"
    },
    // {
    //   text: "Remarkable futures are created when people, ideas, and industries move forward together.",
    //   author: "VOITH"
    // }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-white via-[#fafafa] to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className={`space-y-8 sm:space-y-10 md:space-y-12 transition-all duration-[1800ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {quotes.map((quote, index) => (
            <div key={index} className="text-center" style={{ transitionDelay: `${index * 250}ms` }}>
              <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="font-['Times_New_Roman',serif] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800 leading-[1.55] sm:leading-[1.6] md:leading-[1.65] font-light italic mb-4 sm:mb-5 md:mb-6 px-3 sm:px-4 md:px-2 block">
                {quote.text}
              </blockquote>
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
                <div className="w-10 sm:w-12 md:w-16 h-px bg-gray-200"></div>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-500 font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase whitespace-nowrap">
                  {quote.author}
                </p>
                <div className="w-10 sm:w-12 md:w-16 h-px bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
