const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-12 md:py-16 lg:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-8 items-start">
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-[0.1em] uppercase">LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">OUR WORK</a></li>
              <li><a href="#gallery" className="text-gray-600 hover:text-gray-900 transition-colors">GALLARY</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">ABOUT</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">CONTACT</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-[0.1em] uppercase">FOLLOW US</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FACEBOOK</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">INSTAGRAM</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">TIKTOK</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">LINKED IN</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold mb-4 tracking-[0.1em] uppercase">GENERAL INQUIRES</h3>
            <p className="text-gray-600 mb-2">
              <a href="mailto:info@voith.com.np" className="hover:text-red-600 transition-colors">
                info@voith.com.np
              </a>
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Registered Office Address<br />
              Vaidya Energy, VOITH Complex,<br />
              Ananda Nagar, Dhumbarahi<br />
              P.O. BOX: 233/2640,<br />
              Kathmandu, Nepal
            </p>
          </div>

          <div className="flex justify-end md:justify-start">
            <img 
              src="/voithlogo.png" 
              alt="VOITH" 
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"
            />
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-gray-600 text-sm">
          <p>© 2024 VOITH ORGANIZATION. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
