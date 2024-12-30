import React from 'react';
import Team2Slider from '@/components/slider/Team2Slider';
import { useTranslation } from 'react-i18next';

export const Games = ({ openModal }) => {
  const { t } = useTranslation();
  
  return (
    <section className="games">
      <div className="container games__wrapper">
        <h2 className="maxOpen-services__title">
          {t("GamesTitle")}
        </h2>
        <div className="box-swiper mt-60">
          <Team2Slider openModal={openModal} />
        </div>
      </div>
    </section>
  );
};
