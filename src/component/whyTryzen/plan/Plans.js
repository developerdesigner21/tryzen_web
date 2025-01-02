import React from 'react';
import './Plans.css';

export default function Plans() {
    const plans = [
        {
            name: 'LITE MODE',
            description: 'Best platform with high speed and all important features to help grow your business.',
            vector: require('../../../assets/lite.png'),
            features: [
                { name: 'Unlimited Orders', vector: require('../../../assets/lite1.png') },
                { name: 'Unlimited Products', vector: require('../../../assets/lite2.png') },
                { name: 'Unlimited Stores Management', vector: require('../../../assets/lite3.png') },
                { name: 'Complete Setup with team support', vector: require('../../../assets/lite4.png') },
                { name: 'Design According to your business', vector: require('../../../assets/lite5.png') },
                { name: 'Complete Data Analytics', vector: require('../../../assets/lite6.png') },
                { name: 'Share how to create Offer/Sales Page', vector: require('../../../assets/lite7.png') },
                { name: 'User Mobile Apps', vector: require('../../../assets/lite8.png') },
            ],
        },
        {
            name: 'GROWTH MODE',
            description: 'Here’s you Don’t to worry Branding Designs, Strategies, Banner, social media design to Grow profit',
            vector: require('../../../assets/growth.png'),
            features: [
                { name: 'Store quality check and tracking', vector: require('../../../assets/growth1.png') },
                { name: '20+ Social Media Posts Designed ', vector: require('../../../assets/growth2.png') },
                { name: 'Unlimited Website Banner Design', vector: require('../../../assets/growth3.png') },
                { name: 'Website Design change Help', vector: require('../../../assets/growth4.png') },
                { name: 'Email for Campaigns & Promotions', vector: require('../../../assets/growth5.png') },
                { name: 'Social Media Strategy', vector: require('../../../assets/growth6.png') },
                { name: '10Days Meeting to set Success Goal', vector: require('../../../assets/growth7.png') },
                { name: 'Unlimited Offer/Sales Page', vector: require('../../../assets/growth8.png') },
            ],
        },
        {
            name: 'ZEN MODE',
            description: 'Best platform with high speed and all important features to help grow your business',
            vector: require('../../../assets/zen.png'),
            features: [
                { name: 'Complete automation and advanced', vector: require('../../../assets/zen1.webp') },
                { name: 'Social Media Posting and Management', vector: require('../../../assets/zen2.webp') },
                { name: 'AD’s management (Google, FB, INSTS)', vector: require('../../../assets/zen3.webp') },
                { name: 'Content Management', vector: require('../../../assets/zen4.webp') },
                { name: 'Email marketing & Retargeting Campaign ', vector: require('../../../assets/zen5.webp') },
                { name: 'Advanced Analytics and Insights', vector: require('../../../assets/zen6.webp') },
                { name: 'Dedicated Manager for Quick Resolution', vector: require('../../../assets/zen7.webp') },
                { name: 'Optimisation for Your Brand', vector: require('../../../assets/zen8.webp') },
            ],
        },
    ];
    return (
        <div className="plans-section">
            <h2 className='plan font-bold text-2xl lg:text-4xl md:text-3xl mb-5'>FIND THE PERFECT PLAN</h2>
            <h3 className='business-need font-semibold text-2xl md:text-5xl'>FOR YOUR BUSINESS NEEDS</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-12 mt-10">
                {plans.map((plan) => (
                    <div className="plan-card border border-gray-200 p-4 xl:p-6" key={plan.name}>
                        <div className="plan-header">
                            <img src={plan.vector} alt={`${plan.name} Plan Vector`} />
                            <h3 className='text-lg font-bold'>{plan.name}</h3>
                        </div>
                        <p className='text-left font-semibold mb-5 text-xl'>{plan.description}</p>
                        <ul>
                            {plan.features.map((feature) => (
                                <li className='text-sm xl:text-lg text-left flex items-center' key={feature.name}>
                                    <img src={feature.vector} alt={`${feature.name} Vector`} />
                                    {feature.name}
                                </li>
                            ))}
                        </ul>
                        <div className='flex justify-left mt-5'>
                            <button className='bg-black px-6 py-2 rounded-full text-white'>GET A QUOTE</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
