import React from 'react';
import Team2Slider from '@/components/slider/Team2Slider';

export const Games = ({ openModal }) => {
  return (
    <section className="games">
      <div className="container games__wrapper">
        <h2 className="maxOpen-services__title">
          Expanding our horizons from web development to game development
        </h2>
        <div className="box-swiper mt-60">
          <Team2Slider openModal={openModal} />
        </div>
      </div>
    </section>
  );
};
