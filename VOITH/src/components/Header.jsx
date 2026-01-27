import { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '../constants';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [isWorkPage, setIsWorkPage] = useState(false);
  const [isGalleryPage, setIsGalleryPage] = useState(false);

  const projects = [
    { 
      title: 'RESIDENTIAL PROJECTS', 
      href: '#work',
      image: '/homepage.jpg',
      description: 'Explore our residential developments here'
    },
    { 
      title: 'COMMERCIAL PROJECTS', 
      href: '#work',
      image: '/home2.png',
      description: 'Explore our modern commercial spaces here'
    },
    { 
      title: 'INDUSTRIAL PROJECTS', 
      href: '#work',
      image: '/homepage.jpg',
      description: 'Explore our industrial excellence here'
    },
    { 
      title: 'INFRASTRUCTURE', 
      href: '#work',
      image: '/home2.png',
      description: 'Building the future of Nepal'
    },
    { 
      title: 'HOSPITALITY', 
      href: '#work',
      image: '/homepage.jpg',
      description: 'Luxury hospitality spaces'
    },
    { 
      title: 'MIXED-USE', 
      href: '#work',
      image: '/home2.png',
      description: 'Integrated developments'
    },
    { 
      title: 'RETAIL PROJECTS', 
      href: '#work',
      image: '/homepage.jpg',
      description: 'Modern retail spaces'
    },
    { 
      title: 'EDUCATIONAL', 
      href: '#work',
      image: '/home2.png',
      description: 'Educational facilities'
    },
    { 
      title: 'HEALTHCARE', 
      href: '#work',
      image: '/homepage.jpg',
      description: 'Healthcare excellence'
    }
  ];

  useEffect(() => {
    const checkHash = () => {
      setIsWorkPage(window.location.hash === '#work');
      setIsGalleryPage(window.location.hash === '#gallery');
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDesktopMenu = () => {
    if (!isDesktopMenuOpen) {
      setIsDesktopMenuOpen(true);
      setTimeout(() => {
        setProjectsVisible(true);
      }, 100);
    } else {
      setProjectsVisible(false);
      setTimeout(() => {
        setIsDesktopMenuOpen(false);
      }, 500);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeDesktopMenu = () => {
    setProjectsVisible(false);
    setTimeout(() => {
      setIsDesktopMenuOpen(false);
    }, 500);
  };

  const textColorClass = (isWorkPage || isGalleryPage) ? 'text-gray-800' : 'text-white';
  const iconColorClass = (isWorkPage || isGalleryPage) ? 'text-gray-800' : 'text-white';

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-[70]">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-7 md:pt-8 lg:pt-10 xl:pt-12 pb-3 sm:pb-3.5 md:pb-4 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 cursor-pointer" 
          onClick={() => { window.location.hash = ''; }}
        >
          <img 
            src="/voithlogo.png" 
            alt="VOITH" 
            className="h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain"
          />
          <p className={`hidden lg:block text-xs md:text-sm lg:text-base font-light tracking-wide ${textColorClass} leading-none`}>
            Vaidya's Organization of Industry & Trading Houses
          </p>
        </div> 
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
          {NAVIGATION_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  if (item.href === '#home') {
                    window.location.hash = '';
                  } else {
                    window.location.hash = item.href;
                  }
                }
              }}
              className={`${textColorClass} font-semibold text-[10px] md:text-[11px] lg:text-xs hover:text-red-600 transition-colors uppercase tracking-[0.1em] leading-none relative top-[1px]`}
            >
              {item.label}
            </a>
          ))}
          <button 
            className={`${isDesktopMenuOpen ? 'text-white' : iconColorClass} ml-2 md:ml-4 relative z-[70] flex items-center`} 
            aria-label="Toggle projects menu"
            onClick={toggleDesktopMenu}
          >
            {isDesktopMenuOpen ? (
              <svg className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${iconColorClass} z-50`} 
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 pt-16 sm:pt-20">
          <nav className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6 md:px-8 pt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    if (item.href === '#home') {
                      window.location.hash = '';
                    } else {
                      window.location.hash = item.href; 
                    }
                  }
                  closeMobileMenu();
                }}
                className="text-white font-semibold text-base sm:text-lg hover:text-red-600 transition-colors uppercase tracking-[0.1em] text-center"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 sm:pt-6 border-t border-white/20 w-full max-w-xs sm:max-w-md">
              <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 sm:mb-4 text-center">PROJECTS</p>
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = project.href;
                    closeMobileMenu();
                  }}
                  className="block text-white/80 font-light text-sm sm:text-base hover:text-white hover:text-red-600 transition-colors uppercase tracking-[0.1em] py-1.5 sm:py-2 text-center"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Projects Menu */}
      {isDesktopMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/95 z-[55] backdrop-blur-sm transition-opacity duration-500"
            onClick={closeDesktopMenu}
          ></div>
          <div className="fixed inset-0 z-[60] overflow-y-auto pointer-events-none">
            <div className="min-h-screen flex flex-col pointer-events-auto">
              <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
                <div className="max-w-7xl w-full">
                  <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h2 className={`font-['Times_New_Roman',serif] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 tracking-[-0.02em] uppercase transition-all duration-1000 ease-out ${
                      projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                    }`}>
                      PROJECTS
                    </h2>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.href}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.hash = project.href;
                          closeDesktopMenu();
                        }}
                        className={`group block transition-all duration-1000 ease-out ${
                          projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden mb-4 sm:mb-6 rounded-sm">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                            <p className="text-white text-sm sm:text-base md:text-lg font-light">{project.description}</p>
                          </div>
                        </div>
                        <div className="pt-2">
                          <p className="font-['Times_New_Roman',serif] text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white tracking-[-0.01em] uppercase">
                            {project.title}
                          </p>
                          <div className="mt-3 sm:mt-4 h-px w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
