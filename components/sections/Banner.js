'use client'
import React from 'react'
import Link from "next/link"
import Typewriter from "typewriter-effect";
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

    // Navigation
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
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

export default function Banner() {
    return (
        <> 


            <section className="banner-style-two centred p_relative">
                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                    <SwiperSlide>
                        <div className="slide-item p_relative">
                            <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
                            <div className="pattern-layer">
                                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                                <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                                <div className="eye-icon rotate-me" style={{ backgroundImage: "url(assets/images/icons/icon-1.png)" }}></div>
                            </div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="big-title animation_text_word">
                                        <Typewriter
                                        options={{
                                        strings: ["Optcare", "Optcare", "Optcare"],
                                        autoStart: true,
                                        loop: true,
                                        }}/>
                                    </span> 
                                    <h3>Eye Care & Holistic Health Center</h3>
                                    <h2>Eye Care & Holistic Health Center</h2>
                                    <p>We solve all your eye care needs by providing personalized and holistic eye care for you and your family!</p>
                                    <div className="btn-box">
                                        <Link href="#contact" className="theme-btn btn-one">Contact Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item p_relative">
                            <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}></div>
                            <div className="pattern-layer">
                                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                                <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                                <div className="eye-icon rotate-me" style={{ backgroundImage: "url(assets/images/icons/icon-1.png)" }}></div>
                            </div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="big-title animation_text_word">
                                        <Typewriter
                                        options={{
                                        strings: ["Optcare", "Optcare", "Optcare"],
                                        autoStart: true,
                                        loop: true,
                                        }}/>
                                    </span>
                                    <h3>Eye Care & Holistic Health Center</h3>
                                    <h2>Eye Care & Holistic Health Center</h2>
                                    <p>We solve all your eye care needs by providing personalized and holistic eye care for you and your family!</p>
                                    <div className="btn-box">
                                        <Link href="#contact" className="theme-btn btn-one">Contact Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item p_relative">
                            <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
                            <div className="pattern-layer">
                                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                                <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                                <div className="eye-icon rotate-me" style={{ backgroundImage: "url(assets/images/icons/icon-1.png)" }}></div>
                            </div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="big-title animation_text_word">
                                        <Typewriter
                                        options={{
                                        strings: ["Optcare", "Optcare", "Optcare"],
                                        autoStart: true,
                                        loop: true,
                                        }}/>
                                    </span>
                                    <h3>Eye Care & Holistic Health Center</h3>
                                    <h2>Eye Care & Holistic Health Center</h2>
                                    <p>We solve all your eye care needs by providing personalized and holistic eye care for you and your family!</p>
                                    <div className="btn-box">
                                        <Link href="#contact" className="theme-btn btn-one">Contact Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item p_relative">
                            <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}></div>
                            <div className="pattern-layer">
                                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                                <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                                <div className="eye-icon rotate-me" style={{ backgroundImage: "url(assets/images/icons/icon-1.png)" }}></div>
                            </div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="big-title animation_text_word">
                                        <Typewriter
                                        options={{
                                        strings: ["Optcare", "Optcare", "Optcare"],
                                        autoStart: true,
                                        loop: true,
                                        }}/>
                                    </span>
                                    <h3>Eye Care & Holistic Health Center</h3>
                                    <h2>Eye Care & Holistic Health Center</h2>
                                    <p>We solve all your eye care needs by providing personalized and holistic eye care for you and your family!</p>
                                    <div className="btn-box">
                                        <Link href="/contact" className="theme-btn btn-one">Contact Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-nav">
                        <button className="swiper-button-prev"><span className="fal fa-angle-left"></span></button>
                        <button className="swiper-button-next"><span className="fal fa-angle-right"></span></button>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
