import React from 'react';
import './Redesign.css';
import { Link } from 'react-router-dom';

export default function Redesign() {
    return (
        <div className="home-redesign-container">
            <div className="text-section">
                <h1 className="hidden sm:block redesign-main-title sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:mb-5">GET A <span className='text-[#FFEB3B]'>FREE </span>WEBSITE DESIGN</h1>
                <h1 className="sm:hidden redesign-main-title text-3xl font-bold mb-2">GET A <span className='text-[#FFEB3B]'>FREE </span><br />WEBSITE DESIGN</h1>
                <h2 className="redesign-sub-title text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">BOOSTS YOUR SALES!</h2>

                <div className="icons-row">
                    <div className="icon-item">
                        <img src={require('../../assets/redesignIcon1.png')} alt="No Hidden Costs" className="icon" />
                        <p className='redesign-content font-semibold boost-feature'>NO HIDDEN COSTS</p>
                    </div>
                    <div className="icon-item">
                        <img src={require('../../assets/redesignIcon2.png')} alt="No Commitments" className="icon" />
                        <p className='redesign-content font-semibold boost-feature'>NO COMMITMENTS</p>
                    </div>
                    <div className='hidden sm:block'>
                        <div className="icon-item">
                            <img src={require('../../assets/redesignIcon3.png')} alt="Best Results" className="icon" />
                            <p className='redesign-content font-semibold boost-feature'>JUST BEST RESULTS</p>
                        </div>
                    </div>
                </div>
                <div className='redesign-section p-4 sm:p-6'>
                    <div className="flex flex-col sm:flex-row bg-white text-black gap-4 lg:gap-12" style={{ borderRadius: "50px" }}>
                        <div className="sm:w-1/2 mb-5 lg:pt-8 xl:pt-12 order-last sm:order-first">
                            <div className="flex items-center mb-5 lg:mb-8">
                                <img
                                    src={require('../../assets/clients.webp')}
                                    alt="Worldwide Clients"
                                    className="w-24 md:w-24 xl:w-24 rounded-full mr-2.5"
                                />
                                <div className='flex flex-col gap-1'>
                                    <p className="redesign-content text-xs font-semibold">Trusted by clients worldwide</p>
                                    <img
                                        src={require('../../assets/redesign5star.png')}
                                        alt="5 Stars"
                                        className="w-24"
                                    />
                                </div>
                            </div>

                            <ul className="list-none p-0 mb-5 lg:mb-8">
                                <li className="redesign-content check-list flex items-center text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold mb-3">
                                    <img src={require('../../assets/greenRight.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p className='font-bold'>100% FREE DESIGNS</p>
                                </li>
                                <li className="redesign-content check-list flex items-center text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <img src={require('../../assets/greenRight.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p>Designs that <strong> drive more sales</strong></p>
                                </li>
                                <li className="redesign-content check-list flex items-center text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <img src={require('../../assets/greenRight.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p><strong>Proven track record</strong> of clients</p>
                                </li>
                                <li className="redesign-content check-list flex items-center text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <img src={require('../../assets/greenRight.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p><strong>Transform Your Online Presence</strong></p>
                                </li>
                            </ul>

                            <button className="bg-[#FFEB3B] w-full flex items-center justify-center px-10 sm:px-4 text-center py-4 font-bold rounded-full text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer redesign-button">
                                <Link to="/whyTryzen" className='redesign-content flex items-center'>
                                    START FREE DESIGN <span className="ml-2"><img src={require('../../assets/nextButton.png')} className="w-9" /></span>
                                </Link>
                            </button>
                        </div>

                        <div className="sm:w-1/2 max-w-[500px] order-first sm:order-last">
                            <img
                                src={require('../../assets/redesignImage.webp')}
                                alt="Web Design"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
