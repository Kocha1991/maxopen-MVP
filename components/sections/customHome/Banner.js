'use client';
import { useModal } from '@/components/customHooks/useModal';
import { useTranslation } from 'react-i18next';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

export default function Banner() {
  const { openModal } = useModal();
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const { data: banner, loading: bannerLoading } = useFetchData("home-banner", language, true);
  
  return (
    <section className="section-box maxOpen-banner">
      <div className="container">
        {bannerLoading ? (
          <Loading />
        ) : (
          <div className='maxOpen-banner__wrapper'>
            <div className="blur-bg blur-move" />
            <div className="maxOpen-banner__left">
              <h1 className="display-2 mb-30 mt-25 neutral-0">{banner.title}</h1>
              <p className="text-lg neutral-500 mb-40">{banner.description}</p>
              <div className="d-flex mb-60">
                <button
                  className="btn banner-btn hover-up mr-5"
                  onClick={() => openModal('calendar')}
                >
                  <span>
                    <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
                    {banner["btn-text"]}
                  </span>
                </button>
              </div>
            </div>
            <div className="maxOpen-banner__right">
              <div className="img-bg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
