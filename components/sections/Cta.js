'use client'
import React from 'react'
import Link from "next/link"

export default function Cta() {
    return (
        <> 

        <section className="cta-section alternat-2 p_relative bg-color-1" id='contact'>
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-30.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box mr_25 mt_60">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-31.png)" }}></div>
                            <figure className="image p_relative z_1"><img src="assets/images/resource/car-1.png" alt=""/></figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box ml_35">
                            <div className="sec-title left mb_25">
                                <span className="sub-title">Emergency Need</span>
                                <h2>Need a Doctor <br />for Check-up? Call for an <span>Emergency Service!</span></h2>
                            </div>
                            <div className="text">
                                <p>All of our services are backed by our 100% satisfaction guarantee Our electricians can install anything.</p>
                            </div>
                            <div className="support-box">
                                <div className="icon-box"><i className="icon-32"></i></div>
                                <h4>For Emergency</h4>
                                <h3><Link href="tel:123045615523">+1 (230)-456-155-23</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
