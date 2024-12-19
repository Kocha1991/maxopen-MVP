import React from 'react';
import Team2Slider from '@/components/slider/Team2Slider';
import { useLanguage } from '@/components/customHooks/LanguageContext';

export const Games = ({ openModal }) => {
  const { language } = useLanguage();
  const translations = {
    en: {
      title:"Expanding our horizons from web development to game development"
    },
    uk: {
      title:"Розширюємо горизонти: від веб-розробки до розробки ігор"
    },
    ru_UA: {
      title:"Расширяем горизонты: от веб-разработки до разработки игр"
    },
  };
  const { title } = translations[language] || translations.en;
  
  return (
    <section className="games">
      <div className="container games__wrapper">
        <h2 className="maxOpen-services__title">
          {title}
        </h2>
        <div className="box-swiper mt-60">
          <Team2Slider openModal={openModal} />
        </div>
      </div>
    </section>
  );
};
