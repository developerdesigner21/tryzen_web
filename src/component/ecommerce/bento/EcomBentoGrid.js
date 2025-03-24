import React from 'react';
import './EcomBento.css';

export default function BentoGrid() {
    return (
        <>
            <div id="EcomBento" className="text-center mb-8 md:mb-10">
                <p className="bento-title text-[#0F54FF] font-bold text-center text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">
                    OUR SERVICES
                </p>
                <h1 className="website-design text-2xl md:text-4xl lg:text-6xl">
                    Your Benifits
                </h1>
            </div>
            <div class="ecomgrid-container">
                <div class="ecombento-item ecomitem-1"><img src={require('../../../assets/ecomGrid1.webp')} alt="Food Ordering App" /></div>
                <div class="ecombento-item ecomitem-2"><img src={require('../../../assets/ecomGrid2.webp')} alt="Flexible Delivery Time" /></div>
                <div class="ecombento-item ecomitem-3"><img src={require('../../../assets/ecomGrid3.webp')} alt="Zero Fees Uber Direct" /></div>
                <div class="ecombento-item ecomitem-4"><img src={require('../../../assets/ecomGrid4.webp')} alt="Manage Multiple Store" /></div>
                <div class="ecombento-item ecomitem-5"><img src={require('../../../assets/ecomGrid5.webp')} alt="Responsive Website" /></div>
                <div class="ecombento-item ecomitem-6"><img src={require('../../../assets/ecomGrid6.webp')} alt="Save 30% Replace Third Party" /></div>
                <div class="ecombento-item ecomitem-7"><img src={require('../../../assets/ecomGrid7.webp')} alt="Customer Data Strategies" /></div>
                <div class="ecombento-item ecomitem-8"><img src={require('../../../assets/ecomGrid8.png')} alt="Customer Data Strategies" /></div>
            </div>
        </>
    )
}