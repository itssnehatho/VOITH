import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OurWorkPage from './pages/OurWorkPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check URL hash on mount and when hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#contact') {
        setCurrentPage('contact');
      } else if (hash === '#work') {
        setCurrentPage('work');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); 

  return (
    <>
      {currentPage === 'about' ? <AboutPage /> : 
       currentPage === 'contact' ? <ContactPage /> : 
       currentPage === 'work' ? <OurWorkPage /> :
       <Homepage />}
    </>
  );
}

export default App;
