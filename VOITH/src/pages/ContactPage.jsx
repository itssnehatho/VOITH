import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const contactRef = useRef(null);
  const formRef = useRef(null);

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
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div className="page-root min-h-screen bg-[#FAF5ED] relative overflow-anchor-none">
      <div className="relative overflow-anchor-none">
        <Header />

        {/* Hero Section  */}
        <section className="relative w-full min-h-[100vh] flex flex-col">
          <div
            className="absolute inset-0 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/homepage.jpg')" }}
            aria-hidden
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-end pt-32 sm:pt-40 lg:pt-48 pb-14 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
            <div className={`mb-6 transition-all duration-[1800ms] ease-out delay-[200ms] ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <span className="text-xs sm:text-sm font-light text-white/80 tracking-[0.3em] uppercase">
                <span className="text-red-600">•</span> CONTACT
              </span>
            </div>
            <h1 className={`font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-3 sm:mb-4 md:mb-5 max-w-4xl leading-[1.1] tracking-[-0.02em] transition-all duration-[1800ms] ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              Reach Out Anytime
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-[1.8] font-light text-justify transition-all duration-[1800ms] ease-out delay-[300ms] ${
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
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20">

              {/* General Inquiries Row */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:gap-20 items-start transition-opacity duration-[1500ms] ease-out ${
                contactVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <div>
                  <h2 className="text-xs sm:text-xs md:text-sm font-light text-gray-500 mb-8 tracking-[0.2em] uppercase">
                    <span className="text-red-600">•</span> GENERAL INQUIRIES
                  </h2>
                  <div className="h-px w-16 bg-gray-300"></div>
                </div>
                <div className="group">
                  <p className="text-base sm:text-lg md:text-xl text-gray-900 mb-4 sm:mb-5 font-light">
                    <a 
                      href="mailto:info@voith.com.np" 
                      className="hover:text-red-600 transition-colors duration-300 border-b border-transparent hover:border-red-600 pb-1"
                    >
                      info@voith.com.np
                    </a>
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-[1.85] font-light text-justify">
                    Registered Office Address:<br />
                    <span className="text-gray-600">VOITH Complex, Ananda Nagar, Dhumbarahi</span><br />
                    <span className="text-gray-600">P.O. BOX: 233/2640</span><br />
                    <span className="text-gray-600">Kathmandu, Nepal</span>
                  </p>
                </div>
              </div>

              {/* Social Links Row */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:gap-20 items-center transition-opacity duration-[1500ms] ease-out delay-[200ms] ${
                contactVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <div>
                  <h2 className="text-xs sm:text-xs md:text-sm font-light text-gray-500 tracking-[0.2em] uppercase">
                    <span className="text-red-600">•</span> SOCIAL LINKS
                  </h2>
                  <div className="h-px w-16 bg-gray-300 mt-8"></div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                    <a href="#" className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-600 hover:text-white transition-colors" aria-label="Facebook">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-600 hover:text-white transition-colors" aria-label="Instagram">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-600 hover:text-white transition-colors" aria-label="TikTok">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1.05-.08 6.33 6.33 0 00-5.32 2.94 6.34 6.34 0 004.74 10.5 6.33 6.33 0 005.7-6.16v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-600 hover:text-white transition-colors" aria-label="LinkedIn">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Career Opportunities Row */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:gap-20 items-start transition-opacity duration-[1500ms] ease-out delay-[400ms] ${
                contactVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <div>
                  <h2 className="text-xs sm:text-xs md:text-sm font-light text-gray-500 tracking-[0.2em] uppercase">
                    <span className="text-red-600">•</span> CAREER OPPORTUNITIES
                  </h2>
                  <div className="h-px w-16 bg-gray-300 mt-8"></div>
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-light text-justify mb-2">
                    Please send your resume & work sample to:
                  </p>
                  <p>
                    <a 
                      href="mailto:careers@voith.com.np" 
                      className="text-sm sm:text-base md:text-lg text-gray-900 hover:text-red-600 transition-colors duration-300 border-b border-transparent hover:border-red-600 pb-1"
                    >
                      careers@voith.com.np
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          ref={formRef}
          className={`w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-[#FDFBF8] transition-opacity duration-[1500ms] ease-out ${
            contactVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-3 tracking-[-0.02em]">
                Send Us a Message
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-red-600"></div>
                <div className="h-1 w-1 rounded-full bg-red-600"></div>
                <div className="h-px w-12 bg-red-600"></div>
              </div>
            </div>

            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="group">
                  <label 
                    className="block text-sm font-light text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-red-600" 
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base text-gray-900 font-light bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none transition-all duration-300 placeholder:text-gray-400"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label 
                    className="block text-sm font-light text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-red-600" 
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base text-gray-900 font-light bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none transition-all duration-300 placeholder:text-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="group">
                <label 
                  className="block text-sm font-light text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-red-600" 
                  htmlFor="subject"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base text-gray-900 font-light bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none transition-all duration-300 placeholder:text-gray-400"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label 
                  className="block text-sm font-light text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-red-600" 
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base text-gray-900 font-light bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none transition-all duration-300 resize-none placeholder:text-gray-400"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full md:w-auto px-10 py-4 bg-transparent border border-gray-900 text-gray-900 text-sm font-light tracking-[0.1em] uppercase rounded-full transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </section>

        <Footer />
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