import { useEffect, useState, useRef } from 'react';

const ExploreProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const done = useRef(false);

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
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-gray-50 to-white py-24 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <h2 className={`font-['Times_New_Roman',serif] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 tracking-[-0.03em] uppercase mb-20 md:mb-24 lg:mb-28 transition-all duration-[1800ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className={`inline-block transition-all duration-[1500ms] ease-out delay-[100ms] hover:text-gray-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>EXPLORE</span>{' '}
          <span className={`inline-block transition-all duration-[1500ms] ease-out delay-[300ms] hover:text-gray-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-18">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${(index + 1) * 250}ms` }}
            >
              <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2000ms] ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 z-20">
                  <p className="text-white text-lg md:text-xl font-light">{project.description}</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-['Times_New_Roman',serif] text-xl md:text-2xl lg:text-3xl font-light text-gray-800 tracking-[-0.01em] uppercase">
                  {project.title}
                </p>
                <div className="mt-4 h-px w-0 bg-gray-800 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProjects;
