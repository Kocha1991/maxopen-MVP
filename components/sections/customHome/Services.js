import React, { useEffect, useState } from "react";
import { ServicesCard } from "@/components/elements/ServicesCard";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { useModal } from "@/components/customHooks/useModal";
import { useLanguage } from "@/components/customHooks/LanguageContext";

export const Services = () => {
  const { openModal } = useModal();
  const { language } = useLanguage();
  const [services, setServices] = useState([]);

  const translations = {
    en: {
      textOnBg: "Your solution is here",
      title: "Choose services based on your needs",
      descr:
        "Looking to increase sales, enhance brand recognition, or streamline customer interactions? We offer a wide range of web design and mobile app development services tailored to your specific needs",
      btnText: "Book a call",
    },
    uk: {
      textOnBg: "Ваше рішення тут",
      title: "Оберіть послуги відповідно до ваших потреб",
      descr:
        "Бажаєте збільшити продажі, підвищити впізнаваність бренду або оптимізувати взаємодію з клієнтами? Ми пропонуємо широкий спектр послуг веб-дизайну та розробки мобільних додатків, адаптованих до ваших конкретних потреб.",
      btnText: "Записатись на дзвінок",
    },
    ru_UA: {
      textOnBg: "Ваше решение здесь",
      title: "Выберите услуги в соответствии с вашими потребностями",
      descr:
        "Хотите увеличить продажи, повысить узнаваемость бренда или оптимизировать взаимодействие с клиентами? Мы предлагаем широкий спектр услуг веб-дизайна и разработки мобильных приложений, адаптированных к вашим конкретным потребностям.",
      btnText: "Записаться на звонок",
    },
  };

  const { textOnBg, title, descr, btnText } = translations[language] || translations.en;

  useEffect(() => {
    fetch(
      `https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/services?where[locale]=${language}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setServices(data.length > 0 ? data : []);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, [language]);

  return (
    <div className="maxOpen-services" id="services">
      <div className="container">
        <BlogTitle textOnBg={textOnBg} title={title} descr={descr} />
        <div className="row">
          {services.map((service, index) => {
            // Якщо це останній елемент і він не кратний трьом, додаємо клас для розтягування
            const isFullWidth = (index + 1) % 3 !== 0 && index === services.length - 1;

            return (
              <ServicesCard
                key={service.id}
                icon={service.icon}
                iconHover={service["icon-black"]}
                title={service.title}
                descr={service.description}
                btnText={btnText}
                isFullWidth={isFullWidth} // Передаємо у компонент `ServicesCard`
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
