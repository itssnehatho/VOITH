const FeaturedIn = () => {
  const logos = [
    { src: '/toyota.png', name: 'Toyota', small: true },
    { src: '/vaidya.png', name: 'Vaidya Energy', lower: true },
    { src: '/pitstop.png', name: 'Pitstop', lower: true },
    { src: '/sasvata.png', name: 'Sasvata', small: true }
  ];

  return (
    <section className="w-full bg-white py-2 md:py-3 border-b border-gray-200">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between flex-wrap gap-2 md:gap-3"> 
          <h2 className="text-[7px] md:text-[8px] font-light text-gray-400 tracking-[0.25em] uppercase">  
            • FEATURED IN 
          </h2>
          <div className="flex items-end gap-3 md:gap-4 lg:gap-5">
            {logos.map((logo) => (
              <div 
                key={logo.src} 
                className={`flex items-end justify-center group ${logo.lower ? 'translate-y-2 md:translate-y-3' : ''}`}
                style={{ height: '40px', lineHeight: 0, display: 'flex', alignItems: 'flex-end' }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className={`${logo.small ? 'h-6 md:h-8 lg:h-10' : 'h-10 md:h-12 lg:h-14'} w-auto object-contain hover:scale-105 hover:opacity-80 grayscale-[0.4] hover:grayscale-0 transition-all duration-500 ease-out`}
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
