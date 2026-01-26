import React from 'react';

const Toyota = () => {
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
                        UNITED TRADERS SYNDICATE
                    </h1>
                </div>

                <div>
                    <h3 className="text-sm text-gray-500 flex items-center gap-2 font-mono mb-4">
                        <span className="w-1.5 h-1.5 bg-black rounded-full inline-block"></span>
                        TOYOTA NEPAL
                    </h3>

                    <p className="text-lg text-gray-700 font-serif mb-6">
                        Toyota Nepal, represented by United Traders Syndicate (UTS), is the official distributor of Toyota vehicles, parts, and services in Nepal. With over five decades of presence, Toyota Nepal offers a wide range of reliable cars, SUVs, pickups, and MPVs, along with comprehensive after-sales support through its showrooms and service centers.
                    </p>

                    <button className="border border-black text-black bg-transparent rounded-full px-6 py-3 font-mono font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300">
                        VIEW PROJECTS
                    </button>
                </div>
            </div>


            <div className="image-section md:w-1/2 w-full h-screen relative">
                <img
                    src="/home2.png"
                    alt="Featured Company"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default Toyota;
