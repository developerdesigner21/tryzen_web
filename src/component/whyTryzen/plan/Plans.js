import React, { useState } from 'react';
import './Plans.css';
import FreeDesignPopup from '../freeDesignPopup/FreeDesignPopup';

export default function Plans() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const plans = [
        {
            name: 'LITE MODE',
            description: 'Best platform with high speed and all important feature that helps you to Grow your business.',
            vector: require('../../../assets/lite.png'),
            features: [
                { name: 'Unlimited Orders', vector: require('../../../assets/lite1.png') },
                { name: 'Unlimited Product', vector: require('../../../assets/lite2.png') },
                { name: 'Unlimited Stores Management', vector: require('../../../assets/lite3.png') },
                { name: 'Complete Setup And Support', vector: require('../../../assets/lite4.png') },
                { name: 'Design For Your Business', vector: require('../../../assets/lite5.png') },
                { name: 'Complete Data Analytics', vector: require('../../../assets/lite6.png') },
                { name: 'Share Offer/Sales Page Design', vector: require('../../../assets/lite7.png') },
                { name: 'User Mobile Apps', vector: require('../../../assets/lite8.png') },
            ],
        },
        {
            name: 'GROWTH MODE',
            description: 'Here you Don’t need to worry for Branding, Designs, Strategies, Social media to Grow profit.',
            vector: require('../../../assets/growth.png'),
            features: [
                { name: 'Store Quality Check And Tracking', vector: require('../../../assets/growth1.png') },
                { name: '20+ Social Media Posts Designed ', vector: require('../../../assets/growth2.png') },
                { name: 'Unlimited Website Banner Design', vector: require('../../../assets/growth3.png') },
                { name: 'Website Design change Help', vector: require('../../../assets/growth4.png') },
                { name: 'Email Design Campaigns', vector: require('../../../assets/growth5.png') },
                { name: 'Social Media Strategy', vector: require('../../../assets/growth6.png') },
                { name: 'Set Weekly Success Goal', vector: require('../../../assets/growth7.png') },
                { name: 'Unlimited Offer/Sales Page', vector: require('../../../assets/growth8.png') },
            ],
        },
        {
            name: 'ZEN MODE',
            description: 'The ultimate solution you Don’t need to worry about Marketing, design and seo we will do it.',
            vector: require('../../../assets/zen.png'),
            features: [
                { name: 'Complete Advanced Automation', vector: require('../../../assets/zen1.webp') },
                { name: 'Social Media Management', vector: require('../../../assets/zen2.webp') },
                { name: 'AD’s Management (Google, FB)', vector: require('../../../assets/zen3.webp') },
                { name: 'Content Management', vector: require('../../../assets/zen4.webp') },
                { name: 'Email Marketing & Retargeting', vector: require('../../../assets/zen5.webp') },
                { name: 'Advanced Analytics And Insights', vector: require('../../../assets/zen6.webp') },
                { name: 'Dedicated Manager For Any Help', vector: require('../../../assets/zen7.webp') },
                { name: 'Optimisation For Your Brand', vector: require('../../../assets/zen8.webp') },
            ],
        },
    ];
    return (
        <div className="plans-section">
            <div className='mb-8 md:mb-10'>
                <h2 className='plan font-bold text-md md:text-2xl xl:text-3xl mb-1 md:mb-2'>FIND THE PERFECT PLAN</h2>
                <h3 className='business-need font-semibold text-2xl md:text-4xl lg:text-6xl'>For Your Buisness Needs</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-12">
                {plans.map((plan) => (
                    <div className="plan-card border border-gray-200 p-4 xl:p-6" key={plan.name}>
                        <div className="plan-header">
                            <img src={plan.vector} alt={`${plan.name} Plan Vector`} />
                            <h3 className='plan-content text-lg font-bold'>{plan.name}</h3>
                        </div>
                        <p className='plan-content text-left font-semibold mb-5 text-xl'>{plan.description}</p>
                        <ul>
                            {plan.features.map((feature) => (
                                <li className='plan-content li-feature text-sm xl:text-lg text-left flex items-center' key={feature.name}>
                                    <img className='li-feature img' src={feature.vector} alt={`${feature.name} Vector`} />
                                    {feature.name}
                                </li>
                            ))}
                        </ul>
                        <div className='flex justify-left mt-5'>
                            <button onClick={handleButtonClick} className='plan-content bg-black px-6 py-2 rounded-full text-white'>GET A QUOTE</button>
                            <FreeDesignPopup onClose={handlePopupClose} isPopupOpen={isPopupOpen} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
