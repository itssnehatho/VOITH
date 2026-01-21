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
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-white via-[#fafafa] to-white py-20 md:py-24 lg:py-28 -mt-[100vh]">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
        <div className={`space-y-16 md:space-y-20 transition-all duration-[1800ms] ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {quotes.map((quote, index) => (
            <div key={index} className="text-center" style={{ transitionDelay: `${index * 250}ms` }}>
              <div className="flex justify-center mb-8 md:mb-10">
                <svg className="w-12 h-12 md:w-14 md:h-14 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="font-['Times_New_Roman',serif] text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-[1.65] font-light italic mb-8 md:mb-10">
                {quote.text}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-gray-200"></div>
                <p className="text-xs md:text-sm text-gray-500 font-light tracking-[0.2em] uppercase">
                  {quote.author}
                </p>
                <div className="w-16 h-px bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
