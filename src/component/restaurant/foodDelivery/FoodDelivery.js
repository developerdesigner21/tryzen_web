import React from 'react';
import './FoodDelivery.css';

export default function FoodDelivery() {

    const handleScrollToUberDirect = (event) => {
        event.preventDefault();
        const targetSection = document.getElementById('uberDirect');
        const offset = 100;

        if (targetSection) {
            const targetPosition = targetSection.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="intro-container pt-8 lg:pt-16">
            <div className="flex flex-row gap-2 md:gap-3 items-center justify-center">
                <h1 className="food-delivery-title text-2xl md:text-4xl lg:text-5xl">FOOD DELIVERY</h1>
                <h1 className="simplified text-2xl md:text-4xl lg:text-5xl">SIMPLIFIED</h1>
            </div>
            <div className='mt-2 lg:mt-3'>
                <h1 className="rest-description-text t md:text-2xl lg:text-4xl mb-2 md:mb-3">
                    WITHOUT HIRING PEOPLE AND
                    <br /> WITH
                    <span className="text-[#FF6802]"> <span style={{fontWeight:900}}>0%</span> <span>PLATEFORM FEES</span> </span>
                </h1>
            </div>
            <div>
                <button onClick={handleScrollToUberDirect} className="save-fees-button bg-[#FF6802] text-white rounded-md px-6 py-2.5 text-sm md:text-md lg:text-xl font-semibold">
                    SAVE PLATEFORM FEES
                </button>
            </div>
            <div className="order-process-container mt-5 lg:mt-10 gap-4 md:gap-3 lg:gap-6 xl:gap-10">
                <div className="order-step down mt-10 md:mt-16">
                    <img
                        className="step-image"
                        src={require('../../../assets/resStep-1.gif')}
                        alt="Step 1"
                    />
                </div>
                <div className="order-step up">
                    <img
                        className="step-image"
                        src={require('../../../assets/resStep-2.gif')}
                        alt="Step 2"
                    />
                </div>

                <div className="order-step down mt-10 md:mt-16">
                    <img
                        className="step-image"
                        src={require('../../../assets/resStep-3.gif')}
                        alt="Step 3"
                    />
                </div>

                <div className="order-step up">
                    <img
                        className="step-image"
                        src={require('../../../assets/resStep-4.gif')}
                        alt="Step 4"
                    />
                </div>
            </div>
        </div>
    )
}
