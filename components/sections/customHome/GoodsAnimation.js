import React from "react";
import LogoTicker2 from '@/components/elements/LogoTicker';

const GoodsAnimation = ({
  text,
}) => {

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-logos-2 custom-logos">
      <div className='box-logos-custom'>
        <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
          {text && <div className='carouselTickerLogos2__text'>{text}</div>}
          <LogoTicker2 />
        </div>
      </div>
    </section>
  );
};

export default GoodsAnimation;
