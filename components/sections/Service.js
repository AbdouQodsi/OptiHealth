'use client'
import React from 'react'
import Link from "next/link"

export default function Service() {
    return (
        <> 


        <section className="service-style-two p_relative">
            <div className="pattern-layer">
                <div className="pattern-1 p_absolute l_20 b_20" style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}></div>
                <div className="pattern-2 p_absolute t_20 r_20" style={{ backgroundImage: "url(assets/images/shape/shape-19.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title centred mb_50">
                    <span className="sub-title">Our Services</span>
                    <h2>A Global Leader, Treatment <br />of eye Disease</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/service/service-2.jpg" alt=""/>
                                    <Link href="#"><i className="fas fa-link"></i></Link>
                                </figure>
                                <div className="lower-content">
                                    <div className="icon-box"><i className="icon-17"></i></div>
                                    <h3><Link href="#">Surgical Procedures</Link></h3>
                                    <p className="p_relative d_block">Lorem ipsum dolor amet consectur tempor adicing elit sed do usmod tempor incidunt enim minim veniam.</p>
                                    <div className="link p_relative d_block"><Link href="#">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/service/service-3.jpg" alt=""/>
                                    <Link href="#"><i className="fas fa-link"></i></Link>
                                </figure>
                                <div className="lower-content">
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="#">Paeditaric Ophthalmology</Link></h3>
                                    <p className="p_relative d_block">Lorem ipsum dolor amet consectur tempor adicing elit sed do usmod tempor incidunt enim minim veniam.</p>
                                    <div className="link p_relative d_block"><Link href="#">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/service/service-4.jpg" alt=""/>
                                    <Link href="#"><i className="fas fa-link"></i></Link>
                                </figure>
                                <div className="lower-content">
                                    <div className="icon-box"><i className="icon-19"></i></div>
                                    <h3><Link href="#">Lenses Transitions</Link></h3>
                                    <p className="p_relative d_block">Lorem ipsum dolor amet consectur tempor adicing elit sed do usmod tempor incidunt enim minim veniam.</p>
                                    <div className="link p_relative d_block"><Link href="#">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
