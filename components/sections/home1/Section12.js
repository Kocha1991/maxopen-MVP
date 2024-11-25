
'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 10000
    }
}

export default function Section12() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-testimonials-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30"><img src="/assets/imgs/page/homepage1/img-testimonial.png" alt="Nivia" />
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="row align-items-end">
                                <div className="col-lg-8 mb-50"><Link className="btn btn-brand-4-sm" href="#">Testimonials</Link>
                                    <h3 className="mt-20 neutral-0">Here’s Why Our Customers Love Us</h3>
                                </div>
                                <div className="col-lg-4 mb-50">
                                    <div className="box-button-slider box-button-slider-black">
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
                                </div>
                            </div>
                            <div className="box-swiper mt-30">
                                <div className="swiper-container swiper-group-1">
                                    <Swiper {...swiperOptions}>
                                        <SwiperSlide>
                                            <div className="card-testimonial-3">
                                                <div className="card-image"><img src="/assets/imgs/page/homepage1/img-review.png" alt="Nivia" /></div>
                                                <div className="card-info">
                                                    <p className="text-md neutral-500">“As a long-time user of Nivia Platform's
                                                        digital marketing, I can confidently attest to the outstanding
                                                        quality and reliability they offer. ”</p>
                                                    <div className="card-author-review">
                                                        <div className="card-author-info"><span className="author-name">ROBERT
                                                            FOX</span><span className="author-tag">@Amazon</span></div>
                                                        <div className="card-rate"><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-testimonial-3">
                                                <div className="card-image"><img src="/assets/imgs/page/homepage1/img-review-2.png" alt="Nivia" /></div>
                                                <div className="card-info">
                                                    <p className="text-md neutral-500">“I recently started using Nivia Platform,
                                                        and the experience has been nothing short of exceptional. From the
                                                        moment I made my first inquiry, their team has been consistently
                                                        accommodating and attentive. ”</p>
                                                    <div className="card-author-review">
                                                        <div className="card-author-info"><span className="author-name">ALAN
                                                            WALKER</span><span className="author-tag">@Facetime</span></div>
                                                        <div className="card-rate"><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /><img src="/assets/imgs/page/homepage1/star.svg" alt="Nivia" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
