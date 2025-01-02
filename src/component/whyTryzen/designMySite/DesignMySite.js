import React, { useState } from 'react';
import './DesignMySite.css';
import FreeDesignPopup from '../freeDesignPopup/FreeDesignPopup';

export default function DesignMySite() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="intro-container pt-5 lg:pt-8">
            <div className="flex flex-col gap-2 sm:gap-3 items-center justify-center mb-3 sm:mb-5 lg:mb-8">
                <h1 className="text-sm md:text-xl xl:text-2xl font-bold">QUALITY DESIGN THAT</h1>
                <h2 className="text-xl md:text-4xl xl:text-5xl convert-title">
                    <p className='md:mb-1 xl:mb-2'>Focus on Convert</p>
                    <p className='md:mb-1 xl:mb-2'>Visitors to Buyers!</p>
                    <span className='ecom-title'>Ecommerce</span> OR <span className='rest-title'>Restaurant</span>
                </h2>
            </div>
            <div className='mb-3 md:mb-6'>
                <button onClick={handleButtonClick} className="bg-black text-white rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-lg lg:text-2xl font-bold">DESIGN MY SITE FOR FREE!</button>
                {isPopupOpen && <FreeDesignPopup onClose={handlePopupClose} />}
            </div>
            <div className="flex items-center justify-center">
                <img
                    src={require('../../../assets/redesignClients.png')}
                    alt="Worldwide Clients"
                    className="w-24 md:w-24 xl:w-40 rounded-full mr-2.5"
                />
                <div className='flex flex-col gap-1'>
                    <p className="text-xs text-black font-semibold">Trusted by clients worldwide</p>
                    <img
                        src={require('../../../assets/redesign5star.png')}
                        alt="5 Stars"
                        className="w-24"
                    />
                </div>
            </div>
            <div className="design-process-container mt-4 lg:mt-6 gap-4 sm:gap-3 lg:gap-6 xl:gap-10">
                <div className="design-step up">
                    <img
                        className="design-image"
                        src={require('../../../assets/whyFinal1.webp')}
                        alt="Step 1"
                    />
                </div>

                <div className="design-step down mt-10 md:mt-20">
                    <img
                        className="design-image"
                        src={require('../../../assets/whyFinal2.webp')}
                        alt="Step 2"
                    />
                </div>

                <div className="design-step down mt-10 md:mt-20">
                    <img
                        className="design-image"
                        src={require('../../../assets/whyFinal3.webp')}
                        alt="Step 3"
                    />
                </div>

                <div className="design-step up">
                    <img
                        className="design-image"
                        src={require('../../../assets/whyFinal4.webp')}
                        alt="Step 4"
                    />
                </div>
            </div>
        </div>
    )
}
