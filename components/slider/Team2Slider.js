'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideCard } from '../elements/SlideCard';
import { useModal } from '../customHooks/useModal';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 10000
    },
    breakpoints: {
        1199: { slidesPerView: 4 },
        800: { slidesPerView: 3 },
        500: { slidesPerView: 2 },
        350: { slidesPerView: 1 },
        250: { slidesPerView: 1 }
    },
};

export default function Team2Slider({ slides, openModal }) {

  return (
      <>
        <div className="swiper-container swiper-group-4">
            <Swiper {...swiperOptions}>
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <SlideCard
                            video={slide["video-game"].full_url}
                            previewImage={slide.poster.full_url || "/assets/imgs/template/2048.jpeg"}
                            openModal={openModal}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <div className="box-button-slider box-button-slider-team custom-slider-btn">
            <div className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="swiper-button-next swiper-button-next-testimonials swiper-button-next-3">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
      </>
  );
}
