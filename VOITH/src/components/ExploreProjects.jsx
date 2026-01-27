import { useEffect, useState, useRef } from 'react';

const ExploreProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisibilities, setImageVisibilities] = useState({});
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const done = useRef(false);
  const imageAnimatedRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const imageObservers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !imageAnimatedRefs.current[index]) {
            imageAnimatedRefs.current[index] = true;
            setImageVisibilities(prev => ({ ...prev, [index]: true }));
            observer.unobserve(ref);
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      imageObservers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const projects = [
    {
      title: 'RESIDENTIAL PROJECTS',
      image: '/homepage.jpg',
      description: 'Explore our residential developments here'
    },
    {
      title: 'COMMERCIAL PROJECTS',
      image: '/home2.png',
      description: 'Explore our modern commercial spaces here'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-[#FAF5ED] to-[#FDFBF8] pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-12 sm:pb-16 md:pb-20">
      {/* Container aligned  */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div>
          <h2 className={`font-['Times_New_Roman',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 tracking-[-0.03em] uppercase mb-4 transition-all duration-[1800ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className={`inline-block transition-all duration-[1500ms] ease-out delay-[100ms] hover:text-red-600/80 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>EXPLORE</span>{' '}
            <span className={`inline-block transition-all duration-[1500ms] ease-out delay-[300ms] hover:text-red-600/80 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>PROJECTS</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-red-600 to-transparent mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${(index + 1) * 250}ms` }}
            >
              <div 
                ref={el => imageRefs.current[index] = el}
                className={`relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] overflow-hidden mb-6 sm:mb-8 transition-all duration-[2200ms] ease-out ${imageVisibilities[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2000ms] ease-out"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-['Times_New_Roman',serif] text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-800 tracking-[-0.01em] uppercase">
                  {project.title}
                </p>
                <div className="mt-3 sm:mt-4 h-px w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProjects;
