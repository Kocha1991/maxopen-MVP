import React, { useEffect, useState } from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { PriceItem } from "../../elements/PriceItem";
import { useLanguage } from "@/components/customHooks/LanguageContext";

const Prices = () => {
  const { language } = useLanguage(); // Отримуємо поточну мову
  const [services, setServices] = useState([]); // Стан для даних
  const [loading, setLoading] = useState(true); // Стан завантаження
  const [error, setError] = useState(null); // Стан помилки

  // Переклади заголовків
  const translations = {
    en: {
      textOnBg: "Solutions for You",
      title: "Your Goal — Our Solutions",
      descr: "Browse our services and find the perfect match for your project. We offer tailored solutions for every need, whether it's website development, mobile app creation, or business process optimization. Together, we'll achieve results that exceed your expectations",
      btnText: "Let's discuss",
    },
    uk: {
      textOnBg: "Рішення для вас",
      title: "Ваша мета — Наші рішення",
      descr: "Ознайомтеся з нашими послугами та знайдіть ідеальне рішення для свого проекту. Ми пропонуємо індивідуальні рішення для кожної потреби, від розробки веб-сайтів та створення мобільних додатків до оптимізації бізнес-процесів. Разом ми досягнемо результатів, які перевершать ваші очікування",
      btnText: "Давайте обговоримо",
    },
    ru_UA: {
      textOnBg: "Решения для вас",
      title: "Ваша цель — Наши решения",
      descr: "Ознакомьтесь с нашими услугами и найдите идеальное решение для своего проекта. Мы предлагаем индивидуальные решения для каждой потребности, от разработки веб-сайтов и создания мобильных приложений до оптимизации бизнес-процессов. Вместе мы достигнем результатов, которые превзойдут ваши ожидания",
      btnText: "Давайте обсудим",
    },
  };

  const { textOnBg, title, descr, btnText } = translations[language] || translations.en;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/price-of-services?where[locale]=${language}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();

        // Якщо немає даних для поточної мови, підставляємо англійські
        const filteredData = data.length > 0 ? data : data.filter((item) => item.locale === "en");
        setServices(filteredData);
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [language]); // Викликається щоразу при зміні мови

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="maxOpen__prices">
      <div className="container">
        <BlogTitle textOnBg={textOnBg} title={title} descr={descr} />
        <div className="maxOpen__prices-items">
          {services.map((service) => (
            <PriceItem
              key={service.id}
              title={`${service.title} ${service.price}`} // Заголовок із ціною
              descr={service.description} // Опис
              btnText={btnText} // Текст кнопки з перекладу
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
