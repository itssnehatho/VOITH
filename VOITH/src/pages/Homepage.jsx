import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedIn from '../components/FeaturedIn';
import Belief from '../components/Belief';
import EditorialScrollSection from '../components/EditorialScrollSection';
import Quotes from '../components/Quotes';
import AboutUs from '../components/AboutUs';
import ExploreProjects from '../components/ExploreProjects';
import Footer from '../components/Footer';

const Homepage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      setCurtainUp(true);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBF5] relative">
      <div className="relative">
        <Header />
        <div className="relative w-full h-screen overflow-hidden">
          <Hero />
          <div className="absolute bottom-0 left-0 right-0 z-30">
            <FeaturedIn />
          </div>
        </div>
        <Belief />
        <EditorialScrollSection />
        <Quotes /> 
        <AboutUs />
        <ExploreProjects />
        <Footer />
      </div>
      <div className={`fixed inset-0 bg-[#FFFBF5] z-[9999] pointer-events-none transition-all duration-[1000ms] ease-out flex flex-col items-center justify-center ${
        curtainUp ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <img 
          src="/voithlogo.png" 
          alt="VOITH" 
          className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-80 mb-4"
          style={{ 
            animation: 'spin-reverse 1.5s linear',
            animationFillMode: 'forwards'
          }}
        />
        <p className="text-sm md:text-base text-gray-600 tracking-wider uppercase">LOADING...</p>
      </div>
    </div>
  );
};

export default Homepage;