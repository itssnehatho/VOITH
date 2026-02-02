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
import AdminPanel from './pages/AdminPanel';

const PAGE_MAP = {
  '#admin': 'admin',
  '#about': 'about',
  '#contact': 'contact',
  '#work': 'work',
  '#gallery': 'gallery',
  '#toyota': 'toyota',
  '#vaidya': 'vaidya',
  '#pitstop': 'pitstop',
  '#sasvata': 'sasvata'
};

function getPageFromUrl() {
  const hash = (window.location.hash || '').toLowerCase();
  if (PAGE_MAP[hash]) return PAGE_MAP[hash];
  const path = (window.location.pathname || '').toLowerCase().replace(/\/$/, '');
  if (path === '/admin') return 'admin';
  return 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromUrl);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(getPageFromUrl());
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'admin': return <AdminPanel />;
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
