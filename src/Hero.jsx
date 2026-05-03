import React, { useState, useEffect } from 'react';
import './Hero.css';
import gemiImg from './assets/Hero4.png';
import limanImg from './assets/liman.png';
import lojistikImg from './assets/Hero3.png'; 

const slides = [
  {
    id: 1,
    img: limanImg,
    tr: { 
      line1: "KÜRESEL TİCARETİN", 
      line2: "GÜVENİLİR ROTASI:", 
      line3: "ERFOR", 
      desc: "Deniz, kara ve liman taşımacılığında profesyonel çözümler. Yüklerinizi dünyanın her noktasına güvenle taşıyoruz." 
    },
    en: { 
      line1: "THE RELIABLE ROUTE", 
      line2: "OF GLOBAL TRADE:", 
      line3: "ERFOR", 
      desc: "Professional solutions in sea, land, and port transportation. We safely carry your cargo to every corner of the world." 
    }
  },
  {
    id: 2,
    img: gemiImg,
    tr: { 
      line1: "KITALARI BİRBİRİNE", 
      line2: "BAĞLIYORUZ", 
      desc: "Modern filomuz ve geniş acente ağımızla, yüklerinizi okyanusların ötesine, tam zamanında ve maksimum güvenle taşıyoruz." 
    },
    en: { 
      line1: "CONNECTING CONTINENTS", 
      line2: "TOGETHER",  
      desc: "With our modern fleet and extensive agency network, we transport your cargo beyond oceans with on-time delivery and maximum security." 
    }
  },
  {
    id: 3,
    img: lojistikImg,
    tr: { 
      line1: "KESİNTİSİZ TEDARİK", 
      line2: "ZİNCİRİ",   
      desc: "Sadece limandan limana değil; entegre taşımacılık çözümlerimizle operasyonel yükünüzü hafifletiyor, kesintisiz teslimat sağlıyoruz." 
    },
    en: { 
      line1: "UNINTERRUPTED SUPPLY", 
      line2: "CHAIN",  
      desc: "Not just port-to-port; we lighten your operational burden with our integrated transportation solutions and ensure seamless delivery." 
    }
  }
];

function Hero({ lang, setActivePage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 5 saniyede bir otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    setActivePage('hizmetler');
    document.getElementById('hizmetler')?.scrollIntoView({ behavior: 'smooth' });
  };

  const btnText = lang === 'en' ? "DISCOVER OUR SERVICES" : "HİZMETLERİMİZİ KEŞFEDİN";

  return (
    <section id="anasayfa" className="relative w-full h-screen flex items-center overflow-hidden">
      
      {/* ARKA PLANLAR - Üst üste biner, sadece aktif olan opak olur */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 z-0 bg-no-repeat bg-center bg-cover bg-fixed transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.img})` }}
          role="img"
          aria-label={slide[lang].line1 + ' ' + slide[lang].line2}
        />
      ))}
      
      {/* KARARTMA  */}
      <div className="absolute inset-0 bg-[#050505]/75 mix-blend-multiply z-[1]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] z-[1] opacity-70"></div>
      
      {/* İÇERİK ALANI */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div key={currentSlide} className="animate-slideUp flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c4b087] via-[#fce29f] to-[#c4b087] drop-shadow-sm mb-6 uppercase">
            {slides[currentSlide][lang].line1} <br/> 
            {slides[currentSlide][lang].line2} <br/> 
            {slides[currentSlide][lang].line3}
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-md md:max-w-xl leading-relaxed mb-10">
            {slides[currentSlide][lang].desc}
          </p>
          
          <button 
            onClick={handleScroll}
            aria-label="Hizmetlerimizi keşfet - Sayfayı aşağı kaydır"
            className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-[#c4b087] to-[#fce29f] text-[#050505] font-bold text-base sm:text-lg rounded-[4px] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(252,226,159,0.3)] hover:shadow-[0_0_30px_rgba(252,226,159,0.6)]"
          >
            {btnText}
          </button>
        </div>
      </div>

      {/* SAYFA GÖSTERGELERİ */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-[#fce29f]' : 'w-4 bg-gray-600 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;