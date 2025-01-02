import React from 'react';
import './EcomBento.css';

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
            <div class="ecomgrid-container">
                <div class="ecombento-item ecomitem-1"><img src={require('../../../assets/ecomBento1.webp')} alt="Food Ordering App" /></div>
                <div class="ecombento-item ecomitem-2"><img src={require('../../../assets/ecomBento2.webp')} alt="Flexible Delivery Time" /></div>
                <div class="ecombento-item ecomitem-3"><img src={require('../../../assets/ecomBento3.webp')} alt="Zero Fees Uber Direct" /></div>
                <div class="ecombento-item ecomitem-4"><img src={require('../../../assets/ecomBento4.webp')} alt="Manage Multiple Store" /></div>
                <div class="ecombento-item ecomitem-5"><img src={require('../../../assets/ecomBento5.webp')} alt="Responsive Website" /></div>
                <div class="ecombento-item ecomitem-6"><img src={require('../../../assets/ecomBento6.webp')} alt="Save 30% Replace Third Party" /></div>
                <div class="ecombento-item ecomitem-7"><img src={require('../../../assets/ecomBento7.webp')} alt="Customer Data Strategies" /></div>
                <div class="ecombento-item ecomitem-8"><img src={require('../../../assets/ecomBento8.webp')} alt="Customer Data Strategies" /></div>
            </div>
        </>
    )
}