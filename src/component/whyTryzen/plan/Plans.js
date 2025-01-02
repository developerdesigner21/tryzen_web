import React from 'react';
import './Plans.css';

export default function Plans() {
    const plans = [
        {
            name: 'LITE MODE',
            description: 'Best platform with high speed and all important features to help grow your business.',
            vector: require('../../../assets/lite.png'),
            features: [
                { name: 'Unlimited Orders', vector: require('../../../assets/feature1.png') },
                { name: 'Unlimited Products', vector: require('../../../assets/feature2.png') },
                { name: 'Unlimited Stores Management', vector: require('../../../assets/feature3.png') },
                { name: 'Complete Setup with team support', vector: require('../../../assets/feature4.png') },
                { name: 'Design According to your business', vector: require('../../../assets/feature5.png') },
                { name: 'Complete Data Analytics', vector: require('../../../assets/feature6.png') },
                { name: 'Create Offer/Sales Page', vector: require('../../../assets/feature7.png') },
                { name: 'User Mobile Apps', vector: require('../../../assets/feature8.png') },
            ],
        },
        {
            name: 'GROWTH MODE',
            description: 'Here’s you Don’t to worry Branding Designs, Strategies, Banner, social media design to Grow profit',
            vector: require('../../../assets/growth.png'),
            features: [
                { name: 'Unlimited Orders', vector: require('../../../assets/feature1.png') },
                { name: 'Social Media Design 20 posts monthly', vector: require('../../../assets/feature2.png') },
                { name: 'Unlimited Banner Design', vector: require('../../../assets/feature3.png') },
                { name: 'Unlimited Offer Design Setup', vector: require('../../../assets/feature4.png') },
                { name: 'All User/Store Email Design', vector: require('../../../assets/feature5.png') },
                { name: 'Complete Data Analytics', vector: require('../../../assets/feature6.png') },
                { name: 'Create Offer/Sales Page', vector: require('../../../assets/feature7.png') },
                { name: 'User Mobile Apps', vector: require('../../../assets/feature8.png') },
            ],
        },
        {
            name: 'ZEN MODE',
            description: 'Best platform with high speed and all important features to help grow your business',
            vector: require('../../../assets/zen.png'),
            features: [
                { name: 'Unlimited Orders', vector: require('../../../assets/feature1.png') },
                { name: 'Social Media Posting Management', vector: require('../../../assets/feature2.png') },
                { name: 'Unlimited Stores Management', vector: require('../../../assets/feature3.png') },
                { name: 'Complete Setup with team support', vector: require('../../../assets/feature4.png') },
                { name: 'Email marketing and Retargeting', vector: require('../../../assets/feature5.png') },
                { name: 'Complete Data Analytics', vector: require('../../../assets/feature6.png') },
                { name: 'Create Offer/Sales Page', vector: require('../../../assets/feature7.png') },
                { name: 'User Mobile Apps', vector: require('../../../assets/feature8.png') },
            ],
        },
    ];
    return (
        <div className="plans-section">
            <h2 className='plan font-bold text-2xl lg:text-4xl md:text-3xl mb-5'>FIND THE PERFECT PLAN</h2>
            <h3 className='business-need font-semibold text-2xl md:text-5xl'>FOR YOUR BUSINESS NEEDS</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5 mt-10">
                {plans.map((plan) => (
                    <div className="plan-card border border-gray-200 p-4 xl:p-6" key={plan.name}>
                        <div className="plan-header">
                            <img src={plan.vector} alt={`${plan.name} Plan Vector`} />
                            <h3 className='text-lg font-bold'>{plan.name}</h3>
                        </div>
                        <p className='text-left font-semibold mb-5'>{plan.description}</p>
                        <ul>
                            {plan.features.map((feature) => (
                                <li className='text-sm xl:text-md' key={feature.name}>
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
