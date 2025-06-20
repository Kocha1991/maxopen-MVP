'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideCard2 } from '../elements/SliderCard2';
import { BlogTitle } from '../blog/BlogTitle';

const chatbotSliderOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next-4",
      prevEl: ".swiper-button-prev-4"
  },
  autoplay: {
      delay: 5000
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
};

export default function ChatbotSlider({data, title, teaser}) {

  return (
    <div className='container'>
      <div className='chatbot-slider'>
        <BlogTitle 
          teaser={teaser}
          title={title}
        />

        {/* Обгортка Swiper */}
        <div className="swiper-container swiper-group-4">
            <Swiper {...chatbotSliderOptions}>
                {data.map((card) => (
                    <SwiperSlide key={card.id}>
                        <SlideCard2
                            previewImage={card.image?.full_url}
                            title={card.title}
                            text={card.text}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        {/* Кнопки навігації Swiper */}
        <div className="box-button-slider box-button-slider-team custom-slider-btn">
            <div className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-4">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="swiper-button-next swiper-button-next-testimonials swiper-button-next-4">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
      </div>
    </div>
  );
}
