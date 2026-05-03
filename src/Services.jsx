import React from 'react';
import denizImg from './assets/denizzyolu.jpg'; 
import karaImg from './assets/karayolu.jpeg'; 
import limanImg from './assets/limanop.jpg';
import konteynerImg from './assets/konteyner.jpg';
import depolamaImg from './assets/depolama.png';
import havaImg from './assets/havat.png';

const Services = ({ lang }) => {
  const content = {
    tr: { 
      title: "HİZMETLERİMİZİ KEŞFEDİN", 
      subtitle: "Modern filomuz ve geniş acente ağımızla profesyonel lojistik deneyimi.",
      items: [
        { id: "sea", t: "DENİZ YOLU TAŞIMACILIĞI", d: "Uluslararası sular üzerinde, yüklerinizi varış noktasına hasarsız ve planlanan sürede ulaştıran uçtan uca lojistik hizmeti.", img: denizImg, size: "md:col-span-3" }, // EN ÜST - TAM GENİŞLİK
        { id: "cont", t: "KONTEYNER TAŞIMACILIĞI", d: "Yüklerinize en uygun konteyner tiplerinin seçimi ve operasyonel süreç yönetimi.", img: konteynerImg, size: "md:col-span-1" }, // KÜÇÜK
        { id: "port", t: "LİMAN OPERASYONLARI", d: "Yüklerin liman içi hareketi, gümrükleme ve tahliye süreçlerinde tam destek.", img: limanImg, size: "md:col-span-2" }, // BÜYÜK
        { id: "road", t: "KARA YOLU TAŞIMACILIĞI", d: "Tüm Avrupa ve Asya rotalarında güvenilir transit süreler ve güvenli teslimat.", img: karaImg, size: "md:col-span-2" }, // BÜYÜK
        { id: "ware", t: "DEPOLAMA ÇÖZÜMLERİ", d: "Modern ve güvenli depolama alanlarımızla yükleriniz koruma altında.", img: depolamaImg, size: "md:col-span-1" }, // KÜÇÜK
        { id: "air", t: "HAVA YOLU TAŞIMACILIĞI", d: "Küresel ticaret ağında en hızlı ve güvenilir çözüm. Hassas ve zaman kısıtlı yüklerinizi, geniş acente ağımızla dünyanın her noktasına ekspres sürelerde ulaştırıyoruz.", img: havaImg, size: "md:col-span-3" } // EN ALT - TAM GENİŞLİK
      ]
    },
    en: { 
      title: "Discover Our Services", 
      subtitle: "Professional logistics experience with our modern fleet and wide agency network.",
      items: [
        { id: "sea", t: "Sea Freight", d: "End-to-end logistics solutions ensuring secure and on-time delivery of your freight across international waters.", img: denizImg, size: "md:col-span-3" },
        { id: "cont", t: "Container Freight", d: "Selection of suitable container types and operational management.", img: konteynerImg, size: "md:col-span-1" },
        { id: "port", t: "Port Operations", d: "Full support in port movement, customs clearance, and discharge.", img: limanImg, size: "md:col-span-2" },
        { id: "road", t: "Road Freight", d: "Reliable transit times and secure delivery on European and Asian routes.", img: karaImg, size: "md:col-span-2" },
        { id: "ware", t: "Warehousing Solutions", d: "Your cargo is under protection with our modern and secure storage areas.", img: depolamaImg, size: "md:col-span-1" },
        { id: "air", t: "Air Freight", d: "The fastest and most reliable solution in the global trade network. We deliver your sensitive and time-critical cargo to every point in the world with express transit times through our extensive agency network.", img: havaImg, size: "md:col-span-3" }
      ]
    }
  };

  const t = content[lang] || content.tr;

  return (
    <section id="hizmetler" className="py-24 px-6 md:px-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="mb-16 text-left border-l-4 border-[#c4b087] pl-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#c4b087] uppercase leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item) => (
            <div 
              key={item.id} 
              className={`relative group overflow-hidden rounded-2xl bg-[#121212] min-h-[300px] md:min-h-[380px] flex items-end p-6 md:p-10 border border-white/5 transition-all duration-500 hover:border-[#c4b087]/40 ${item.size}`}
            >
              {/* Arka Plan Görseli */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110 opacity-50 md:opacity-40 md:group-hover:opacity-60 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
                role="img"
                aria-label={item.t}
              ></div>

              {/* Gradyan Katman */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10"></div>

              {/* Kart İçeriği */}
              <div className="relative z-20 w-full">
              
                <div className="mb-4 inline-flex items-center justify-center w-8 h-8 bg-[#c4b087]/20 rounded-full">
                   <div className="w-2 h-2 bg-[#c4b087] rounded-full shadow-[0_0_8px_#c4b087]"></div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-[#fce29f] transition-colors duration-300 uppercase tracking-tight" title={item.t}>
                  {item.t}
                </h3>
                
                {/* Açıklama Mobilde her zaman açık , Masaüstünde Hover  */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl 
                              opacity-100 translate-y-0 
                              md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 
                              transition-all duration-500">
                  {item.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;