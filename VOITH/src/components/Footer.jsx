const Footer = () => {
  return (
    <footer className="w-full bg-[#FFFBF5] text-black py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 border-t border-gray-200 relative z-10">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 items-start">

          {/* Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-[0.1em] uppercase">LINKS</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a 
                href="#work" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#work';
                }}
                className="text-sm sm:text-base text-gray-600 hover:text-[#E85244] transition-colors"
              >OUR WORK</a></li>
              <li><a 
                href="#gallery" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#gallery';
                }}
                className="text-sm sm:text-base text-gray-600 hover:text-[#E85244] transition-colors"
              >GALLERY</a></li>
              <li><a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#about';
                }}
                className="text-sm sm:text-base text-gray-600 hover:text-[#E85244] transition-colors"
              >ABOUT</a></li>
              <li><a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#contact';
                }}
                className="text-sm sm:text-base text-gray-600 hover:text-[#E85244] transition-colors"
              >CONTACT</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-[0.1em] uppercase">FOLLOW US</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#E85244] transition-colors">FACEBOOK</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#E85244] transition-colorss">INSTAGRAM</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#E85244] transition-colors">TIKTOK</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#E85244] transition-colors">LINKEDIN</a></li>
            </ul>
          </div>

          {/* General Inquiries */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-[0.1em] uppercase">GENERAL INQUIRIES</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              <a href="mailto:info@voith.com.np" className="hover:text-[#E85244] transition-colors break-all">
                info@voith.com.np
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Registered Office Address<br />
              VOITH Complex,<br />
              Ananda Nagar, Dhumbarahi<br />
              P.O. BOX: 233/2640,<br />
              Kathmandu, Nepal
            </p>
          </div>

          {/* Logo */}
          <div className="flex justify-end mt-4 sm:mt-0">
            <img 
              src="/voithlogo.png" 
              alt="VOITH" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 sm:pt-8 text-center text-gray-600 text-xs sm:text-sm">
          <p>© 2024 VOITH ORGANIZATION. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
