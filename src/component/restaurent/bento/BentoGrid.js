import React from 'react';
import './Bento.css';

export default function BentoGrid() {
    return (
        <>
            <div className="text-center mb-8 md:mb-10">
                <p className="our-food font-bold text-center text-lg md:text-2xl xl:text-3xl mb-1 md:mb-3">
                    OUR SERVICES
                </p>
                <h1 className="website-design text-2xl md:text-4xl lg:text-6xl">
                    Your Benifits
                </h1>
            </div>
            <div class="grid-container">
                <div class="bento-item item-1"><img src={require('../../../assets/test1.webp')} alt="Save 30% Replace Third Party" /></div>
                <div class="bento-item item-2"><img src={require('../../../assets/test2.webp')} alt="Flexible Delivery Time" /></div>
                <div class="bento-item item-3"><img src={require('../../../assets/test3.webp')} alt="Zero Fees Uber Direct" /></div>
                <div class="bento-item item-4"><img src={require('../../../assets/test4.webp')} alt="Food Ordering App" /></div>
                <div class="bento-item item-5"><img src={require('../../../assets/test5.webp')} alt="Manage Multiple Store" /></div>
                <div class="bento-item item-6"><img src={require('../../../assets/test6.webp')} alt="Responsive Website" /></div>
                <div class="bento-item item-7"><img src={require('../../../assets/test7.webp')} alt="Personal Brand" /></div>
                <div class="bento-item item-8"><img src={require('../../../assets/test8.webp')} alt="Customer Data Strategies" /></div>
            </div>
        </>
    )
}