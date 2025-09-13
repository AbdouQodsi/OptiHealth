'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 5,
        },
    }
}

export default function Project() {
    return (
        <> 


        <section className="project-section alternat-2 p_relative">
            <div className="outer-container">
                <Swiper {...swiperOptions} className="swiper-container project-carousel-2">
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/project/project-5.jpg" alt=""/></figure>
                                <div className="view-btn"><Link href="assets/images/project/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-33"></i></Link></div>
                                <div className="text">
                                    <h3><Link href="/">Living Modern Design</Link></h3>
                                    <span>Residential</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/project/project-6.jpg" alt=""/></figure>
                                <div className="view-btn"><Link href="assets/images/project/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-33"></i></Link></div>
                                <div className="text">
                                    <h3><Link href="/">Living Modern Design</Link></h3>
                                    <span>Residential</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/project/project-7.jpg" alt=""/></figure>
                                <div className="view-btn"><Link href="assets/images/project/project-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-33"></i></Link></div>
                                <div className="text">
                                    <h3><Link href="/">Living Modern Design</Link></h3>
                                    <span>Residential</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/project/project-8.jpg" alt=""/></figure>
                                <div className="view-btn"><Link href="assets/images/project/project-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-33"></i></Link></div>
                                <div className="text">
                                    <h3><Link href="/">Living Modern Design</Link></h3>
                                    <span>Residential</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/project/project-9.jpg" alt=""/></figure>
                                <div className="view-btn"><Link href="assets/images/project/project-9.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-33"></i></Link></div>
                                <div className="text">
                                    <h3><Link href="/">Living Modern Design</Link></h3>
                                    <span>Residential</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        </>
    )
}
