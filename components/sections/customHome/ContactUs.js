import React from "react";
import { useLanguage } from '@/components/customHooks/LanguageContext';

const ContactUs = () => {
  const { language } = useLanguage();
  const translations = {
    en: {
      banerTitle:"Ready to cooperate?",
      bannerDescr:"We are always ready to help! Contact us and we will be happy to discuss your ideas and project requirements.",
      title:"Get in Touch",
      descr:"Contact us below and we will get back to you shortly.",
      yourName:"Your Name *",
      typeName:"Type your name",
      yourEmail:"Your Email *",
      typeEmail:"Type your email",
      message:"Message *",
      help:"How can we help you?",
      btnText:"Send Message"
    },
    uk: {
      banerTitle:"Готові співпрацювати?",
      bannerDescr:"Ми завжди готові допомогти! Зв'яжіться з нами, і ми з радістю обговоримо ваші ідеї та вимоги до проекту.",
      title:"Зв'яжіться з нами",
      descr:"Зв'яжіться з нами нижче, і ми скоро відповімо.",
      yourName:"Ваше ім'я *",
      typeName:"Введіть ваше ім'я",
      yourEmail:"Ваша електронна пошта *",
      typeEmail:"Введіть вашу електронну пошту",
      message:"Повідомлення *",
      help:"Як ми можемо вам допомогти?",
      btnText:"Надіслати повідомлення"
    },
    ru_UA: {
      banerTitle:"Готовы сотрудничать?",
      bannerDescr:"Мы всегда готовы помочь! Свяжитесь с нами, и мы с радостью обсудим ваши идеи и требования к проекту.",
      title:"Свяжитесь с нами",
      descr:"Свяжитесь с нами ниже, и мы скоро ответим.",
      yourName:"Ваше имя *",
      typeName:"Введите ваше имя",
      yourEmail:"Ваша электронная почта *",
      typeEmail:"Введите вашу электронную почту",
      message:"Сообщение *",
      help:"Как мы можем вам помочь?",
      btnText:"Отправить сообщение"
    },
  };
  const { banerTitle, bannerDescr, title, descr, yourEmail, yourName, typeName, typeEmail, message, help, btnText } = translations[language] || translations.en;
  
  return (
    <section className="section-box box-get-touch-section box-get-touch-section--maxOpen" id="contact">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-6 ">
                    <div className="box-image-get-touch"> 
                      <h2 className='box-image-get-touch__title'>
                        {banerTitle}
                      </h2>
                      <h3 className='box-image-get-touch__descr'>
                        {bannerDescr}
                      </h3>
                    </div>
                </div>
                <div className="col-lg-6">
                  <h2>{title}</h2>
                  <p className="text-md neutral-700">{descr}</p>
                  <div className="block-form-contact mt-20">
                      <form action="#">
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  {yourName}</label>
                              <input className="form-control" type="text" placeholder={typeName} />
                          </div>
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  {yourEmail}</label>
                              <input className="form-control" type="text" placeholder={typeEmail} />
                          </div>
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  {message}</label>
                              <textarea 
                                className="form-control" 
                                rows={3} 
                                placeholder={help} 
                                style={{ resize: 'none' }}
                              />
                          </div>
                          <div className="form-group">
                            <button className="btn btn-brand-4-medium hover-up animation-btn-svg" type="submit">
                                <span>
                                  {btnText}
                                  <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                  </svg>
                                </span>
                            </button>
                          </div>
                      </form>
                  </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactUs;
