'use client'
import React from 'react'

export default function About() {
    return (
        <> 


        <section className="about-style-two p_relative" id='about'>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                            <div className="content-box mt_15">
                                <div className="sec-title mb_25">
                                    <span className="sub-title">Who We Are?</span>
                                    <h2>The Great Place Of Eyecare Hospital Center</h2>
                                </div>
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                                </div>
                                <div className="inner-box p_relative mb_40">
                                    <div className="single-item">
                                        <div className="icon-box"><i className="icon-8"></i></div>
                                        <h3>Our Patients <br />Vision</h3>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box"><i className="icon-10"></i></div>
                                        <h3>Trusted Eye <br />Doctor</h3>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <a href="#" className="theme-btn btn-one">View All Team</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_three">
                            <div className="image-box ml_13 pr_20 pl_60">
                                <div className="shape">
                                    <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                                    <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                                </div>
                                <figure className="image"><img src="assets/images/resource/about-1.png" alt=""/></figure>
                                <div className="text p_absolute l_0 b_40">
                                    <h2>30</h2>
                                    <h4>Years of Experience in This Field</h4>
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
