import React, { useState } from 'react';
import './BoostSales.css';
import { Link } from 'react-router-dom';
import FreeDesignPopup from '../freeDesignPopup/FreeDesignPopup';

export default function BoostSales() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className="boost-sales-container">
            <div className="text-section">
                <h1 className="hidden sm:block redesign-main-title sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:mb-3 ">GET A <span className='text-[#FFEB3B]'>FREE </span>WEBSITE DESIGN</h1>
                <h1 className="sm:hidden redesign-main-title text-3xl font-bold">GET A <span className='text-[#FFEB3B]'>FREE </span><br />WEBSITE DESIGN</h1>
                <h2 className="redesign-sub-title text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">BOOST YOUR SALES!</h2>

                <div className="icon-row">
                    <div className="icons-item">
                        <img src={require('../../../assets/redesignIcon1.png')} alt="No Hidden Costs" className="icon" />
                        <p className='boost-content font-semibold boost-features'>NO HIDDEN COSTS</p>
                    </div>
                    <div className="icons-item">
                        <img src={require('../../../assets/redesignIcon2.png')} alt="No Commitments" className="icon" />
                        <p className='boost-content font-semibold boost-features'>NO COMMITMENTS</p>
                    </div>
                    <div className='hidden sm:block'>
                        <div className="icons-item boost-feature">
                            <img src={require('../../../assets/redesignIcon3.png')} alt="Best Results" className="icon" />
                            <p className='boost-content font-semibold boost-features'>JUST BEST RESULTS</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                    <button onClick={handleButtonClick} className="bg-[#0F54FF] flex items-center justify-center px-10 sm:px-4 text-center py-2.5 font-semibold rounded-full text-2xl sm:text-md lg:text-xl xl:text-2xl cursor-pointer button-section">
                        <div className='flex items-center boost-content'>
                            START FREE DESIGN <span className="ml-2"><img src={require('../../../assets/nextButtons.png')} className="w-8" /></span>
                        </div>
                    </button>
                    <FreeDesignPopup onClose={handlePopupClose} isPopupOpen={isPopupOpen} />
                </div>
            </div>
        </div>
    )
}
