import React from "react";
import { BlogTitle } from "@/components/blog/BlogTitle";
import { PriceItem } from "../../elements/PriceItem";
import { useLanguage } from "@/components/customHooks/LanguageContext";
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

const Prices = () => {
  const { language } = useLanguage();
  const { data: services, loading, error } = useFetchData("price-of-services", language);

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

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  
  return (
    <section className="maxOpen__prices">
      <div className="container">
        <BlogTitle textOnBg={textOnBg} title={title} descr={descr} />
        <div className="maxOpen__prices-items">
          {services.map((service) => (
            <PriceItem
              key={service.id}
              title={`${service.title} ${service.price}`}
              descr={service.description}
              btnText={btnText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
