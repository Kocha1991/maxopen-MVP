import React from 'react';
import Team2Slider from '@/components/slider/Team2Slider';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';  // Додаємо useModal

export const Games = ({title, items}) => {
  const { t } = useTranslation();

  const { openModal } = useModal();

  if (!Array.isArray(items)) {
    return <p>{t("notification.InformationMissing")}</p>;
  }

  return (
    <section className="games">
      <div className="container games__wrapper">
        <h2 className="maxOpen-services__title">
          {title}
        </h2>
        <div className="box-swiper mt-60">
          <Team2Slider slides={items} openModal={openModal} />
        </div>
      </div>
    </section>
  );
};
