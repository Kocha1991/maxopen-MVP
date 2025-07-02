'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { SlidePortfolio } from '../elements/SlidePortfolio';
import 'swiper/css';
import 'swiper/css/navigation';

export default function PortfolioSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const slides = [<SlidePortfolio />, <SlidePortfolio />];
  const totalSlides = slides.length;

  return (
    <div className='portfolio-slider'>
      <img
        src="/assets/imgs/template/portfolio-bg.png"
        alt="background"
        className='portfolio-slider__bg'
      />

      <div className='container portfolio-slider__wrapper'>
        <div className="swiper-container swiper-group">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 10000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            onSlideChange={(swiper) => {
              const current = swiper.realIndex + 1;
              setActiveIndex(current);

              const isBeginning = swiper.isBeginning;
              const isEnd = swiper.isEnd;

              if (prevRef.current) {
                prevRef.current.classList.toggle('swiper-button-disabled', isBeginning);
              }
              if (nextRef.current) {
                nextRef.current.classList.toggle('swiper-button-disabled', isEnd);
              }
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="box-button-slider box-button-slider-team custom-slider-btn">
          <div
            ref={prevRef}
            className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3"
          >
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path
                d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14"
                stroke="true"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div
            ref={nextRef}
            className="swiper-button-next swiper-button-next-testimonials swiper-button-next-3"
          >
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path
                d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2"
                stroke="true"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="progres-line">
            <div
              className="progres-line__fill"
              style={{
                width: `${(activeIndex / totalSlides) * 100}%`,
              }}
            ></div>
            <div className="progres-line__counter">
              {activeIndex} / {totalSlides}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
