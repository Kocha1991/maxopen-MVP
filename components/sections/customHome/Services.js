import React from "react";
import { ServicesCard } from '@/components/elements/ServicesCard';
import { BlogTitle } from '@/components/blog/BlogTitle';
import { useModal } from '@/components/customHooks/useModal';
import { useLanguage } from '@/components/customHooks/LanguageContext';

export const Services = () => {
  const { openModal } = useModal();
  const { language } = useLanguage();

  const handleCalendarOpen = () => {
    openModal('calendar');
  };

  const translations = {
    en: {
      textOnBg:'Your solution is here',
      title:'Choose services based on your needs',
      descr:'Looking to increase sales, enhance brand recognition, or streamline customer interactions? We offer a wide range of web design and mobile app development services tailored to your specific needs',
      btnText:"Book a call"
    },
    uk: {
      textOnBg: 'Ваше рішення тут',
      title: 'Оберіть послуги відповідно до ваших потреб',
      descr: 'Бажаєте збільшити продажі, підвищити впізнаваність бренду або оптимізувати взаємодію з клієнтами? Ми пропонуємо широкий спектр послуг веб-дизайну та розробки мобільних додатків, адаптованих до ваших конкретних потреб.',
      btnText:"Записатись на дзвінок"
    },
    ru_UA: {
      textOnBg: 'Ваше решение здесь',
      title: 'Выберите услуги в соответствии с вашими потребностями',
      descr: 'Хотите увеличить продажи, повысить узнаваемость бренда или оптимизировать взаимодействие с клиентами? Мы предлагаем широкий спектр услуг веб-дизайна и разработки мобильных приложений, адаптированных к вашим конкретным потребностям.',
      btnText:"Записаться на звонок"
    },
  };
  const { textOnBg, title, descr, btnText } = translations[language] || translations.en;

  return (
    <div className='maxOpen-services' id='services'>
      <div className="container">
        <BlogTitle 
          textOnBg={textOnBg}
          title={title}
          descr={descr}
        />
        <div className="row">
          <ServicesCard 
            icon='/assets/imgs/template/icons/Website-development-green.svg'
            iconHover='/assets/imgs/template/icons/Website-development-black.svg'
            title='Website development'
            descr='We develop custom web solutions to achieve your business goals'
            btnText={btnText}
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/CHATBOTS-green.svg'
            iconHover='/assets/imgs/template/icons/CHATBOTS-black.svg'
            title='CHATBOTS'
            descr='Chatbots provide a cost-effective solution by automating routine tasks and reducing labor costs'
            btnText={btnText}
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/Android-App-green.svg'
            iconHover='/assets/imgs/template/icons/Android-App-black.svg'
            title='iOS/Android App'
            descr='Eu morbi orci ultricies vel congue sagittis lgula urna viverra vestibulum.'
            btnText={btnText}
          />
          <ServicesCard 
            icon='assets/imgs/template/icons/Online-stores-green.svg'
            iconHover='/assets/imgs/template/icons/Online-stores-black.svg'
            title='Online stores'
            descr='We build robust, conversion-driven e-commerce solutions that drive sales.'
            btnText={btnText}
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/CRM-systems-green.svg'
            iconHover='/assets/imgs/template/icons/CRM-systems-black.svg'
            title='CRM systems'
            descr="Your business deserves a tailored CRM. Let's build it together."
            btnText={btnText}
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/IT-OUTSOURCING-green.svg'
            iconHover='/assets/imgs/template/icons/IT-OUTSOURCING-black.svg'
            title='IT OUTSOURCING'
            descr="Maximize efficiency and cut costs with top-tier IT outsourcing services tailored to your needs."
            btnText={btnText}
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/Crypto-projects-green.svg'
            iconHover='/assets/imgs/template/icons/Crypto-projects-black.svg'
            title='Crypto projects'
            descr="Unlock the potential of blockchain with custom crypto solutions that offer security and scalability."
            btnText={btnText}
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/Game-green.svg'
            iconHover='/assets/imgs/template/icons/Game-black.svg'
            title='Games'
            descr="From concept to launch, we design immersive games that captivate players and drive excitement."
            btnText={btnText}
          />
          <ServicesCard 
            icon='/assets/imgs/template/icons/Telegram-web-app-green.svg'
            iconHover='/assets/imgs/template/icons/Telegram-web-app-black.svg'
            title='Telegram web app'
            descr="We create seamless Telegram web apps that enhance user engagement and streamline communication."
            btnText={btnText}
          />

          <div className='col-lg-12 '>
            <div className="card-features-maxOpen card-features-maxOpen-long">
              <div className='card-features-maxOpen-long__block'>
                <div className="card-image"> 
                  <img 
                    src="/assets/imgs/template/icons/Cybersecurity-green.svg" 
                    alt="icon" 
                    className='card-image__icon'
                  />
                  <img 
                    src="/assets/imgs/template/icons/Cybersecurity-black.svg" 
                    alt="icon" 
                    className='card-image__icon-hover'
                  />
                </div>
                <div className="card-info">
                  <h5 className="mb-12">Cybersecurity</h5>
                  <p className="mb-12 text-md neutral-300">
                    Technical support and maintenance for companies worldwide
                  </p>
                </div>
              </div>
              <button 
                className="btn btn-info-card animation-btn-svg" 
                onClick={handleCalendarOpen}
              >
                {btnText}
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919"/>
                </svg>
              </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};
