'use client'
import Link from 'next/link';
import Bi from "../functions/Icons";
import Bif from "../functions/IconFlled";
import React from "react";

const FooterLink = React.memo(({ href, icon, children, external }) => (
    <li>
        <Bif i={icon} s="text-green" />
        {external ? (
            <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
        ) : (
            <Link href={href}>{children}</Link>
        )}
    </li>
));

const FooterSection = React.memo(({ title, links }) => (
    <div className="col-lg-4">
        <h5>{title}</h5>
        <hr className="text-green border-4 rounded opacity-100" style={{ width: '20%' }} />
        <ul className="footer-lists">
            {links.map((link, index) => (
                <FooterLink key={index} {...link} />
            ))}
        </ul>
    </div>
));

function Footer() {
    const quickLinks = [
        { href: "/shipping-policy", icon: "caret-right", children: "Home" },
        { href: "/blog", icon: "caret-right", children: "Products" },
        { href: "/affiliates", icon: "caret-right", children: "Your Dashboard" },
        { href: "/notable-clients", icon: "caret-right", children: "About Us" },
        { href: "/privacy-policy", icon: "caret-right", children: "Contact" },
        { href: "/terms-and-conditions", icon: "caret-right", children: "FAQs" },
        { href: "/site-map", icon: "caret-right", children: "Partnership Request" },
    ];

    const companyLinks = [
        { href: "/shipping-policy", icon: "caret-right", children: "Shipping Policy" },
        { href: "https://introtaps.com/blogs", icon: "caret-right", children: "Blog", external: true },
        { href: "/affiliates", icon: "caret-right", children: "Affiliates" },
        { href: "/notable-clients", icon: "caret-right", children: "Notable Clients" },
        { href: "/privacy-policy", icon: "caret-right", children: "Privacy Policy" },
        { href: "/terms-and-conditions", icon: "caret-right", children: "Terms and Conditions" },
        { href: "/site-map", icon: "caret-right", children: "SiteMap" },
    ];

    const socialLinks = [
        { href: "https://instagram.com/introtaps", icon: "instagram" },
        { href: "https://facebook.com/introtaps", icon: "facebook" },
        { href: "https://linkedin.com/company/introtaps", icon: "linkedin" },
    ];

    return (
        <footer className="footer ">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <img src="/logo-dark.png" alt="" height={50} />
                        <p>Pioneering World's Premier NFC Brand With Global Quality Standards</p>
                        <ul className="footer-lists">
                            <FooterLink href="#" icon="geo-alt" children="MM Alam Road, Multan" />
                            <FooterLink href="mailto:info@introtaps.com" icon="envelope-at" children="info@introtaps.com" external />
                            <FooterLink href="tel:+923126919489" icon="telephone" children="+92 312 6919489" external />
                        </ul>
                        <img src="/appicons.png" height={70} alt="" />
                    </div>
                    <FooterSection title="Quick Links" links={quickLinks} />
                    <FooterSection title="Company" links={companyLinks} />
                </div>
                <div className="row mt-5 align-items-center d-flex justify-content-between">
                    <div className="col col-sm-8 ">
                        <h1 className="heading-bold-1">
                            Order Your Card <b className="text-green">Today.</b>
                        </h1>
                        <Link href="shop" className="btn btn-lg btn-primary">Get Started</Link>
                    </div>
                    <div className="col-sm-4">
                        <div className="row ">
                            <div className="col text-center mt-3"> 
                                {socialLinks.map((link, index) => (
                                    <Link key={index} href={link.href} target="_blank">
                                        <Bi i={link.icon} s={`heading-bold-1 ${index > 0 ? 'ms-5' : ''} text-green`} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="line-seperator mt-5" />
                <div className="row align-items-center justify-content-between">
                    <div className="col text-white-50 text-center">2024 &copy; All Rights Reserved | A Project of IntroTaps Technologies &reg;</div>
                </div>
               
            </div>
        </footer>
    );
}

export default React.memo(Footer);