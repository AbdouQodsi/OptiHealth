'use client'
import React from 'react'
import Link from "next/link"

export default function Chooseus() {
    return (
        <> 


        <section className="chooseus-style-two p_relative">
            <div className="shape p_absolute t_0 r_0" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
            <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
            <div className="video-column" style={{ backgroundImage: "url(assets/images/background/video-bg-2.jpg)" }}>
                <div className="video-inner">
                    <div className="video-btn">
                    </div>
                </div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6">
                        <div className="content_block_five">
                            <div className="content-box ml_70">
                                <div className="sec-title light mb_35">
                                    <span className="sub-title">Why Choose</span>
                                    <h2 className="mb_25">Great Reasons For People Choose Optcare</h2>
                                    <p className="pt_2">Lorem ipsum dolor sit amet consectur adipicing elit sed do esmod tempor incididunt labore aliqua.</p>
                                </div>
                                <div className="inner-box">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item p_relative d_block">
                                                <h4><Link href="/index-2">Quality Staff</Link></h4>
                                                <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item p_relative d_block">
                                                <h4><Link href="/index-2">Quality Assistance</Link></h4>
                                                <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item p_relative d_block">
                                                <h4><Link href="/index-2">Affordable Price</Link></h4>
                                                <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item p_relative d_block">
                                                <h4><Link href="/index-2">Optimized Solutions</Link></h4>
                                                <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                                            </div>
                                        </div>
                                    </div>
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
