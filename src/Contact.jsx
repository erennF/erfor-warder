import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ lang }) => {
  const form = useRef();

  const content = {
    tr: {
      title: "Küresel Çözümler İçin Bizimle İletişime Geçin",
      desc: "Projeniz ne kadar büyük olursa olsun, ERFOR size en uygun lojistik modelini oluşturmaya hazır. Hemen formu doldurun, uzmanlarımız size dönüş yapsın.",
      phoneLabel: "Telefon",
      emailLabel: "E-posta",
      formTitle: "Hızlı Teklif Formu",
      nameLabel: "AD SOYAD",
      emailField: "E-POSTA",
      msgLabel: "MESAJINIZ",
      placeholderName: "İsminiz",
      placeholderEmail: "eposta@adresiniz.com",
      placeholderMsg: "Yükünüz ve rotanız hakkında kısa bilgi verin...",
      send: "GÖNDER",
      success: "Mesajınız başarıyla gönderildi!",
      error: "Bir hata oluştu, lütfen tekrar deneyin."
    },
    en: {
      title: "Contact Us for Global Solutions",
      desc: "No matter how big your project is, ERFOR is ready to create the most suitable logistics model for you. Fill out the form now, and our experts will get back to you.",
      phoneLabel: "Phone",
      emailLabel: "E-mail",
      formTitle: "Quick Quote Form",
      nameLabel: "FULL NAME",
      emailField: "E-MAIL",
      msgLabel: "YOUR MESSAGE",
      placeholderName: "Your Name",
      placeholderEmail: "email@youraddress.com",
      placeholderMsg: "Give brief information about your cargo and route...",
      send: "SEND",
      success: "Your message has been sent!",
      error: "An error occurred, please try again."
    }
  };

  const t = content[lang] || content.tr;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0w31lm4',  // Service ID
      'template_ohsujsa', // Template ID
      form.current, 
      '1lVV_6oiOjbfJZFdk' // Public Key
    )
      .then(() => {
          alert(t.success);
          e.target.reset();
      }, (error) => {
          alert(t.error);
          console.log(error.text);
      });
  };

  return (
    <section id="iletisim" className="py-24 px-6 md:px-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#c4b087] leading-[1.15]">
              {t.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              {t.desc}
            </p>
          </div>

          <div className="space-y-10">
            {/* Telefon */}
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-[#c4b087] flex-shrink-0 border border-white/5 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">{t.phoneLabel}</h4>
                <div className="text-gray-400 text-base space-y-1 opacity-80">
                  <p>+90 (542) 677 84 53</p>
                  <p>+90 (534) 774 00 91</p>
                </div>
              </div>
            </div>

            {/* E-posta */}
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-[#c4b087] flex-shrink-0 border border-white/5 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">{t.emailLabel}</h4>
                <p className="text-gray-400 text-base opacity-80">info@erforwarder.com</p>
                <p className="text-gray-400 text-base opacity-80">erforwarder@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Kutusu */}
        <div className="bg-[#111111] p-10 md:p-14 rounded-3xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h3 className="text-2xl font-bold text-[#c4b087] mb-10 tracking-tight">
            {t.formTitle}
          </h3>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-[#c4b087] tracking-[2px] uppercase">
                  {t.nameLabel}
                </label>
                <input 
                  name="from_name" 
                  required 
                  type="text" 
                  placeholder={t.placeholderName} 
                  className="w-full bg-[#1a1a1a] border border-white/10 p-4 rounded-xl focus:border-[#c4b087]/50 focus:ring-1 focus:ring-[#c4b087]/20 outline-none text-white transition-all placeholder:text-gray-600" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-[#c4b087] tracking-[2px] uppercase">
                  {t.emailField}
                </label>
                <input 
                  name="from_email" 
                  required 
                  type="email" 
                  placeholder={t.placeholderEmail} 
                  className="w-full bg-[#1a1a1a] border border-white/10 p-4 rounded-xl focus:border-[#c4b087]/50 focus:ring-1 focus:ring-[#c4b087]/20 outline-none text-white transition-all placeholder:text-gray-600" 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black text-[#c4b087] tracking-[2px] uppercase">
                {t.msgLabel}
              </label>
              <textarea 
                name="message" 
                required 
                rows="5" 
                placeholder={t.placeholderMsg} 
                className="w-full bg-[#1a1a1a] border border-white/10 p-4 rounded-xl focus:border-[#c4b087]/50 focus:ring-1 focus:ring-[#c4b087]/20 outline-none text-white transition-all resize-none placeholder:text-gray-600"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-5 bg-[#c4b087] text-[#050505] font-black rounded-xl hover:bg-[#d4c097] transform active:scale-[0.98] transition-all shadow-[0_15px_30px_rgba(196,176,135,0.2)] uppercase tracking-[3px] text-sm"
            >
              {t.send}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;