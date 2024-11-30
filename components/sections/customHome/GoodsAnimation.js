import React from "react";
import LogoTicker2 from '@/components/elements/LogoTicker';

const GoodsAnimation = () => {
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-logos-2 custom-logos">
      <div className='box-logos-custom'>
        <div className="container">
            <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
                <LogoTicker2 />
            </div>
        </div>
      </div>
    </section>
  );
};

export default GoodsAnimation;
