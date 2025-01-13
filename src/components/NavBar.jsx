'use client'
import Link from 'next/link';
import { useEffect } from 'react';
function NavBar({ active }) {
useEffect(() => {
    document.getElementById(active)?.classList.add("active");
}, [active]);
        
    return (
        <nav className="navbar navbar-expand-lg shadow-sm sticky-top">
            <div className="container justify-content-between">
                <Link className="navbar-brand" href="/"><img src="/logo-dark.png" height={40} alt="" /></Link>
                <button className="navbar-toggler" data-bs-theme="dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link " id="home" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="shop" href="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"id="businesses" href="/business">For Businesses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="about" href="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="contact" href="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-primary" href="https://profiles.introtaps.com">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;