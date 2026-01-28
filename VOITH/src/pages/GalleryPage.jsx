import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const titleRef = useRef(null);
  const imagesRef = useRef(null);

  const galleryImages = [
    [
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 1' },
      { src: '/home2.png', alt: 'VOITH Gallery Image 2' },
    ],
    { src: '/homepage.jpg', alt: 'VOITH Gallery Image 3', fullWidth: true },
    [
      { src: '/home2.png', alt: 'VOITH Gallery Image 4' },
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 5' },
    ],
    { src: '/home2.png', alt: 'VOITH Gallery Image 6', fullWidth: true },
    [
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 7' },
      { src: '/home2.png', alt: 'VOITH Gallery Image 8' },
    ],
    { src: '/homepage.jpg', alt: 'VOITH Gallery Image 9', fullWidth: true },
    [
      { src: '/home2.png', alt: 'VOITH Gallery Image 10' },
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 11' },
    ],
    { src: '/home2.png', alt: 'VOITH Gallery Image 12', fullWidth: true },
    [
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 13' },
      { src: '/home2.png', alt: 'VOITH Gallery Image 14' },
    ],
    { src: '/homepage.jpg', alt: 'VOITH Gallery Image 15', fullWidth: true },
    [
      { src: '/home2.png', alt: 'VOITH Gallery Image 16' },
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 17' },
    ],
    { src: '/home2.png', alt: 'VOITH Gallery Image 18', fullWidth: true },
    [
      { src: '/homepage.jpg', alt: 'VOITH Gallery Image 19' },
      { src: '/home2.png', alt: 'VOITH Gallery Image 20' },
    ],
    { src: '/homepage.jpg', alt: 'VOITH Gallery Image 21', fullWidth: true },
  ];

  useEffect(() => {
    const t = setTimeout(() => setCurtainUp(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!curtainUp) return;
    const t = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(t);
  }, [curtainUp]);

  return (
    <div className="page-root min-h-screen bg-[#FAF5ED] relative overflow-anchor-none">
      <div className="relative overflow-anchor-none">
        <Header />

        {/* Title  */}
        <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div>
              <h1
                ref={titleRef}
                className={`font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 tracking-tight uppercase transition-all duration-[1800ms] ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                GALLERY
              </h1>
              <div className="h-px w-20 bg-gradient-to-r from-red-600 to-transparent mt-4"></div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          ref={imagesRef}
          className="w-full pb-20 sm:pb-24 md:pb-32 lg:pb-36 xl:pb-40 overflow-anchor-none"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-8 sm:space-y-10 md:space-y-12">
            {galleryImages.map((row, rowIndex) => {
              if (row.fullWidth) {
                return (
                  <div
                    key={rowIndex}
                    className="group"
                  >
                    <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden mb-3 sm:mb-5">
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <img
                        src={row.src}
                        alt={row.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-['Times_New_Roman',serif] text-sm sm:text-base md:text-lg uppercase font-light text-center tracking-tight mb-2">
                        VIEW MEDIA
                      </p>
                      <div className="h-0.5 w-6 mx-auto bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={rowIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
                >
                  {row.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="group"
                      >
                        <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden mb-3 sm:mb-5">
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                          />
                        </div>
                        <div className="text-center">
                          <p className="font-['Times_New_Roman',serif] text-sm sm:text-base md:text-lg uppercase font-light text-center tracking-tight mb-2">
                            VIEW MEDIA
                          </p>
                          <div className="h-0.5 w-6 mx-auto bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>

        <Footer />
      </div>

      {/* Curtain  */}
      <div
        className={`fixed inset-0 bg-white z-[9999] pointer-events-none transition-all duration-[1000ms] ease-out flex flex-col items-center justify-center ${
          curtainUp ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <img
          src="/voithlogo.png"
          alt="VOITH"
          className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-80 mb-4"
          style={{ animation: 'spin-reverse 1.5s linear', animationFillMode: 'forwards' }}
        />
        <p className="text-sm md:text-base text-gray-600 tracking-wider uppercase">LOADING...</p>
      </div>
    </div>
  );
};

export default GalleryPage;
