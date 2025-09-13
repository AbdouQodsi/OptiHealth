'use client'
import React from 'react'
import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#treatments">Treatments</Link></li>  
                <li><Link href="#contact">Contact</Link></li> 
            </ul>
        </>
    )
}
