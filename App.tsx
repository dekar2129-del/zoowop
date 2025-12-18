import React, { useState } from 'react';
import HomePage from './components/HomePage';
import BusinessPage from './components/BusinessPage';
import ServicesPage from './components/ServicesPage';
import HowItWorksPage from './components/HowItWorksPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'business' | 'services' | 'how-it-works' | 'contact'>('home');

  return (
    <React.StrictMode>
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'business' && <BusinessPage onNavigate={setCurrentPage} />}
      {currentPage === 'services' && <ServicesPage onNavigate={setCurrentPage} />}
      {currentPage === 'how-it-works' && <HowItWorksPage onNavigate={setCurrentPage} />}
      {currentPage === 'contact' && <ContactPage onNavigate={setCurrentPage} />}
    </React.StrictMode>
  );
}

export default App;