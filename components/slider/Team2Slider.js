'use client'
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideCard } from '../elements/SlideCard';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 4,
    spaceBetween: 30,
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
        1199: {
            slidesPerView: 4
        },
        800: {
            slidesPerView: 3
        },
        500: {
            slidesPerView: 2
        },
        350: {
            slidesPerView: 1
        },
        250: {
            slidesPerView: 1
        }
    },
}

export default function Team2Slider() {
    return (
        <>
            <div className="swiper-container swiper-group-4">
                <Swiper {...swiperOptions}>
                    <SwiperSlide>
                        <SlideCard 
                          video='/assets/imgs/template/video1.MP4'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideCard 
                          video='/assets/imgs/template/video2.MP4'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideCard 
                          video='/assets/imgs/template/video3.MP4'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideCard 
                          video='/assets/imgs/template/video4.MP4'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideCard 
                          video='/assets/imgs/template/video5.MP4'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideCard 
                          video='/assets/imgs/template/video6.MP4'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideCard 
                          video='/assets/imgs/template/video7.MP4'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideCard 
                          video='/assets/imgs/template/video8.MP4'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="box-button-slider box-button-slider-team custom-slider-btn">
                <div className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-testimonials swiper-button-next-3">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2" stroke="true" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                </div>
            </div>
        </>
    )
}
