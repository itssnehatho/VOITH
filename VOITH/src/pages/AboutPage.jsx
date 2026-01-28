import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutImageVisible, setAboutImageVisible] = useState(false);
  const [value1Visible, setValue1Visible] = useState(false);
  const [value2Visible, setValue2Visible] = useState(false);
  const [value3Visible, setValue3Visible] = useState(false);
  const [exploreVisible, setExploreVisible] = useState(false);
  const aboutImageRef = useRef(null);
  const value1Ref = useRef(null);
  const value2Ref = useRef(null);
  const value3Ref = useRef(null);
  const exploreRef = useRef(null);

  useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      setCurtainUp(true);
      setTimeout(() => setHeroVisible(true), 1000);
    }, 1500);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutImageVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (aboutImageRef.current) observer.observe(aboutImageRef.current);
    return () => aboutImageRef.current && observer.unobserve(aboutImageRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === value1Ref.current) setValue1Visible(true);
          if (entry.target === value2Ref.current) setValue2Visible(true);
          if (entry.target === value3Ref.current) setValue3Visible(true);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );
    const r1 = value1Ref.current, r2 = value2Ref.current, r3 = value3Ref.current;
    if (r1) observer.observe(r1);
    if (r2) observer.observe(r2);
    if (r3) observer.observe(r3);
    return () => {
      if (r1) observer.unobserve(r1);
      if (r2) observer.unobserve(r2);
      if (r3) observer.unobserve(r3);
    };
  }, []);

  useEffect(() => {
    const el = exploreRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExploreVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div className="page-root min-h-screen bg-[#FAF5ED] relative overflow-anchor-none">
      <div className={`relative overflow-anchor-none transition-opacity duration-[2000ms] ease-out ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[900px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/homepage.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 max-w-[1440px] mx-auto">
            <h1 className={`font-['Times_New_Roman',serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-8 sm:mb-10 max-w-7xl leading-[1.2] tracking-[-0.01em] drop-shadow-lg transition-all duration-[1800ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              VOITH'S HISTORY IS DEFINED BY DETERMINATION AND A DRIVE TO ACHIEVE AMBITIOUS GOALS.
            </h1>
            <div className={`flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 transition-all duration-[1800ms] ease-out delay-[300ms] ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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

        {/* About Us Section — one hero image, editorial layout, padding-aligned */}
        <section className="w-full bg-[#FDFBF8] py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">

              {/* Single hero image — left on desktop, top on mobile */}
              <div ref={aboutImageRef} className="order-2 lg:order-1">
                <div className={`relative overflow-hidden transition-opacity duration-[1500ms] ease-out group ${aboutImageVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="relative aspect-[4/5] lg:aspect-[3/4]">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 z-10" aria-hidden />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none z-[2]" />
                    <img
                      src="/homepage.jpg"
                      alt="VOITH — Our story"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* Text content — right on desktop */}
              <div className="order-1 lg:order-2 lg:py-4">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <span className="h-px w-8 sm:w-12 bg-red-600" aria-hidden />
                  <h2 className="font-['Times_New_Roman',serif] text-xs sm:text-sm font-normal text-gray-500 tracking-[0.25em] uppercase">
                    ABOUT US
                  </h2>
                </div>

                <p className="font-['Times_New_Roman',serif] text-base sm:text-lg md:text-xl text-gray-800 leading-[1.9] sm:leading-[2] tracking-[-0.01em] text-justify mb-10 sm:mb-12">
                  <span className="text-gray-900 font-medium">VOITH</span> or Vaidya's Organization of Industries & Trading Houses is a dynamic business organization in Nepal, dedicated to integrity, excellence, and leadership. We are involved in trading houses, industrial enterprises, services, construction, and educational academies. We prioritize industries that uplift the Nepali people, especially labor-intensive and agro-based sectors, creating sustainable growth and national impact.
                </p>

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                  <div className="pl-4 sm:pl-6 md:pl-8 border-l-2 border-red-600/30">
                    <h3 className="font-['Times_New_Roman',serif] text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-3 sm:mb-4 tracking-[-0.02em] uppercase">
                      Our Legacy
                    </h3>
                    <p className="font-sans text-sm sm:text-base md:text-lg text-gray-700 leading-[1.9] sm:leading-[2] tracking-[0.01em] font-light text-justify">
                      Established in 1964, VOITH has been at the forefront of Nepal's industrial and commercial development for over five decades. Our journey began with a vision to create meaningful economic opportunities and has evolved into a comprehensive organization that touches multiple sectors of the economy. Through strategic partnerships and innovative approaches, we continue to shape the business landscape of Nepal.
                    </p>
                  </div>

                  <div className="pl-4 sm:pl-6 md:pl-8 border-l-2 border-red-600/30">
                    <h3 className="font-['Times_New_Roman',serif] text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-3 sm:mb-4 tracking-[-0.02em] uppercase">
                      Our Commitment
                    </h3>
                    <p className="font-sans text-sm sm:text-base md:text-lg text-gray-700 leading-[1.9] sm:leading-[2] tracking-[0.01em] font-light text-justify">
                      We believe in building lasting relationships with our partners, customers, and communities. Our commitment extends beyond business success to encompass social responsibility, environmental stewardship, and the empowerment of local talent. Every project we undertake reflects our core values of quality, innovation, and sustainable development, ensuring that our work contributes positively to Nepal's future.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Values Section — scroll reveal: Vision, then Mission, then Values (opacity-only to avoid viewport jump) */}
        <section className="w-full bg-[#FAF5ED] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 border-t border-gray-100 overflow-anchor-none">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col md:flex-row md:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16">

              <div className="md:w-1/3">
                <h2 className="font-['Times_New_Roman',serif] text-xs sm:text-xs md:text-sm font-normal text-gray-500 tracking-[0.2em] uppercase">
                  <span className="text-red-600">•</span> OUR VALUES
                </h2>
              </div>

              <div className="md:w-2/3 space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
                <div
                  ref={value1Ref}
                  className={`border-l-2 border-red-600/30 pl-4 sm:pl-6 md:pl-8 transition-opacity duration-[3200ms] ease-out ${value1Visible ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h3 className="font-['Times_New_Roman',serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-5 md:mb-6 tracking-[-0.02em]">
                    VISION
                  </h3>
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-[1.8] sm:leading-[1.85] tracking-[-0.01em] font-light text-justify">
                    VOITH or Vaidya's Organization of Industries & Trading Houses is a dynamic business organization in Nepal, dedicated to integrity, excellence, and leadership. We represent integrated trading houses and industrial enterprises committed to Nepal's development.
                  </p>
                </div>

                <div
                  ref={value2Ref}
                  className={`border-l-2 border-red-600/30 pl-4 sm:pl-6 md:pl-8 transition-opacity duration-[3200ms] ease-out ${value2Visible ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h3 className="font-['Times_New_Roman',serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-5 md:mb-6 tracking-[-0.02em]">
                    MISSION
                  </h3>
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-[1.8] sm:leading-[1.85] tracking-[-0.01em] font-light text-justify">
                    VOITH or Vaidya's Organization of Industries & Trading Houses is a dynamic business organization in Nepal, dedicated to integrity, excellence, and leadership. We represent integrated trading houses and industrial enterprises committed to Nepal's development.
                  </p>
                </div>

                <div
                  ref={value3Ref}
                  className={`border-l-2 border-red-600/30 pl-4 sm:pl-6 md:pl-8 transition-opacity duration-[3200ms] ease-out ${value3Visible ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h3 className="font-['Times_New_Roman',serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-5 md:mb-6 tracking-[-0.02em]">
                    VALUES
                  </h3>
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-[1.8] sm:leading-[1.85] tracking-[-0.01em] font-light text-justify">
                    VOITH or Vaidya's Organization of Industries & Trading Houses is a dynamic business organization in Nepal, dedicated to integrity, excellence, and leadership. We represent integrated trading houses and industrial enterprises committed to Nepal's development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Projects — opacity-only entrance (no translate) so scroll doesn’t jump */}
        <section ref={exploreRef} className="w-full bg-[#FAF5ED] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 border-t border-gray-100 overflow-anchor-none">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className={`transition-opacity duration-[1200ms] ease-out ${exploreVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="font-['Times_New_Roman',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 tracking-[-0.03em] uppercase mb-4">
                <span className="inline-block hover:text-red-600 transition-colors duration-300">EXPLORE</span>{' '}
                <span className="inline-block hover:text-red-600 transition-colors duration-300">PROJECTS</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-red-600 to-transparent mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 overflow-anchor-none">
              {["/homepage.jpg", "/home2.png"].map((src, index) => (
                <div
                  key={index}
                  className={`group transition-opacity duration-[1200ms] ease-out ${exploreVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] overflow-hidden mb-6 sm:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                    <img 
                      src={src} 
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="font-['Times_New_Roman',serif] text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-800 tracking-[-0.01em] uppercase">
                      {index === 0 ? "RESIDENTIAL PROJECTS" : "COMMERCIAL PROJECTS"}
                    </p>
                    <div className="mt-3 sm:mt-4 h-px w-full bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>

      <div className={`fixed inset-0 bg-white z-[9999] pointer-events-none transition-all duration-[1000ms] ease-out flex flex-col items-center justify-center ${curtainUp ? '-translate-y-full' : 'translate-y-0'}`}>
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

export default AboutPage;
