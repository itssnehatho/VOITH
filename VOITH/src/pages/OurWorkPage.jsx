import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OurWorkPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      setCurtainUp(true);
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2500);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current); 
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <div className="relative">
        <Header />
      
      {/* Hero Section with Title */}
      <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h1 ref={titleRef} className={`font-['Times_New_Roman',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 tracking-tight transition-all duration-[1500ms] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            OUR WORK
          </h1>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section ref={projectsRef} className="w-full pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Project 1 - Residential Projects */}
            <div className={`group transition-all duration-1000 delay-100 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/homepage.jpg" 
                  alt="Residential Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Explore our residential developments here</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  RESIDENTIAL PROJECTS
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Project 2 - Commercial Projects */}
            <div className={`group transition-all duration-1000 delay-200 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/home2.png" 
                  alt="Commercial Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Explore our modern commercial spaces here</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  COMMERCIAL PROJECTS
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Project 3 - Industrial Projects */}                                      
            <div className={`group transition-all duration-1000 delay-300 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/homepage.jpg" 
                  alt="Industrial Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Explore our industrial excellence here</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  INDUSTRIAL PROJECTS
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Project 4 - Infrastructure Projects */}
            <div className={`group transition-all duration-1000 delay-400 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/home2.png" 
                  alt="Infrastructure Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Building the future</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  INFRASTRUCTURE
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Project 5 - Hospitality Projects */}
            <div className={`group transition-all duration-1000 delay-500 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/homepage.jpg" 
                  alt="Hospitality Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Luxury hospitality spaces</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  HOSPITALITY
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Project 6 - Mixed-Use Projects */}
            <div className={`group transition-all duration-1000 delay-600 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/home2.png" 
                  alt="Mixed-Use Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Explore our Integrated developments here</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  MIXED-USE
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Project 7 - Retail Projects */}    
            <div className={`group transition-all duration-1000 delay-700 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/homepage.jpg" 
                  alt="Retail Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Explore our modern retail spaces here</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  RETAIL PROJECTS
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Project 8 - Educational Projects */}
            <div className={`group transition-all duration-1000 delay-800 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/home2.png" 
                  alt="Educational Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Educational facilities</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  EDUCATIONAL
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Project 9 - Healthcare Projects */}
            <div className={`group transition-all duration-1000 delay-900 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/homepage.jpg" 
                  alt="Healthcare Projects" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg font-light">Healthcare excellence</p>
                </div>
              </div>
              <div className="pt-2"> 
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight uppercase">
                  HEALTHCARE
                </p>
                <div className="mt-3 h-0.5 w-0 bg-gray-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
      <div className={`fixed inset-0 bg-white z-[9999] pointer-events-none transition-all duration-[1000ms] ease-out flex flex-col items-center justify-center ${
        curtainUp ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <img 
          src="/voithlogo.png" 
          alt="VOITH" 
          className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-80 mb-4"
          style={{ 
            animation: 'spin-reverse 1.5s linear',
            animationFillMode: 'forwards'
          }}
        />
        <p className="text-sm md:text-base text-gray-600 tracking-wider uppercase">LOADING...</p>
      </div>
    </div>
  );
};

export default OurWorkPage; 

