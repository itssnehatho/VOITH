const FeaturedIn = () => {
  const logos = [
    { src: '/toyota.png', name: 'Toyota', small: true },
    {
      src: '/vaidya.png',
      name: 'Vaidya Energy',
      lower: true,
      sizeClass: 'h-12 sm:h-14 md:h-16 lg:h-[72px]',
      offsetClass: 'translate-y-3 sm:translate-y-4 md:translate-y-5',
    },
    { src: '/pitstop.png', name: 'Pitstop', lower: true },
    { src: '/sasvata.png', name: 'Sasvata', small: true }
  ];

  return (
    <section className="w-full bg-white py-2 sm:py-2.5 md:py-3 border-b border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-2.5 md:gap-3"> 
          <h2 className="text-[8px] sm:text-[9px] md:text-[10px] font-light text-gray-400 tracking-[0.25em] uppercase">  
            • FEATURED IN 
          </h2>
          <div
            className="flex items-end flex-wrap"
            style={{
              rowGap: '10px',
              columnGap: 'clamp(28px, 5vw, 192px)', 
            }}
          >
            {logos.map((logo) => (
              <div 
                key={logo.src} 
                className={`flex items-end justify-center group ${
                  logo.offsetClass ?? (logo.lower ? 'translate-y-1.5 sm:translate-y-2 md:translate-y-3' : '')
                }`}
                style={{ height: '32px', lineHeight: 0, display: 'flex', alignItems: 'flex-end' }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className={`${logo.sizeClass ?? (logo.small ? 'h-6 sm:h-7 md:h-8 lg:h-10' : 'h-9 sm:h-11 md:h-12 lg:h-14')} w-auto object-contain hover:scale-105 hover:opacity-80 grayscale-[0.4] hover:grayscale-0 transition-all duration-500 ease-out`}
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
