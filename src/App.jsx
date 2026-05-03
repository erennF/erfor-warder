import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Hero from './Hero';
import Services from './Services'; 
import About from './About';       
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [lang, setLang] = useState('tr');
  const [activePage, setActivePage] = useState('anasayfa');

  // Sayfa kaydırıldığında aktif bölümü algılayan sistem 
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Sayfanın ortasına gelince tetiklenme olsun
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['anasayfa', 'hizmetler', 'hakkimizda', 'iletisim'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#050505] text-white">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />
    
      <Hero lang={lang} setActivePage={setActivePage} />
      <Services lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer 
      lang={lang} 
      setActivePage={setActivePage} 
      />
    </div>
  );
}

export default App;