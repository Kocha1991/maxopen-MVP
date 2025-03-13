import React from "react";
import LogoTicker from '@/components/elements/LogoTicker';
import { useFetchData } from '@/components/customHooks/useFetchData';
import Loading from '@/components/elements/Loading';

const GoodsAnimation = ({ text }) => {

  const { data: logos, loading: logosLoading } = useFetchData('logo-techonologies');
  

  const items = logos.length > 0 && logos[0].logo ? logos[0].logo : [];

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-logos-2 custom-logos">
      <div className='box-logos-custom'>
        <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
          {text && <div className='carouselTickerLogos2__text'>{text}</div>}
          {logosLoading ? (
            <Loading />
          ) : (
            <LogoTicker data={items} />
          )}
        </div>
      </div>
    </section>
  );
};

export default GoodsAnimation;