import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import { PriceItem } from '../../elements/PriceItem';
import { useLanguage } from '@/components/customHooks/LanguageContext';

const Prices = () => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      textOnBg: "Solutions for You",
      title: "Your Goal — Our Solutions",
      descr: "Browse our services and find the perfect match for your project. We offer tailored solutions for every need, whether it's website development, mobile app creation, or business process optimization. Together, we'll achieve results that exceed your expectations",
      btnText:"Let's discuss",
    },
    uk: {
      textOnBg: "Рішення для вас",
      title: "Ваша мета — Наші рішення",
      descr: "Ознайомтеся з нашими послугами та знайдіть ідеальне рішення для свого проекту. Ми пропонуємо індивідуальні рішення для кожної потреби, від розробки веб-сайтів та створення мобільних додатків до оптимізації бізнес-процесів. Разом ми досягнемо результатів, які перевершать ваші очікування",
      btnText: "Давайте обговоримо"
    },
    ru_UA: {
      textOnBg: "Решения для вас",
      title: "Ваша цель — Наши решения",
      descr: "Ознакомьтесь с нашими услугами и найдите идеальное решение для своего проекта. Мы предлагаем индивидуальные решения для каждой потребности, от разработки веб-сайтов и создания мобильных приложений до оптимизации бизнес-процессов. Вместе мы достигнем результатов, которые превзойдут ваши ожидания",
      btnText: "Давайте обсудим"
    },
  };
  const { textOnBg, title, descr, btnText } = translations[language] || translations.en;

  return (
    <section className='maxOpen__prices'>
      <div className="container">
        <BlogTitle 
          textOnBg={textOnBg}
          title={title}
          descr={descr}
        />
        <div className='maxOpen__prices-items'>
          <PriceItem 
            title="Website design - From 1000$"
            descr="We understand that every business is unique, so we create a web design that best suits your needs. Our designers work to ensure that the site not only meets all the requirements, but is also stylish and user-friendly. We integrate modern technologies and best web design practices to ensure high efficiency. Your website will be adaptive and ready for all modern requirements. We help you create a strong online image and attract more customers."
            btnText={btnText}
          />
          <PriceItem 
            title="Mobile applications- From 1000$"
            descr="We understand that every business is unique, so we create a web design that best suits your needs. Our designers work to ensure that the site not only meets all the requirements, but is also stylish and user-friendly. We integrate modern technologies and best web design practices to ensure high efficiency. Your website will be adaptive and ready for all modern requirements. We help you create a strong online image and attract more customers."
            btnText={btnText}
          />
          <PriceItem 
            title="ERP-system - From 1000$"
            descr="We understand that every business is unique, so we create a web design that best suits your needs. Our designers work to ensure that the site not only meets all the requirements, but is also stylish and user-friendly. We integrate modern technologies and best web design practices to ensure high efficiency. Your website will be adaptive and ready for all modern requirements. We help you create a strong online image and attract more customers."
            btnText={btnText}
          />
        </div>
      </div>
    </section>
  );
};

export default Prices;
