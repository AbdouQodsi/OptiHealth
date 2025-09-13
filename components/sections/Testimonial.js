'use client'
import React from 'react'
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

    // Pagination
    pagination: {
        el: '.testimonial-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
        },
    }
}

export default function Testimonial() {
    return (
        <> 


        <section className="testimonial-style-two pt_100">
            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/testimonial-bg.jpg)" }}></div>
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-22.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                        <div className="content_block_six">
                            <div className="content-box p_relative z_2">
                                <div className="sec-title p_relative mb_35">
                                    <span className="sub-title">Testimonial</span>
                                    <h2>What Our Client Say About Optcare</h2>
                                </div>
                                <Swiper {...swiperOptions} className="swiper-container two-item-carousel">
                                    <SwiperSlide>
                                        <div className="testimonial-content">
                                            <div className="text p_relative d_block">
                                                <p>“Adipisicing elit sed do eiusmodim tempor incid labore etax dolore magna aliqua enim minium quis veniam nostrud exer cition ulamco laboris nisar aliquip commodo consequat aute irure dolor in reprehenderit in voluptate”.</p>
                                            </div>
                                            <div className="author-box">
                                                <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.jpg" alt=""/></figure>
                                                <h3>Rachel McAdams</h3>
                                                <span className="designation">Electrician</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-content">
                                            <div className="text p_relative d_block">
                                                <p>“Adipisicing elit sed do eiusmodim tempor incid labore etax dolore magna aliqua enim minium quis veniam nostrud exer cition ulamco laboris nisar aliquip commodo consequat aute irure dolor in reprehenderit in voluptate”.</p>
                                            </div>
                                            <div className="author-box">
                                                <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.jpg" alt=""/></figure>
                                                <h3>Rachel McAdams</h3>
                                                <span className="designation">Electrician</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-content">
                                            <div className="text p_relative d_block">
                                                <p>“Adipisicing elit sed do eiusmodim tempor incid labore etax dolore magna aliqua enim minium quis veniam nostrud exer cition ulamco laboris nisar aliquip commodo consequat aute irure dolor in reprehenderit in voluptate”.</p>
                                            </div>
                                            <div className="author-box">
                                                <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.jpg" alt=""/></figure>
                                                <h3>Rachel McAdams</h3>
                                                <span className="designation">Electrician</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className='testimonial-pagination dots-style-one'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
