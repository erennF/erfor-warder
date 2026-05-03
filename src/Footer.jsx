import React from 'react';
import logo from './assets/logo.png';
import worldMap from './assets/world.svg';

const Footer = ({ lang, setActivePage }) => {
  const content = {
    tr: {
      desc: "Global Ticaretin Güvenilir Rotası",
      linksTitle: "HIZLI LİNKLER",
      servicesTitle: "HİZMETLERİMİZ",
      contactTitle: "İLETİŞİM",
      links: [
        { name: "Anasayfa", id: "anasayfa" },
        { name: "Hizmetler", id: "hizmetler" },
        { name: "Hakkımızda", id: "hakkimizda" },
        { name: "İletişim", id: "iletisim" }
      ],
  
      services: [
        { name: "Deniz Yolu Taşımacılığı", id: "hizmetler" },
        { name: "Kara Yolu Taşımacılığı", id: "hizmetler" },
        { name: "Liman Operasyonları", id: "hizmetler" },
        { name: "Konteyner Taşımacılığı", id: "hizmetler" },
        { name: "Depolama Çözümleri", id: "hizmetler" }
      ],
      rights: "© 2026 Erfor. Tüm Hakları Saklıdır."
    },
    en: {
      desc: "Reliable Route of Global Trade",
      linksTitle: "QUICK LINKS",
      servicesTitle: "OUR SERVICES",
      contactTitle: "CONTACT",
      links: [
        { name: "Home", id: "anasayfa" },
        { name: "Services", id: "hizmetler" },
        { name: "About Us", id: "hakkimizda" },
        { name: "Contact", id: "iletisim" }
      ],
      services: [
        { name: "Sea Freight", id: "hizmetler" },
        { name: "Road Freight", id: "hizmetler" },
        { name: "Port Operations", id: "hizmetler" },
        { name: "Container Freight", id: "hizmetler" },
        { name: "Warehousing Solutions", id: "hizmetler" }
      ],
      rights: "© 2026 Erfor. All Rights Reserved."
    }
  };

  const t = content[lang] || content.tr;

  const scrollToSection = (sectionId, pageName) => {
    if (setActivePage) {
      setActivePage(pageName || sectionId);
    }
    
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 overflow-hidden border-t border-[#c4b087]/20">
      
      {/* ARKA PLANDAKİ DÜNYA HARİTASI */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${worldMap})`, filter: 'sepia(1) saturate(2)' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
        
        {/* LOGO */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img src={logo} alt="Erfor" className="h-28 w-auto object-contain" />
          <p className="text-[#c4b087] font-medium text-center md:text-left text-sm leading-relaxed max-w-[220px]">
            {t.desc}
          </p>
        </div>

        {/* HIZLI LİNKLER */}
        <div>
          <h4 className="text-[#c4b087] font-bold text-lg mb-8 tracking-widest uppercase">{t.linksTitle}</h4>
          <ul className="space-y-4">
            {t.links.map((link, i) => (
              <li key={i}>
                
                <button 
                  onClick={() => scrollToSection(link.id, link.id)}
                  className="text-gray-400 hover:text-[#fce29f] transition-all text-sm text-left"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* HİZMETLERİMİZ */}
        <div>
          <h4 className="text-[#c4b087] font-bold text-lg mb-8 tracking-widest uppercase">{t.servicesTitle}</h4>
          <ul className="space-y-4">
            {t.services.map((service, i) => (
              <li key={i}>
                <button 
                  onClick={() => scrollToSection(service.id, 'hizmetler')}
                  className="text-gray-400 hover:text-[#fce29f] transition-all text-xs text-left leading-relaxed"
                >
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* İLETİŞİM */}
        <div>
          <h4 className="text-[#c4b087] font-bold text-lg mb-8 tracking-widest uppercase">{t.contactTitle}</h4>
          <div className="space-y-5 text-sm text-gray-400">
           <p className="flex items-center gap-3">
              <span className="text-[#c4b087] text-lg"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg></span> +90 (542) 677 84 53
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#c4b087] text-lg"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg></span> +90 (534) 774 00 91
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#c4b087] text-lg"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg></span> info@erforwarder.com
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#c4b087] text-lg"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg></span> erforwarder@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#c4b087]/5 bg-[#050505] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[10px] text-[#c4b087]/30 tracking-[0.3em] uppercase">
          {t.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;