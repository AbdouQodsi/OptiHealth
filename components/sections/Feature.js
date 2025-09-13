'use client'
import React from 'react'
import Link from "next/link"

export default function Feature() {
    return (
        <> 


        <section className="feature-style-two p_relative pt_100 pb_100">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500m">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-12"></i></div>
                                <h3><Link href="/index-2">Qualified Doctors</Link></h3>
                                <p>Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500m">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-13"></i></div>
                                <h3><Link href="/index-2">Modern Equipment</Link></h3>
                                <p>Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500m">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="/index-2">Emergency Help</Link></h3>
                                <p>Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500m">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-15"></i></div>
                                <h3><Link href="/index-2">Individual Approach</Link></h3>
                                <p>Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
