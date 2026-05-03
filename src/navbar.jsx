import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png'; 

const translations = {
  tr: {
    anasayfa: "ANASAYFA",
    hizmetler: "HİZMETLER",
    hakkimizda: "HAKKIMIZDA",
    iletisim: "İLETİŞİM"
  },
  en: {
    anasayfa: "HOME",
    hizmetler: "SERVICES",
    hakkimizda: "ABOUT US",
    iletisim: "CONTACT"
  }
};

function Navbar({ lang, setLang, activePage, setActivePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
  
  const t = translations[lang] || translations.tr;

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    //  Mobil menü açıksa kapat
    closeMobileMenu();

    // 2. Navbar ışığını güncelle
    if (setActivePage) {
      setActivePage(sectionId);
    }

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.error(`HATA: '${sectionId}' ID'li bölüm sayfada bulunamadı! Lütfen ilgili div'de id="${sectionId}" olduğundan emin olun.`);
      }
    }, 50);
  };

  return (
    <header className="navbar-container">
      
      <div className="logo-area">
        <button type="button" onClick={() => scrollToSection('anasayfa')} className="logo-link bg-transparent border-none cursor-pointer">
          <img src={logo} alt="Erfor" className="company-logo" />
        </button>
      </div>
      
      <div 
        className={`menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={closeMobileMenu}
      ></div>

      <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <button type="button" className={`nav-link ${activePage === 'anasayfa' ? 'active' : ''}`} onClick={() => scrollToSection('anasayfa')}>
          {t.anasayfa}
        </button>
        <button type="button" className={`nav-link ${activePage === 'hizmetler' ? 'active' : ''}`} onClick={() => scrollToSection('hizmetler')}>
          {t.hizmetler}
        </button>
        <button type="button" className={`nav-link ${activePage === 'hakkimizda' ? 'active' : ''}`} onClick={() => scrollToSection('hakkimizda')}>
          {t.hakkimizda}
        </button>
        <button type="button" className={`nav-link ${activePage === 'iletisim' ? 'active' : ''}`} onClick={() => scrollToSection('iletisim')}>
          {t.iletisim}
        </button>
      </nav>

     {/* Sağ Taraftaki İkonlar */}
      <div className="right-actions-container">

       {/* TR Bayrağı */}
          <button className={`lang-circle-btn ${lang === 'tr' ? 'active' : ''}`} onClick={() => setLang('tr')}>
            <svg className="flag-svg" xmlns="http://www.w3.org/2000/svg" viewBox="100 50 500 500" fill="currentColor">
              <path d="m417.504 300 135.68-44.078-83.86 115.41V228.668l83.86 115.41Zm9.25 80.21c-35.7 56.415-104.387 82.446-168.508 63.86C194.125 425.488 150 366.762 150 300s44.125-125.488 108.246-144.07c64.121-18.586 132.809 7.445 168.508 63.86-33.223-36.97-85.797-49.63-132.203-31.84C248.14 205.737 217.5 250.296 217.5 300s30.64 94.262 77.05 112.05c46.407 17.79 98.981 5.13 132.204-31.84" />
            </svg>
          </button>

        {/* EN Bayrağı */}
          <button className={`lang-circle-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
            <svg className="gold-flag-svg flag-svg gold-stroke" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 0v9H0 M15 0v9h9 M0 15h9v9 M24 15h-9v9" strokeWidth="1.8" />
              <path d="M0 0l9 9 M24 0l-9 9 M0 24l9-9 M24 24l-9-9" strokeWidth="1.2" />
            </svg>
           </button>

        {/* Telefon Menüsü  */}
        <div className="phone-menu-container">
          <button 
            className={`lang-circle-btn phone-btn ${isPhoneMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsPhoneMenuOpen(!isPhoneMenuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flag-svg gold-stroke">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>

          {isPhoneMenuOpen && (
            <div className="phone-dropdown">
              <a href="tel:+905426778453" className="phone-link">
                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg></span> +90 542 677 84 53
              </a>
              <a href="tel:+905347740091" className="phone-link">
                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg></span> +90 534 774 00 91
              </a>
            </div>
          )}
        </div>

      </div>
      
      <button 
        className="hamburger-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

    </header>
  );
}

export default Navbar;