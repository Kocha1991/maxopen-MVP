import React from 'react';
import Team2Slider from '@/components/slider/Team2Slider';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import { useModal } from '@/components/customHooks/useModal';  // Додаємо useModal
import Loading from '@/components/elements/Loading';

export const Games = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { openModal } = useModal();

  const { data: videos, loading: videosLoading } = useFetchData("video-games");
  const { data: text, loading: textLoading } = useFetchData("games-title", language, true);
  const loading = videosLoading || textLoading;

  if (!Array.isArray(videos)) {
    return <p>{t("notification.InformationMissing")}</p>;
  }

  return (
    <section className="games">
      {loading ? (
        <Loading />
      ) : (
        <div className="container games__wrapper">
          <h2 className="maxOpen-services__title">
            {text.title}
          </h2>
          <div className="box-swiper mt-60">
            <Team2Slider slides={videos} openModal={openModal} />
          </div>
        </div>
      )}
    </section>
  );
};
