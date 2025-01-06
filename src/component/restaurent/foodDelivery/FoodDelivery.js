import React from 'react';
import './FoodDelivery.css';

export default function FoodDelivery() {
    return (
        <div className="intro-container pt-5 lg:pt-10">
            <div className="flex flex-row gap-2 md:gap-3 items-center justify-center">
                <h1 className="food-delivery-title text-2xl md:text-4xl xl:text-5xl">FOOD DELIVERY</h1>
                <h2 className="simplified text-2xl md:text-4xl xl:text-5xl">SIMPLIFIED</h2>
            </div>
            <div className='mt-2 lg:mt-5'>
                <p className="rest-description-text text-md md:text-xl lg:text-4xl mb-4 lg:mb-6">
                    WITHOUT HIRING PEOPLE AND
                    <br /> WITH
                    <span className="text-[#FF6802]"> <span style={{fontWeight:'bolder'}}>0%</span> <span>PLATEFORM FEES</span> </span>
                </p>
            </div>
            <div>
                <button className="bg-[#FF6802] text-white rounded-md px-5 py-2.5 text-xs lg:text-xl font-bold">
                    <a href="#uberDirect">
                        USING UBER DIRECT
                    </a>
                </button>
            </div>
            <div className="order-process-container mt-4 lg:mt-6 gap-4 md:gap-3 lg:gap-6 xl:gap-10">
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
