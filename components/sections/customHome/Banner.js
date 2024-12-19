'use client';
import { useLanguage } from '@/components/customHooks/LanguageContext';
import { useModal } from '@/components/customHooks/useModal';

export default function Banner() {
  const { language } = useLanguage();
  const { openModal } = useModal();

  const translations = {
    en: {
      title: "Let's bring your vision to reality",
      description: "Your idea deserves an exceptional realization. We create more than just apps and websites; we craft thoughtful digital products that reflect your brand’s unique identity, set you apart from the competition, and drive your bottom line.",
      description2:"From the initial concept to the final release, we’re with you every step of the way, ensuring a result that exceeds your expectations",
      button: "Book a meeting",
    },
    uk: {
      title: "Давайте втілимо вашу ідею в реальність",
      description: "Ваша ідея заслуговує виняткової реалізації. Ми створюємо більше, ніж просто додатки та веб-сайти; ми створюємо продумані цифрові продукти, які відображають унікальну ідентичність вашого бренду, виділяють вас серед конкурентів і сприяють зростанню вашого прибутку.",
      description2:"Від початкової концепції до фінального релізу ми з вами на кожному кроці, гарантуючи результат, що перевершить ваші очікування.",
      button: "Запланувати зустріч",
    },
    ru_UA: {
      title: "Давайте воплотим вашу идею в реальность",
      description: "Ваша идея заслуживает исключительной реализации. Мы создаем больше, чем просто приложения и веб-сайты; мы создаем продуманные цифровые продукты, которые отражают уникальную идентичность вашего бренда, выделяют вас среди конкурентов и способствуют росту вашего дохода.",
      description2:"От начальной концепции до финального релиза мы с вами на каждом шаге, гарантируя результат, который превзойдет ваши ожидания.",
      button: "Запланировать встречу",
    },
  };

  const { title, description, description2, button } = translations[language] || translations.en;

  return (
    <section className="section-box maxOpen-banner">
      <div className="container">
        <div className='maxOpen-banner__wrapper'>
          <div className="blur-bg blur-move" />
          <div className="maxOpen-banner__left">
            <h1 className="display-2 mb-30 mt-25 neutral-0">{title}</h1>
            <p className="text-lg neutral-500">{description}</p>
            <br />
            <p className="text-lg neutral-500 mb-55">{description2}</p>
            <div className="d-flex mb-60">
              <button
                className="btn banner-btn hover-up mr-5"
                onClick={() => openModal('calendar')}
              >
                <span>
                  <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
                  {button}
                </span>
              </button>
            </div>
          </div>
          <div className="maxOpen-banner__right">
            <div className="img-bg" />
          </div>
        </div>
      </div>
    </section>
  );
}
