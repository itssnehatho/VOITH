import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';

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
    <div className="min-h-screen bg-[#FAF5ED] overflow-hidden relative">
      <div className="relative">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/homepage.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col justify-center pt-32 sm:pt-40 lg:pt-48 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className={`mb-6 transition-all duration-[1500ms] ease-out delay-[200ms] ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <span className="text-xs sm:text-sm font-light text-white/80 tracking-[0.3em] uppercase">
                <span className="text-red-600">•</span> CONTACT
              </span>
            </div>
            <h1 className={`font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 md:mb-10 max-w-4xl leading-[1.1] tracking-[-0.02em] transition-all duration-[1500ms] ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              Reach Out Anytime
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-[1.8] font-light text-justify transition-all duration-[1500ms] ease-out delay-[300ms] ${
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
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:gap-20 items-start transition-all duration-[1500ms] ease-out ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
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
                    <span className="text-gray-600">Vaidya Energy, VOITH Complex, Ananda Nagar, Dhumbarahi</span><br />
                    <span className="text-gray-600">P.O. BOX: 233/2640, Kathmandu, Nepal</span>
                  </p>
                </div>
              </div>

              {/* Social Links Row */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:gap-20 items-center transition-all duration-[1500ms] ease-out delay-[200ms] ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}>
                <div>
                  <h2 className="text-xs sm:text-xs md:text-sm font-light text-gray-500 tracking-[0.2em] uppercase">
                    <span className="text-red-600">•</span> SOCIAL LINKS
                  </h2>
                  <div className="h-px w-16 bg-gray-300 mt-8"></div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                    {['FACEBOOK', 'INSTAGRAM', 'LINKED IN', 'TIKTOK'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-gray-700 hover:text-red-600 transition-colors text-sm sm:text-base md:text-lg font-light"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Career Opportunities Row */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:gap-20 items-start transition-all duration-[1500ms] ease-out delay-[400ms] ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
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
          className={`w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-[#FDFBF8] transition-all duration-[1500ms] ease-out ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
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