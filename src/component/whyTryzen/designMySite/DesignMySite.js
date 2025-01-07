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
        <div className="intro-container pt-8 lg:pt-16">
            <div className="flex flex-col gap-2 sm:gap-3 items-center justify-center">
                <h2 className="convert-title">
                    <p className='text-2xl md:text-4xl lg:text-5xl md:mb-2 xl:mb-3'>VISITORS <span className='into-buyers'>INTO BUYERS</span></p>
                    <p className='md:text-2xl lg:text-4xl mb-2 md:mb-3'>
                        FOR YOUR <span className='text-[#0F54FF]'>ECOMMERCE</span> OR <br />
                        <span className='text-[#FF6802]'>RESTAURANT</span> BUISNESS!
                    </p>                
                </h2>
            </div>
            <div className='mb-5 md:mb-10'>
                <button onClick={handleButtonClick} className="easy-checkout-button bg-black text-white rounded-md px-6 py-2.5 text-sm md:text-md lg:text-xl font-semibold">DESIGN MY SITE FOR FREE!</button>
                <FreeDesignPopup onClose={handlePopupClose} isPopupOpen={isPopupOpen} />
            </div>
            <div className="flex items-center justify-center">
                <img
                    src={require('../../../assets/Ourclients.png')}
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
                        src={require('../../../assets/why1.webp')}
                        alt="Step 1"
                    />
                </div>

                <div className="design-step down mt-10 md:mt-20">
                    <img
                        className="design-image"
                        src={require('../../../assets/why2.webp')}
                        alt="Step 2"
                    />
                </div>

                <div className="design-step down mt-10 md:mt-20">
                    <img
                        className="design-image"
                        src={require('../../../assets/why3.webp')}
                        alt="Step 3"
                    />
                </div>

                <div className="design-step up">
                    <img
                        className="design-image"
                        src={require('../../../assets/why4.webp')}
                        alt="Step 4"
                    />
                </div>
            </div>
        </div>
    )
}
