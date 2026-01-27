import React from 'react';

const Sasvata = () => {
    const goHome = () => {
        window.location.hash = '#home';
    };

    return (
        <section className="featured-in flex flex-col md:flex-row w-full h-screen relative">
            <button
                onClick={goHome}
                className="absolute top-4 right-4 text-white font-bold text-2xl flex items-center justify-center hover:text-red-600 transition-colors duration-300 z-20"
                aria-label="Close"
            >
                ×
            </button>

            <div className="text-section md:w-1/2 p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between bg-[#FFF9F0] z-10 relative">
                <div>
                    <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-8 sm:mb-10 md:mb-12">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                        FEATURED COMPANY
                    </h3>

                    <h1 className="font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-[-0.02em] uppercase">
                        SASVATA
                    </h1>
                </div>

                <div>
                    <h3 className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4 sm:mb-6">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                        SASVATA
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-[1.85] tracking-[-0.01em] mb-8 sm:mb-10 text-justify">
                        Sasvata represents a commitment to sustainable and innovative solutions in Nepal. Through strategic partnerships and forward-thinking approaches, Sasvata aims to create lasting impact in the communities it serves, focusing on excellence, integrity, and sustainable growth.
                    </p>

                    <button className="group border border-gray-900 text-gray-900 bg-transparent px-8 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm font-light tracking-[0.15em] uppercase rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 relative overflow-hidden">
                        <span className="relative z-10">VIEW PROJECTS</span>
                        <span className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
                    </button>
                </div>
            </div>

            <div className="image-section md:w-1/2 w-full h-screen relative">
                <img
                    src="/sasvata.png"
                    alt="Sasvata"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default Sasvata;
