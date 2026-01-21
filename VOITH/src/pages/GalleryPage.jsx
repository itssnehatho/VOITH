import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);
  const titleRef = useRef(null);
  const imagesRef = useRef(null);

  const galleryImages = {
    topRow: [
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 1' },
      { src: '/home2.png', alt: 'VOITH Gallery Image 2' }
    ],
    middle: { src: '/homepage.jpg', alt: 'VOITH Gallery Image 3' },
    bottomRow: [
      { src: '/home2.png', alt: 'VOITH Gallery Image 4' },
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 5' } 
    ]
  };

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
          setImagesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imagesRef.current) {
      observer.observe(imagesRef.current); 
    }

    return () => {
      if (imagesRef.current) {
        observer.unobserve(imagesRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <div className="relative">
        <Header />
      
      <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h1 ref={titleRef} className={`font-['Times_New_Roman',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 tracking-tight transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            GALLERY
          </h1>
        </div>
      </section>

      <section ref={imagesRef} className="w-full pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {galleryImages.topRow.map((image, index) => (
                <div 
                  key={index}
                  className={`group transition-all duration-1000 ${imagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <p className="font-['Times_New_Roman',serif] text-base sm:text-lg md:text-xl font-light text-gray-900 tracking-tight uppercase text-center">
                    VIEW MEDIA
                  </p>
                </div>
              ))}
            </div>

            <div 
              className={`group transition-all duration-1000 ${imagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={galleryImages.middle.src} 
                  alt={galleryImages.middle.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="font-['Times_New_Roman',serif] text-base sm:text-lg md:text-xl font-light text-gray-900 tracking-tight uppercase text-center">
                VIEW MEDIA
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {galleryImages.bottomRow.map((image, index) => (
                <div 
                  key={index}
                  className={`group transition-all duration-1000 ${imagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <p className="font-['Times_New_Roman',serif] text-base sm:text-lg md:text-xl font-light text-gray-900 tracking-tight uppercase text-center">
                    VIEW MEDIA 
                  </p>
                </div>
              ))}
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

export default GalleryPage;
