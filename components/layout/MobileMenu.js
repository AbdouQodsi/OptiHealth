'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({  handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="close-btn" onClick={handleMobileMenu}><span className="fas fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><h2 className="text-white">OptiHealth</h2></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#about">About Us</Link></li>
                                <li><Link href="#treatments">Treatments</Link></li>  
                                <li><Link href="#contact">Contact</Link></li> 
                            </ul>
                        </div>

                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Casablanca, Morocco</li>
                            <li><Link href="tel:+212698430253">+212 698 430 253</Link></li>
                            <li><Link href="mailto:Help@optiHealth.com">Help@optiHealth.com</Link></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    )
}
