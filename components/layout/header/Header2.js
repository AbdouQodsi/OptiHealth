'use client'
import React from 'react'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"


export default function Header2({ scroll, handleMobileMenu, handlePopup }) {
    return (
        <>

        {/* main header */}
        <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>

            <div className="header-top">
                <div className="auto-container">
                    <div className="top-inner">
                        <div className="left-column">
                            <ul className="info clearfix">
                                <li><i className="icon-1"></i>Email: <Link href="mailto:sample@example.com">Help@optiHealth.com</Link></li>
                                <li><i className="icon-2"></i>Casablanca, Morocco</li>
                                <li><i className="icon-3"></i>Call: <Link href="tel:+212698430253">+212 698 430 253</Link></li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <div className="schedule"><i className="icon-4"></i>Sun-Thu  08:00AM-05:00PM</div>
                            <ul className="social-links clearfix">
                                <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                <li><Link href="/"><i className="fab fa-pinterest-p"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-lower">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><h2>OptiHealth</h2></Link></figure>
                        </div>
                        <div className="menu-area clearfix">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="nav-right">
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one">Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><h2>OptiHealth</h2></Link></figure>
                        </div>
                        <div className="menu-area clearfix">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="nav-right">
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one">Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>
        </>
    )
}
