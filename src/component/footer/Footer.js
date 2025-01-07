import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1800);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ backgroundColor: "#f8f9fa" }}>
            <div className={`footer justify-between ${isWideScreen ? 'responsive-container' : ''}`}>
                <div className='lg:flex lg:flex-row items-center'>
                    <div className="footer-left mb-2 lg:mb-0">
                        <img
                            src={require('../../assets/mainTryzenLogo.png')}
                            alt="Tryzen Solution"
                            className="footer-logo"
                        />
                    </div>
                    <div className="footer-text mb-4 sm:mb-0">
                        <p style={{ marginBottom: '4px' }}><Link to="/restaurent" className='hover:text-[#FF6802]'>Food Delivery Solution</Link></p>
                        <p><Link to="/e-commerce" className='hover:text-[#FF6802]'>Ecommerce Website Development</Link></p>
                    </div>
                </div>

                <div className="footer-middle">
                    <p className='mb-2'>Follow Us On</p>
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
                        <button className="hidden sm:block footer-button blue mb-1 lg:mb-0">
                            <a target='_blank' href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk'>
                                Book Demo<br />Meeting Now
                            </a>
                        </button>
                        <button className="sm:hidden footer-button blue">
                            <a target='_blank' href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk'>
                                Book Demo Meeting Now
                            </a>
                        </button>
                    </div>
                    <div className="footer-text">
                        <button className="hidden sm:block footer-button orange">
                            <Link to="/whyTryzen">Free Website<br /> Design</Link>
                        </button>
                        <button className="sm:hidden footer-button orange">
                            <Link to="/whyTryzen">Free Website Design</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
