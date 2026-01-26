import { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OurWorkPage from './pages/OurWorkPage';
import GalleryPage from './pages/GalleryPage';
import Toyota from './pages/Toyota';
import VaidyaEnergy from './pages/VaidyaEnergy';
import Pitstop from './pages/Pitstop';
import Sasvata from './pages/Sasvata';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const pageMap = {
        '#about': 'about',
        '#contact': 'contact',
        '#work': 'work',
        '#gallery': 'gallery',
        '#toyota': 'toyota',
        '#vaidya': 'vaidya',
        '#pitstop': 'pitstop',
        '#sasvata': 'sasvata'
      };
      setCurrentPage(pageMap[hash] || 'home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'work': return <OurWorkPage />;
      case 'gallery': return <GalleryPage />;
      case 'toyota': return <Toyota />;
      case 'vaidya': return <VaidyaEnergy />;
      case 'pitstop': return <Pitstop />;
      case 'sasvata': return <Sasvata />;
      default: return <Homepage />;
    }
  };

  return <>{renderPage()}</>;
}

export default App;
