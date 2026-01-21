const FeaturedIn = () => {
  return (
    <section className="w-full bg-white py-4 md:py-5 border-b border-gray-200">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between flex-wrap gap-3 md:gap-4"> 
          <h2 className="text-[8px] md:text-[9px] font-light text-gray-400 tracking-[0.25em] uppercase">  
            • FEATURED IN 
          </h2>
          <div className="flex items-end gap-4 md:gap-6 lg:gap-8">
            {[
              { src: '/toyota.png', name: 'Toyota', small: true },
              { src: '/vaidya.png', name: 'Vaidya Energy' },
              { src: '/pitstop.png', name: 'Pitstop' },
              { src: '/sasvata.png', name: 'Sasvata', small: true }
            ].map((logo) => (
              <div 
                key={logo.src} 
                className="flex items-end justify-center group"
                style={{ height: '50px', lineHeight: 0, display: 'flex', alignItems: 'flex-end' }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className={`${logo.small ? 'h-8 md:h-10 lg:h-12' : 'h-12 md:h-14 lg:h-16'} w-auto object-contain hover:scale-105 hover:opacity-80 grayscale-[0.4] hover:grayscale-0 transition-all duration-500 ease-out`}
                  style={{ verticalAlign: 'bottom', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
