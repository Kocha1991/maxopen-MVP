import React from 'react';
import Team2Slider from '@/components/slider/Team2Slider';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/components/customHooks/useModal';

export const Games = ({data, isLoading}) => {
  const { t } = useTranslation();

  const { openModal } = useModal();

  if (!Array.isArray(data)) {
    return <p className='no-data text-lg neutral-500'>{t('notification.noDataAvailable')}</p>
  }

  return (
    <section className="games">
      <div className="container games__wrapper">
        <h2 className="maxOpen-services__title">
          {t("GamesTitle")}
        </h2>
        <div className="box-swiper mt-60">
          <Team2Slider slides={data} openModal={openModal} />
        </div>
      </div>
    </section>
  );
};
