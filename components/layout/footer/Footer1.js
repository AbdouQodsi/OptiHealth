'use client'
import React from 'react'
import Link from "next/link"

export default function Footer1() {
    return (
        <>
        
            <footer className="main-footer p_relative">
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="top-inner">
                            <ul className="footer-menu">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="#about">About Us</Link></li>
                            </ul>
                            <div className="footer-logo">
                                <figure className="logo"><Link href="/"><h2 className='text-white'>OptiHealth</h2></Link></figure>
                            </div>
                            <ul className="footer-menu">
                                <li><Link href="#treatments">Treatments</Link></li>
                                <li><Link href="#contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="widget-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="about-widget footer-widget mr_40">
                                    <div className="widget-title">
                                        <h2 className='text-white'>OptiHealth</h2>
                                    </div>
                                    <div className="widget-content">
                                        <p>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim ad minim.</p>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/"><i className="fab fa-vimeo-v"></i></Link></li>
                                            <li><Link href="/"><i className="fab fa-google-plus-g"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="links-widget footer-widget ml_100">
                                    <div className="widget-title">
                                        <h3>Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="#">Home</Link></li>
                                            <li><Link href="#about">About Us</Link></li>
                                            <li><Link href="#treatments">Treatments</Link></li>  
                                            <li><Link href="#contact">Contact</Link></li> 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="contact-widget footer-widget ml_50">
                                    <div className="widget-title">
                                        <h3>Contacts</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="info clearfix">
                                            <li>Casablanca, Morocco</li>
                                            <li><Link href="tel:+212698430253">+212 698 430 253</Link></li>
                                            <li><Link href="mailto:Help@optiHealth.com">Help@optiHealth.com</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright"><p><Link href="/">OptiHealth</Link> &copy; {new Date().getFullYear()} All Right Reserved</p></div>
                    </div>
                </div>
            </footer>

        </>
    )
}
