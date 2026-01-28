import React from 'react';

const Pitstop = () => {
    const goHome = () => {
        window.location.hash = '#home';
    };

    return (
        <div className="page-root min-h-screen bg-[#FAF5ED] overflow-anchor-none">
        <section className="featured-in flex flex-col md:flex-row w-full min-h-screen relative">

            <button
                onClick={goHome}
                className="absolute top-4 right-4 text-white font-bold text-2xl flex items-center justify-center hover:text-red-600 transition-colors duration-300 z-20"
                aria-label="Close"
            >
                ×
            </button>


            <div className="text-section md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-between bg-[#FFF9F0] z-10 relative">
                <div>
                    <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-8 sm:mb-10 md:mb-12">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                        FEATURED COMPANY
                    </h3>

                    <h1 className="font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-[-0.02em] uppercase">
                        PITSTOP INCORPORATED
                    </h1>
                </div>

                <div>
                    <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4 sm:mb-6">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                        PITSTOP
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-[1.85] tracking-[-0.01em] mb-8 sm:mb-10 text-justify">
                        Pitstop Incorporated is a boutique automotive workshop in Kathmandu offering premium, all-in-one vehicle services. They specialize in body repairs, painting, detailing, ceramic coating, PPF, restorations, modifications, and general maintenance. Known for their modern facility and skilled technicians, Pitstop positions itself as a high-quality mobility solution provider, delivering exceptional service and craftsmanship.
                    </p>

                    <button className="group border border-gray-900 text-gray-900 bg-transparent px-8 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm font-light tracking-[0.15em] uppercase rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 relative overflow-hidden">
                        <span className="relative z-10">VIEW PROJECTS</span>
                        <span className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
                    </button>
                </div>
            </div>


            <div className="image-section md:w-1/2 w-full h-screen relative">
                <img
                    src="/Pitstop.jpg"
                    alt="Pitstop Incorporated"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </section>
        </div>
    );
};

export default Pitstop;
