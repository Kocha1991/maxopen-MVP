'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SlidePortfolio } from '../elements/SlidePortfolio';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

export default function PortfolioSlider({ items, btnsText }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = items.length;

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className='portfolio-slider'>
      <div className='portfolio-slider__wrapper'>
        <div className='container container-rel'>
          <div className="box-button-slider box-button-slider-team custom-slider-btn nav-slider-web">
            <div
              className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3"
              onClick={handlePrev}
            >
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div
              className="swiper-button-next swiper-button-next-testimonials swiper-button-next-3"
              onClick={handleNext}
            >
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="progres-line">
              <div className="progres-line__fill" style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }} />
            </div>
            <div className="progres-line__counter">
              {activeIndex + 1} / {totalSlides}
            </div>
          </div>
        </div>

        <div className="swiper-container swiper-group">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            onSwiper={swiper => (swiperRef.current = swiper)}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          >
            {items.map(item => (
              <SwiperSlide key={item.id}>
                <SlidePortfolio item={item} btnsText={btnsText} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='container '>
          <div className="box-button-slider box-button-slider-team custom-slider-btn nav-slider-phone">
            <div
              className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3"
              onClick={handlePrev}
            >
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div
              className="swiper-button-next swiper-button-next-testimonials swiper-button-next-3"
              onClick={handleNext}
            >
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="progres-line">
              <div className="progres-line__fill" style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }} />
            </div>
            <div className="progres-line__counter">
              {activeIndex + 1} / {totalSlides}
            </div>
          </div>

          <div className='portfolio-slider__bot-info portfolio-slider__bot-info-mob'>
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
    </div>
  );
}
