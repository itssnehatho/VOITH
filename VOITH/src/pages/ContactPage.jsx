import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';

const ContactPage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const contactRef = useRef(null);

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
          setContactVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <div className="relative">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/homepage.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>

          {/* Hero Content  */}
          <div className="relative z-10 h-full flex flex-col justify-center pt-32 sm:pt-40 lg:pt-48 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <div className={`mb-6 transition-all duration-[1500ms] ease-out delay-[200ms] ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <span className="text-xs sm:text-sm font-light text-white/80 tracking-[0.3em] uppercase">CONTACT</span>
            </div>
            <h1 className={`font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 md:mb-10 max-w-4xl leading-[1.1] tracking-[-0.02em] transition-all duration-[1500ms] ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              Reach Out Anytime
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-[1.8] font-light transition-all duration-[1500ms] ease-out delay-[300ms] ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              For any business inquiries, support requests, or general questions, please contact us.
              Our team is committed to providing timely and reliable responses.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section
          ref={contactRef}
          className="w-full py-16 sm:py-20 md:py-24 lg:py-28"
          style={{ background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20">
              
              {/* Left Headings */}
              <div className={`space-y-12 sm:space-y-14 md:space-y-16 transition-all duration-[1500ms] ease-out ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}>
                <div>
                  <h2 className="text-xs sm:text-xs md:text-sm font-light text-gray-500 mb-8 tracking-[0.2em] uppercase">
                    • GENERAL INQUIRIES
                  </h2>
                  <div className="h-px w-16 bg-gray-300"></div>
                </div>
                <div>
                  <h2 className="text-xs sm:text-xs md:text-sm font-light text-gray-500 mb-8 tracking-[0.2em] uppercase">
                    • SOCIAL LINKS
                  </h2>
                  <div className="h-px w-16 bg-gray-300"></div>
                </div>
                <div>
                  <h2 className="text-xs sm:text-xs md:text-sm font-light text-gray-500 tracking-[0.2em] uppercase">
                    • CAREER OPPORTUNITIES
                  </h2>
                  <div className="h-px w-16 bg-gray-300 mt-8"></div>
                </div>
              </div>

              {/* Contact Details */}
              <div className={`space-y-12 sm:space-y-14 md:space-y-16 transition-all duration-[1500ms] ease-out delay-[200ms] ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}>
                
                {/* General Inquiries */}
                <div className="group">
                  <p className="text-base sm:text-lg md:text-xl text-gray-900 mb-4 sm:mb-5 font-light">
                    <a 
                      href="mailto:info@voith.com.np" 
                      className="hover:text-red-600 transition-colors duration-300 border-b border-transparent hover:border-red-600 pb-1"
                    >
                      info@voith.com.np
                    </a>
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-[1.85] font-light">
                    Registered Office Address:<br />
                    <span className="text-gray-600">Vaidya Energy, VOITH Complex, Ananda Nagar, Dhumbarahi</span><br />
                    <span className="text-gray-600">P.O. BOX: 233/2640, Kathmandu, Nepal</span>
                  </p>
                </div>

                {/* Social Links  */}
                <div>
                  <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                    {['FACEBOOK', 'INSTAGRAM', 'LINKED IN', 'TIKTOK'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="group/link text-gray-700 hover:text-red-600 transition-all duration-300 text-sm sm:text-base md:text-lg font-light relative"
                      >
                        <span className="relative z-10">{social}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-red-600 group-hover/link:w-full transition-all duration-300"></span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-light">
                    Please send your resume & work sample to:{' '}
                    <a 
                      href="mailto:careers@voith.com.np" 
                      className="text-gray-900 hover:text-red-600 transition-colors duration-300 border-b border-transparent hover:border-red-600 pb-1"
                    >
                      careers@voith.com.np
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Curtain Loading */}
      <div className={`fixed inset-0 bg-white z-[9999] pointer-events-none transition-all duration-[1000ms] ease-out flex flex-col items-center justify-center ${
        curtainUp ? '-translate-y-full' : 'translate-y-0'
      }`}>
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

export default ContactPage;
