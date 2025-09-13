'use client'
import React from 'react'

export default function Process() {
    return (
        <> 


        <section className="process-section p_relative centred" id='treatments'>
            <div className="pattern-layer">
                <div className="pattern-1 rotate-me" style={{ backgroundImage: "url(assets/images/icons/icon-1.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title centred mb_85">
                    <span className="sub-title">How It Works</span>
                    <h2>How it Helps You to <br />Keep Healthy</h2>
                </div>
                <div className="inner-container p_relative">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div className="process-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <span className="count-text">01</span>
                                        <figure className="image"><img src="assets/images/resource/process-1.png" alt=""/></figure>
                                    </div>
                                    <h3>Get Appointment</h3>
                                    <p>Book & pay online. We’ll match you with a trusted house cleaner</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div className="process-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <span className="count-text">02</span>
                                        <figure className="image"><img src="assets/images/resource/process-2.png" alt=""/></figure>
                                    </div>
                                    <h3>Start Check-Up</h3>
                                    <p>Every cleaner is friendly and reliable.They have been experts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div className="process-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <span className="count-text">03</span>
                                        <figure className="image"><img src="assets/images/resource/process-3.png" alt=""/></figure>
                                    </div>
                                    <h3>Enjoy Healthy Life</h3>
                                    <p>Quisqu tell us risus adpis viera bibe um urna.</p>
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
