'use client'
import React from 'react'

export default function Skills() {
    return (
        <> 


        <section className="skills-section p_relative">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-28.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_four">
                            <div className="image-box mr_70 pb_100">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
                                <div className="icon-box rotate-me"><img src="assets/images/icons/icon-1.png" alt=""/></div>
                                <figure className="image image-1"><img src="assets/images/resource/about-2.jpg" alt=""/></figure>
                                <figure className="image image-2"><img src="assets/images/resource/about-3.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_seven">
                            <div className="content-box ml_30">
                                <div className="sec-title mb_30">
                                    <span className="sub-title">Ophthmologist</span>
                                    <h2 className="mb_15">Eye Care Service Skills For Child and Adults</h2>
                                    <p className="pt_12">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt labore aliqua.</p>
                                </div>
                                <div className="progress-box">
                                    <div className="progress-box p_relative d_block mb_25">
                                        <h5>Dedicated Team</h5>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" style={{ width: '85%' }}></div>
                                            <div className="count-text">85%</div>
                                        </div>
                                    </div>
                                    <div className="progress-box p_relative d_block mb_25">
                                        <h5>High Tech Equipments</h5>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" style={{ width: '90%' }}></div>
                                            <div className="count-text">90%</div>
                                        </div>
                                    </div>
                                    <div className="progress-box p_relative d_block">
                                        <h5>Expert Doctor</h5>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" style={{ width: '75%' }}></div>
                                            <div className="count-text">75%</div>
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
