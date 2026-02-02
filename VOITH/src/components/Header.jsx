import { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { NAVIGATION_ITEMS } from '../constants';

const Header = () => {
  const { content } = useContent();
  const navItems = Array.isArray(content?.navItems) && content.navItems.length > 0 ? content.navItems : NAVIGATION_ITEMS;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [projectsOverlayVisible, setProjectsOverlayVisible] = useState(false);
  const [isWorkPage, setIsWorkPage] = useState(false);
  const [isGalleryPage, setIsGalleryPage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const projects = [
    { 
      title: 'UNITED TRADERS SYNDICATE', 
      href: '#toyota',
      image: '/homepage.jpg',
    },
    { 
      title: 'PITSTOP', 
      href: '#pitstop',
      image: '/home2.png',
    },
    { 
      title: 'VAIDYA ENERGY', 
      href: '#vaidya',
      image: '/homepage.jpg',
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

  useEffect(() => {
    const handleScroll = () => {
      const pastHero = window.scrollY >= window.innerHeight * 0.85;
      setIsScrolled(pastHero);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen((v) => !v);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeDesktopMenu = () => {
    setIsDesktopMenuOpen(false);
    setProjectsOverlayVisible(false);
  };

  useEffect(() => {
    if (isDesktopMenuOpen) {
      const t = setTimeout(() => setProjectsOverlayVisible(true), 200);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [isDesktopMenuOpen]);

  const useSolidNav = isScrolled || isWorkPage || isGalleryPage;
  const useLightText = !useSolidNav;
  const textColorClass = useLightText ? 'text-white' : 'text-gray-800';
  const iconColorClass = useLightText ? 'text-white' : 'text-gray-800';

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-[70] transition-colors duration-300 ${
        useSolidNav ? 'bg-[#FFFBF5]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-1 sm:pt-2 md:pt-3 lg:pt-4 xl:pt-5 pb-1 sm:pb-1.5 md:pb-2 flex items-center justify-between">
        
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
          {navItems.map((item) => (
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
              className={`${textColorClass} font-semibold text-[10px] md:text-[11px] lg:text-xs hover:text-[#E85244] transition-colors uppercase tracking-[0.1em] leading-none relative top-[1px]`}
            >
              {item.label}
            </a>
          ))}
          {!isDesktopMenuOpen && (
            <button 
              className={`${iconColorClass} ml-2 md:ml-4 relative z-[70] flex items-center`} 
              aria-label="Toggle projects menu"
              onClick={toggleDesktopMenu}
            >
              <svg className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          )}
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

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-16 sm:pt-20 overflow-y-auto bg-[#FFFBF5]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full pt-4 pb-8">
            <nav className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
              {navItems.map((item) => (
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
                  className="text-gray-800 font-semibold text-base sm:text-lg hover:text-[#E85244] transition-colors uppercase tracking-[0.1em]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 sm:mb-4">PROJECTS</p>
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.href}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = project.href;
                      closeMobileMenu();
                    }}
                    className="block text-gray-700 font-light text-sm sm:text-base hover:text-[#E85244] transition-colors uppercase tracking-[0.1em] py-1.5 sm:py-2"
                  >
                    {project.title}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Projects Menu  */}
      {isDesktopMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-[#FFFBF5]/95 z-[55] backdrop-blur-sm transition-opacity duration-500"
            onClick={closeDesktopMenu}
          ></div>
          <div className="fixed inset-0 z-[60] overflow-y-auto">
            <div className="min-h-screen bg-[#FFFBF5]">
         
              <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-7 md:pt-8 lg:pt-10 xl:pt-12">
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 cursor-pointer"
                    onClick={() => {
                      window.location.hash = '';
                      closeDesktopMenu();
                    }}
                  >
                    <img
                      src="/voithlogo.png"
                      alt="VOITH"
                      className="h-10 sm:h-12 md:h-14 lg:h-14 w-auto object-contain"
                    />
                  </div>

                  <button
                    onClick={closeDesktopMenu}
                    aria-label="Close"
                    className="text-gray-900 hover:text-[#E85244] transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

         
              <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-10 sm:pb-12">
                <div className="mb-10 sm:mb-12">
                  <h2
                    className={`font-['Times_New_Roman',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-gray-900 uppercase transition-all duration-[1800ms] ease-out ${
                      projectsOverlayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    COMPANIES
                  </h2>
                  <div className="mt-3 h-px w-24 bg-gradient-to-r from-[#E85244] via-[#E85244] to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                  {projects.map((project, index) => (
                    <a
                      key={index}
                      href={project.href}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = project.href;
                        closeDesktopMenu();
                      }}
                      className={`group block transition-all duration-[1800ms] ease-out ${
                        projectsOverlayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      } hover:-translate-y-1`}
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />

                        {project.badge && (
                          <div className="absolute bottom-4 right-4 z-10">
                            <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur text-[10px] tracking-[0.25em] uppercase text-gray-700">
                              {project.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="pt-6">
                        <p className="font-['Times_New_Roman',serif] text-3xl lg:text-4xl font-light text-gray-900 tracking-[-0.01em] uppercase">
                          {project.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 border-t border-gray-300/60"></div>

                {/* Bottom nav row */}
                <div className="mt-10 flex items-center justify-center gap-8 sm:gap-10">
                  <div className="flex items-center gap-8 sm:gap-10">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          if (item.href.startsWith('#')) {
                            e.preventDefault();
                            window.location.hash = item.href === '#home' ? '' : item.href;
                            closeDesktopMenu();
                          }
                        }}
                        className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] text-gray-700 hover:text-[#E85244] transition-colors font-medium"
                      >
                        {item.label}
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
