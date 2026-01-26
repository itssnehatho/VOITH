import React from 'react';

const VaidyaEnergy = () => {
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


            <div className="text-section md:w-1/2 p-12 flex flex-col justify-between bg-[#FFF9F0] z-10 relative">
                <div>

                    <h3 className="text-sm text-gray-500 flex items-center gap-2 font-mono">
                        <span className="w-1.5 h-1.5 bg-black rounded-full inline-block"></span>
                        FEATURED COMPANY
                    </h3>


                    <h1 className="mt-20 text-5xl md:text-6xl font-serif uppercase leading-tight tracking-tight">
                        VAIDYA ENERGY
                    </h1>
                </div>

                <div>

                    <h3 className="text-sm text-gray-500 flex items-center gap-2 font-mono mb-4">
                        <span className="w-1.5 h-1.5 bg-black rounded-full inline-block"></span>
                        ATHER ENERGY
                    </h3>


                    <p className="text-lg text-gray-700 font-serif mb-6">
                        Ather Nepal brings Ather Energy’s smart, high-performance electric scooters to Nepal, offering advanced battery technology, fast charging, and a premium riding experience. The brand focuses on sustainable mobility, strong after-sales support, and building a reliable charging ecosystem to accelerate Nepal’s shift toward clean electric transportation.
                    </p>


                    <button className="border border-black text-black bg-transparent rounded-full px-6 py-3 font-mono font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300">
                        VIEW PROJECTS
                    </button>
                </div>
            </div>


            <div className="image-section md:w-1/2 w-full h-screen relative">
                <img
                    src="/VaidyaEnergy.png"
                    alt="Vaidya Energy"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default VaidyaEnergy;
