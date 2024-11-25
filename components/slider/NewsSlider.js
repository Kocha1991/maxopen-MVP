'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-3",
        prevEl: ".swiper-button-prev-3"
    },
    autoplay: {
        delay: 10000
    },
    breakpoints: {
        1199: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 2
        },
        400: {
            slidesPerView: 1
        },
        250: {
            slidesPerView: 1
        }
    }
}

export default function NewsSlider() {
    return (
        <>
            <div className="swiper-container swiper-group-3">
                <Swiper {...swiperOptions}>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="/blog-post"><img src="/assets/imgs/page/homepage1/img-news.png" alt="Nivia" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="/blog-post">Now the pain is
                                very important, and the teaching is consistent.</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">Pellentesque at posuere tellus. Ut
                                    sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus
                                    tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p>
                                <Link className="btn btn-learmore-2" href="/blog-post"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="/blog-post"><img src="/assets/imgs/page/homepage1/img-news2.png" alt="Nivia" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="/blog-post">The behavior of
                                the pain itself is important, consistent with</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">Pellentesque at posuere tellus. Ut
                                    sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus
                                    tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p>
                                <Link className="btn btn-learmore-2" href="/blog-post"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span> Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="/blog-post"><img src="/assets/imgs/page/homepage1/img-news3.png" alt="Nivia" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="/blog-post">How startups can
                                improve their chances of getting financing</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">Pellentesque at posuere tellus. Ut
                                    sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus
                                    tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p>
                                <Link className="btn btn-learmore-2" href="/blog-post"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span> Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="/blog-post"><img src="/assets/imgs/page/homepage1/img-news.png" alt="Nivia" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="/blog-post">Now the pain is
                                very important, and the teaching is consistent.</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">Pellentesque at posuere tellus. Ut
                                    sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus
                                    tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p>
                                <Link className="btn btn-learmore-2" href="/blog-post"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="/blog-post"><img src="/assets/imgs/page/homepage1/img-news2.png" alt="Nivia" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="/blog-post">The behavior of
                                the pain itself is important, consistent with</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">Pellentesque at posuere tellus. Ut
                                    sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus
                                    tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p>
                                <Link className="btn btn-learmore-2" href="/blog-post"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span> Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="/blog-post"><img src="/assets/imgs/page/homepage1/img-news3.png" alt="Nivia" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="/blog-post">How startups can
                                improve their chances of getting financing</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">Pellentesque at posuere tellus. Ut
                                    sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus
                                    tristique non. Nam laoreet, risus vel laoreet laoreet, mauris</p>
                                <Link className="btn btn-learmore-2" href="/blog-post"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span> Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
