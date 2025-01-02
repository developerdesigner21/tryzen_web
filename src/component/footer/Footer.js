import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer container mx-auto justify-between">
            <div className='md:flex md:flex-col lg:flex-row'>
                <div className="footer-left mb-2">
                    <img
                        src={require('../../assets/mainlogo.png')}
                        alt="Tryzen Solution"
                        className="footer-logo"
                    />
                </div>
                <div className="footer-text">
                    <p>Zero-Commission Delivery</p>
                    <p>Restaurant Website Development</p>
                </div>
            </div>
            <div className="footer-middle">
                <p className='mb-2'>Follow Us On</p>
                <div className="social-icons flex">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../assets/linkedin.png')} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../assets/instagram.png')} alt="Instagram" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../assets/twitter.png')} alt="Twitter" />
                    </a>
                </div>
            </div>
            <div className='md:flex md:flex-col lg:flex-row footer-right lg:gap-5'>
                <div className="footer-left mb-2">
                    <button className="footer-button blue">Book Demo<br />Meeting Now</button>
                </div>
                <div className="footer-text">
                <button className="footer-button orange">Free Restaurant<br /> Website Design</button>
                </div>
            </div>
        </div>
    )
}
