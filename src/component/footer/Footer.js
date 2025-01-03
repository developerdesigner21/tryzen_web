import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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
                    <p style={{marginBottom:'4px'}}><Link to="/restaurent" className='hover:text-blue-400'>Restaurant Zero % Commission</Link></p>
                    <p><Link to="/e-commerce"  className='hover:text-blue-400'>Ecommerce Website Development</Link></p>
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
                    <button className="footer-button blue">
                        <a target='_blank' href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk'>
                            Book Demo<br />Meeting Now
                        </a>
                    </button>
                </div>
                <div className="footer-text">
                    <button className="footer-button orange">Free Restaurant<br /> Website Design</button>
                </div>
            </div>
        </div>
    )
}
