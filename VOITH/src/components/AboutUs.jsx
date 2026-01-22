import { useEffect, useState, useRef } from 'react';
import { ABOUT_US_CONTENT } from '../constants';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const autoPlayRef = useRef(null);

  const images = ['/home2.png', '/homepage.jpg', '/home2.png', '/homepage.jpg'];

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

  useEffect(() => {
    if (!isVisible) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isVisible, images.length]);

  const resetTimer = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimer();
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimer();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetTimer();
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-[1800ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img 
                    src={image} 
                    alt="VOITH Building" 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]" 
                  />
                </div>
              ))}
              
              <button
                onClick={goToPrevious}
                className="absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-5 sm:w-6 md:w-8' : 'bg-white/50 hover:bg-white/75'}`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 transition-all duration-[1800ms] ease-out delay-[200ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}> 
            <h2 className={`text-[10px] sm:text-xs md:text-sm font-light text-gray-500 mb-6 sm:mb-8 md:mb-10 tracking-[0.2em] uppercase transition-all duration-[1500ms] ease-out delay-[300ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {ABOUT_US_CONTENT.title}
            </h2>
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-[1.75] sm:leading-[1.85] mb-8 sm:mb-10 md:mb-12 tracking-[-0.01em] font-light transition-all duration-[1500ms] ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {ABOUT_US_CONTENT.description} 
            </p>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                window.location.hash = '#about';
              }}
              className={`group inline-block px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 bg-gray-900 text-white font-light text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition-all duration-500 ease-out hover:shadow-xl relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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