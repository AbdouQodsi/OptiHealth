'use client'
import React from 'react'
import Link from "next/link"

export default function Team() {
    return (
        <> 


        <section className="team-style-two">
            <div className="auto-container">
                <div className="sec-title centred mb_60">
                    <span className="sub-title">Ophthalmologist</span>
                    <h2>The Most Qualified Skillful & <br />Professional staff</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-two wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                <div className="lower-content p_relative d_block">
                                    <div className="share-box p_absolute">
                                        <Link href="#" className="share-icon fs_14 d_iblock"><i className="icon-37"></i></Link>
                                        <ul className="share-links p_absolute clearfix">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link href="#">Catherine Denuve</Link></h3>
                                    <span className="designation">Optegra eye</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-two wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-5.jpg" alt=""/></figure>
                                <div className="lower-content p_relative d_block">
                                    <div className="share-box p_absolute">
                                        <Link href="#" className="share-icon fs_14 d_iblock"><i className="icon-37"></i></Link>
                                        <ul className="share-links p_absolute clearfix">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link href="#">Laurence Olivier</Link></h3>
                                    <span className="designation">Lens replacement</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-two wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-6.jpg" alt=""/></figure>
                                <div className="lower-content p_relative d_block">
                                    <div className="share-box p_absolute">
                                        <Link href="#" className="share-icon fs_14 d_iblock"><i className="icon-37"></i></Link>
                                        <ul className="share-links p_absolute clearfix">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link href="#">Susan Hopkins</Link></h3>
                                    <span className="designation">Cataract surgery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-two wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-7.jpg" alt=""/></figure>
                                <div className="lower-content p_relative d_block">
                                    <div className="share-box p_absolute">
                                        <Link href="#" className="share-icon fs_14 d_iblock"><i className="icon-37"></i></Link>
                                        <ul className="share-links p_absolute clearfix">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h3><Link href="#">Keanu Reeves</Link></h3>
                                    <span className="designation">Clarivu eye</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-btn centred mt_60">
                    <Link href="#" className="theme-btn btn-one">View All Team</Link>
                </div>
            </div>
        </section>

        </>
    )
}
