import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div style={{ backgroundColor: "#f8f9fa" }} className='px-2 md:px-6 lg:px-10 xl:px-12'>
            <div className={`footer justify-between responsive-container`}>
                <div className='lg:flex lg:flex-row items-center'>
                    <div className="footer-left mb-2 lg:mb-0">
                        <img
                            src={require('../../assets/mainTryzenLogo.png')}
                            alt="Tryzen Solution"
                            className="footer-logo"
                        />
                    </div>
                    <div className="footer-text mb-4 sm:mb-0">
                        <p style={{ marginBottom: '4px' }}><Link to="/restaurant" className='footer-content sm:hover:text-[#FF6802]'>Food Delivery Solution</Link></p>
                        <p><Link to="/e-commerce" className='footer-content sm:hover:text-[#FF6802]'>Ecommerce Solution</Link></p>
                    </div>
                </div>

                <div className="footer-middle">
                    <p className='mb-2 footer-content'>Follow Us On</p>
                    <div className="social-icons flex">
                        <a href="https://in.linkedin.com/in/tryzen-solution-aa40ab242" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/linkedin.png')} alt="LinkedIn" />
                        </a>
                        <a href="https://instagram.com/tryzensolution" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/instagram.png')} alt="Instagram" />
                        </a>
                        <a href="https://x.com/tryzensolution" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/twitter.png')} alt="Twitter" />
                        </a>
                    </div>
                </div>
                <div className='md:flex md:flex-col lg:flex-row footer-right lg:gap-5'>
                    <div className="footer-left">
                        <button className="footer-content hidden sm:block footer-button blue mb-1 lg:mb-0">
                            <a target='_blank' href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk'>
                                Book Demo<br />Meeting Now
                            </a>
                        </button>
                        <button className="footer-content sm:hidden footer-button blue">
                            <a target='_blank' href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk'>
                                Book Demo Meeting Now
                            </a>
                        </button>
                    </div>
                    <div className="footer-text">
                        <button className="footer-content hidden sm:block footer-button orange">
                            <Link to="/whyTryzen">Free Website<br /> Design</Link>
                        </button>
                        <button className="footer-content sm:hidden footer-button orange">
                            <Link to="/whyTryzen">Free Website Design</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
