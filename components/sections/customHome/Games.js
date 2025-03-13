import React from 'react';
import Team2Slider from '@/components/slider/Team2Slider';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import { useModal } from '@/components/customHooks/useModal';  // Додаємо useModal
import Loading from '@/components/elements/Loading';

export const Games = () => {
  const { t } = useTranslation();

  const { data: games, loading: gamesLoading } = useFetchData("video-games");
  const { openModal } = useModal();

  if (!Array.isArray(games)) {
    return <p>{t("notification.InformationMissing")}</p>;
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
