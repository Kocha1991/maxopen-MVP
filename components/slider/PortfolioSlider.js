'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { SlidePortfolio } from '../elements/SlidePortfolio';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

export default function PortfolioSlider({ items, btnsText }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = items.length;

  return (
    <div className='portfolio-slider'>
      <img
        src={items[activeIndex]?.['bg-img']?.full_url}
        alt="background desktop"
        className="portfolio-slider__bg portfolio-slider__bg-web"
      />
      <img
        src={items[activeIndex]?.['bg-slide-phone']?.full_url}
        alt="background mobile"
        className="portfolio-slider__bg portfolio-slider__bg-phone"
      />

      <div className='container portfolio-slider__wrapper'>
        <div className="swiper-container swiper-group">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
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
              setActiveIndex(swiper.realIndex);
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={item.id}>
                <SlidePortfolio 
                  item={item}
                  btnsText={btnsText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="box-button-slider box-button-slider-team custom-slider-btn">
          <div ref={prevRef} className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14"
                stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div ref={nextRef} className="swiper-button-next swiper-button-next-testimonials swiper-button-next-3">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2"
                stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="progres-line">
            <div
              className="progres-line__fill"
              style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>
          <div className="progres-line__counter">
            {activeIndex + 1} / {totalSlides}
          </div>
        </div>

        <div className='portfolio-slider__bot-info'>
          <div className='portfolio-slider__bot-info--wrepper'>
            {items[activeIndex]?.['option-title'].map((title, i) => (
              <div className='portfolio-slider__bot-item' key={i}>
                <h3 className='text-lg'>{title}</h3>
                <h2 className='text-18-bold'>{items[activeIndex]?.['option-descr'][i]}</h2>
              </div>
            ))}
          </div>

          <Link className="btn btn-info-card animation-btn-svg" href="">
            {btnsText.behance}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
