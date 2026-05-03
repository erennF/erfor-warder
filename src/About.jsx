import React from 'react';

const About = ({ lang }) => {
  const content = {
    tr: {
      title: "HAKKIMIZDA",
      text: "ERFOR olarak, küresel ticaretin en kritik unsurlarından biri olan lojistik süreçlerini; deniz, kara ve liman operasyonlarını entegre ederek yönetiyoruz. Uluslararası operasyon ağımız ve deneyimli ekibimizle yüklerinizi dünyanın her noktasına en uygun maliyet ve süre planlamasıyla ulaştırıyoruz. Modern altyapımız ve stratejik iş ortaklıklarımız sayesinde taşıma süreçlerini yalnızca bir operasyon olarak değil, müşterilerimizin ticaretini destekleyen sürdürülebilir ve güvenilir bir çözüm ortağı vizyonuyla baştan sona profesyonelce koordine ediyoruz."
    },
    en: {
      title: "ABOUT US",
      text: "At ERFOR, we manage the backbone of global trade by seamlessly integrating sea, land, and port logistics. With our global network and expert team, we deliver your cargo worldwide, ensuring optimal cost and time efficiency. Powered by modern infrastructure and strategic partnerships, we handle every step of your shipment not just as a task, but as a reliable and sustainable solution partner dedicated to growing your business."
    }
  };

  const t = content[lang] || content.tr;

  return (
    <section id="hakkimizda" className="py-24 px-6 md:px-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold mb-10 text-[#c4b087] tracking-widest uppercase">
          {t.title}
        </h2>
        <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed italic opacity-90">
          {t.text}
        </p>
      </div>
    </section>
  );
};

export default About;