import { useEffect, useState, useRef } from 'react';

const AboutUsImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const autoPlayRef = useRef(null);
  const rafId = useRef(null);
  const lastScrollX = useRef(0);
  const targetScrollX = useRef(0);
  const textHasAnimated = useRef(false);

  const AnimatedText = ({ text, className = '', duration = 0.65, stagger = 0.08, delay = 0 }) => {
    const words = text.split(' ');
    const shouldAnimate = scrollX > 0.2 && textVisible;
    
    return (
      <span className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block"
            style={{
              opacity: shouldAnimate ? 1 : 0,
              transform: shouldAnimate ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
              transitionDelay: shouldAnimate ? `${delay + (index * stagger)}s` : '0s',
              willChange: 'opacity, transform'
            }}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </span>
        ))}
      </span>
    );
  };

  const images = ['/home2.png', '/homepage.jpg', '/home2.png'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    const easeOutQuart = (t) => {
      return 1 - Math.pow(1 - t, 4);
    };

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      let newTargetScrollX = 0;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const sectionTop = rect.top;
        const scrollDistance = windowHeight * 1.5;
        let rawProgress = (windowHeight - sectionTop) / scrollDistance;
        rawProgress = Math.max(0, Math.min(1, rawProgress));
        newTargetScrollX = easeOutQuart(rawProgress);
      } else if (rect.top >= windowHeight) {
        newTargetScrollX = 0;
      } else if (rect.bottom <= 0) {
        newTargetScrollX = 1;
      }

      targetScrollX.current = newTargetScrollX;
    };

    const animate = () => {
      if (!sectionRef.current) return;
      
      const currentX = lastScrollX.current;
      const targetX = targetScrollX.current;
      const lerpFactor = 0.15;
      
      const newScrollX = Math.abs(targetX - currentX) < 0.001 
        ? targetX 
        : lerp(currentX, targetX, lerpFactor);
      
      if (Math.abs(newScrollX - lastScrollX.current) > 0.0001) {
        lastScrollX.current = newScrollX;
        setScrollX(newScrollX);
        
        if (newScrollX > 0.2 && !textHasAnimated.current) {
          textHasAnimated.current = true;
          setTimeout(() => {
            setTextVisible(true);
          }, 200);
        }
      }
      
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
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
    <section ref={sectionRef} className="w-full bg-white relative">
      {/* Mobile Layout: Simple stacked image-text pairs */}
      <div className="md:hidden">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            {/* Image */}
            <div className="relative w-full h-[300px] overflow-hidden">
              <img
                src={image}
                alt={`VOITH project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="px-6 py-10 bg-white">
              <div className="mb-6">
                <h2 className="font-['Times_New_Roman',serif] text-xs font-light text-gray-400 mb-3 tracking-[0.25em] uppercase block">
                  • OUR VISION
                </h2>
                <div className="w-12 h-px bg-gray-300 block"></div>
              </div>
              
              <div className="space-y-5">
                <p className="font-['Times_New_Roman',serif] text-lg text-gray-900 leading-[1.4] tracking-[-0.02em] font-light block">
                  We are committed to building remarkable futures through unity, collaboration, and shared purpose.
                </p>
                
                <p className="font-sans text-sm text-gray-600 leading-[1.85] font-light block">
                  Our organization empowers companies to achieve sustainable growth and create lasting national impact.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout: Original sticky overlay design */}
      <div className="hidden md:block relative" style={{ minHeight: '200vh' }}>
        <div className={`sticky top-0 h-screen transition-opacity duration-[2000ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-full h-full overflow-hidden" style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            isolation: 'isolate',
            willChange: 'transform'
          }}>
            {images.map((image, index) => {
              const containerWidth = sectionRef.current?.offsetWidth || window.innerWidth || 1920;
              const translateX = scrollX * (containerWidth * 0.5);
              const imageWidth = 100 - (scrollX * 50);
              
              return (
                <div
                  key={index}
                  className={`absolute ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  style={{
                    left: 0,
                    width: `${imageWidth}%`,
                    height: '100%',
                    transform: `translate3d(${translateX}px, 0, 0)`,
                    willChange: 'transform, width, opacity',
                    transition: index === currentIndex 
                      ? 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)' 
                      : 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <img
                    src={image}
                    alt="VOITH project"
                    className="w-full h-full object-cover"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      display: 'block',
                      willChange: 'transform'
                    }}
                  />
                </div>
              );
            })}

            <button
              onClick={goToPrevious}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Text Overlay */}
        <div 
          className="absolute left-0 top-0 w-1/2 min-h-[200vh] z-30 pointer-events-none"
          style={{
            opacity: scrollX > 0.15 ? Math.min(1, (scrollX - 0.15) / 0.25) : 0,
            transform: `translateX(${scrollX > 0.15 ? 0 : -30 * (1 - scrollX / 0.15)}px)`,
            willChange: 'opacity, transform'
          }}
        >
          <div className="sticky top-0 h-screen flex flex-col justify-center px-8 lg:px-12 xl:px-16 pointer-events-auto">
            <div className="mb-12">
              <h2 className="font-['Times_New_Roman',serif] text-base font-light text-gray-400 mb-3 tracking-[0.25em] uppercase">
                <AnimatedText 
                  text="• OUR VISION" 
                  duration={0.6} 
                  stagger={0.08}
                />
              </h2>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>
            
            <div className="space-y-8">
              <p className="font-['Times_New_Roman',serif] text-2xl lg:text-3xl text-gray-900 leading-[1.4] tracking-[-0.02em] font-light">
                <AnimatedText 
                  text="We are committed to building remarkable futures through unity, collaboration, and shared purpose." 
                  duration={0.7} 
                  stagger={0.08}
                  delay={0.1}
                />
              </p>
              
              <p className="font-sans text-base md:text-lg text-gray-600 leading-[1.85] font-light">
                <AnimatedText 
                  text="Our organization empowers companies to achieve sustainable growth and create lasting national impact." 
                  duration={0.65} 
                  stagger={0.07}
                  delay={0.2}
                />
              </p>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="font-sans text-base md:text-lg text-gray-700 leading-[1.85] mb-6 font-light">
                  <AnimatedText 
                    text="Through integrity, excellence, and leadership, we connect diverse industries, talents, and innovations to create lasting value for Nepal." 
                    duration={0.65} 
                    stagger={0.07}
                    delay={0.3}
                  />
                </p>
              </div>
              
              <p className="font-['Times_New_Roman',serif] text-xl md:text-2xl text-gray-900 leading-[1.4] tracking-[-0.02em] font-light">
                <AnimatedText 
                  text="Our commitment to Nepal's development drives us to support labor-intensive, agro-based industries to uplift the poorest people and create sustainable growth." 
                  duration={0.7} 
                  stagger={0.08}
                  delay={0.4}
                />
              </p>
              
              <p className="font-sans text-base md:text-lg text-gray-600 leading-[1.85] font-light">
                <AnimatedText 
                  text="We believe remarkable futures are created when people, ideas, and industries move forward together. Through collaboration and shared purpose, we empower our group of companies to achieve sustainable growth and national impact." 
                  duration={0.65} 
                  stagger={0.07}
                  delay={0.5}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsImage;
