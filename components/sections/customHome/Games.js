import React from 'react';
import Team2Slider from '@/components/slider/Team2Slider';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
import { useFetchData } from '@/components/customHooks/useFetchData';
import { useModal } from '@/components/customHooks/useModal';  // Додаємо useModal
import Loading from '@/components/elements/Loading';
=======
import { useModal } from '@/components/customHooks/useModal';
>>>>>>> 5de815db54abd20719157f4fbf9d6efc4888f162

export const Games = () => {
  const { t } = useTranslation();

  const { data: games, loading: gamesLoading } = useFetchData("video-games");
  const { openModal } = useModal();

<<<<<<< HEAD
  if (!Array.isArray(games)) {
    return <p>{t("notification.InformationMissing")}</p>;
=======
  if (!Array.isArray(data)) {
    return <p className='no-data text-lg neutral-500'>{t('notification.noDataAvailable')}</p>
>>>>>>> 5de815db54abd20719157f4fbf9d6efc4888f162
  }

  return (
    <section className="games">
      {gamesLoading ? (
        <Loading />
      ) : (
        <div className="container games__wrapper">
          <h2 className="maxOpen-services__title">
            {t("GamesTitle")}
          </h2>
          <div className="box-swiper mt-60">
            <Team2Slider slides={games} openModal={openModal} />
          </div>
        </div>
      )}
    </section>
  );
};
