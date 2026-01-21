import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [leftImagesVisible, setLeftImagesVisible] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const rightImageRef = useRef(null);
  const leftImagesRef = useRef(null);

  useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      setCurtainUp(true);
      setTimeout(() => {
        setHeroVisible(true);
      }, 1000);
    }, 1500);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (rightImageRef.current) {
      observer.observe(rightImageRef.current);
    }

    return () => {
      if (rightImageRef.current) {
        observer.unobserve(rightImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeftImagesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (leftImagesRef.current) {
      observer.observe(leftImagesRef.current);
    }

    return () => {
      if (leftImagesRef.current) {
        observer.unobserve(leftImagesRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <div className={`relative transition-all duration-[2000ms] ease-out ${
        pageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
      }`}>
        <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[900px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/homepage.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32">
          <h1 className={`font-['Times_New_Roman',serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-8 sm:mb-10 max-w-7xl leading-[1.2] tracking-[-0.01em] drop-shadow-lg transition-all duration-[1500ms] ease-out ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            VOITH'S HISTORY IS DEFINED BY DETERMINATION AND A DRIVE TO ACHIEVE AMBITIOUS GOALS.
          </h1>

          {/* ESTD Logo */}
          <div className={`flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 transition-all duration-[1500ms] ease-out delay-[300ms] ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-white/90 text-[10px] sm:text-xs md:text-sm font-light tracking-[0.3em] uppercase">ESTD</span>
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img 
                src="/voithlogo.png" 
                alt="VOITH" 
                className="h-10 sm:h-12 md:h-16 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <span className="text-white/90 text-[10px] sm:text-xs md:text-sm font-light tracking-[0.3em] uppercase">1964</span>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="w-full bg-[#faf9f7] py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            {/* Left Side Images */}
            <div className="md:col-span-1 lg:col-span-3 space-y-6 sm:space-y-8" ref={leftImagesRef}>
              <div className={`relative w-full aspect-square overflow-hidden group transition-all duration-[1500ms] ease-out ${
                leftImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
              }`} style={{ transitionDelay: '0ms' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/home2.png"
                  alt="VOITH" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className={`relative w-full aspect-square overflow-hidden group transition-all duration-[1500ms] ease-out ${
                leftImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/homepage.jpg"
                  alt="VOITH"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className={`relative w-full aspect-square overflow-hidden group transition-all duration-[1500ms] ease-out ${
                leftImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
              }`} style={{ transitionDelay: '1200ms' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/home2.png"
                  alt="VOITH"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Center  Text */}
            <div className="md:col-span-1 lg:col-span-6 flex flex-col justify-center mt-8 md:mt-0">
              <h2 className="font-['Times_New_Roman',serif] text-xs sm:text-xs md:text-sm font-normal text-gray-500 mb-8 sm:mb-10 md:mb-12 tracking-[0.2em] uppercase">
                • ABOUT US
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-gray-700 leading-[1.85] sm:leading-[1.9] tracking-[0.02em] font-light">
                VOITH or Vaidya's Organization of Industries & Trading Houses is a dynamic business
                organization in Nepal, dedicated to integrity, excellence, and leadership. We are
                involved in various sectors including trading houses, industrial enterprises, services,
                construction, and educational academies. Our commitment to Nepal's development drives
                us to prioritize industries that uplift the Nepali people, especially labor-intensive
                and agro-based sectors, creating sustainable growth and national impact.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="md:col-span-2 lg:col-span-3 mt-8 md:mt-0" ref={rightImageRef}>
              <div className={`relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[750px] overflow-hidden group transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/home2.png"
                  alt="VOITH"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Heading on the left */}
            <div className="md:w-1/3">
              <h2 className="font-['Times_New_Roman',serif] text-xs sm:text-xs md:text-sm font-normal text-gray-500 tracking-[0.2em] uppercase">
                • OUR VALUES
              </h2>
            </div>

            {/* Content vertically */}
            <div className="md:w-2/3 lg:w-1/2 md:ml-auto">
              <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
                {/* Vision */}
                <div className="border-l-2 border-gray-200 pl-4 sm:pl-6 md:pl-8">
                  <h3 className="font-['Times_New_Roman',serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-5 md:mb-6 tracking-[-0.02em]">
                    VISION
                  </h3>
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-[1.8] sm:leading-[1.85] tracking-[-0.01em] font-light">
                    VOITH or Vaidya's Organization of Industries & Trading Houses is a dynamic business
                    organization in Nepal, dedicated to integrity, excellence, and leadership. We represent
                    integrated trading houses and industrial enterprises committed to Nepal's development.
                  </p>
                </div>

                {/* Mission 1 */}
                <div className="border-l-2 border-gray-200 pl-4 sm:pl-6 md:pl-8">
                  <h3 className="font-['Times_New_Roman',serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-5 md:mb-6 tracking-[-0.02em]">
                    MISSON
                  </h3>
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-[1.8] sm:leading-[1.85] tracking-[-0.01em] font-light">
                    VOITH or Vaidya's Organization of Industries & Trading Houses is a dynamic business
                    organization in Nepal, dedicated to integrity, excellence, and leadership. We represent
                    integrated trading houses and industrial enterprises committed to Nepal's development.
                  </p>
                </div>

                {/* Mission 2 */}
                <div className="border-l-2 border-gray-200 pl-4 sm:pl-6 md:pl-8">
                  <h3 className="font-['Times_New_Roman',serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-5 md:mb-6 tracking-[-0.02em]">
                    MISSON
                  </h3>
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-[1.8] sm:leading-[1.85] tracking-[-0.01em] font-light">
                    VOITH or Vaidya's Organization of Industries & Trading Houses is a dynamic business
                    organization in Nepal, dedicated to integrity, excellence, and leadership. We represent
                    integrated trading houses and industrial enterprises committed to Nepal's development. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Projects Section */}
      <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-12 sm:mb-16 md:mb-20 text-center tracking-[-0.02em] uppercase">
            EXPLORE PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Residential Projects */}
            <div className="group cursor-pointer">
              <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] overflow-hidden mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/homepage.jpg"
                  alt="Residential Projects"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                /> 
              </div>
              <p className="font-['Times_New_Roman',serif] text-lg sm:text-xl md:text-2xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                VIEW RESIDENTIAL PROJECTS
              </p>
            </div>

            {/* Other Projects */}
            <div className="group cursor-pointer">
              <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] overflow-hidden mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/home2.png"
                  alt="Projects"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="font-['Times_New_Roman',serif] text-lg sm:text-xl md:text-2xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                VIEW PROJECTS
              </p>
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

export default AboutPage;


