import React from "react";
import LogoTicker from '@/components/elements/LogoTicker';
import Loading from '@/components/elements/Loading'; 
import { useFetchData } from '@/components/customHooks/useFetchData';

const GoodsAnimation = ({ text }) => {
  const { data, loading, error } = useFetchData('logo-techonologies');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const logos = data.length > 0 && data[0].logo ? data[0].logo : [];

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-logos-2 custom-logos">
      <div className='box-logos-custom'>
        <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
          {text && <div className='carouselTickerLogos2__text'>{text}</div>}
          <LogoTicker items={logos} />
        </div>
      </div>
    </section>
  );
};

export default GoodsAnimation;