import React from 'react';
import './CmsWeb.css';

export default function CmsWeb() {
    return (
        <div className="intro-container mt-5 md:mt-8">
            <div className="flex flex-row gap-2 lg:gap-3 items-center justify-center">
                <h1 className="main-sub-title text-3xl md:text-4xl lg:text-5xl xl:text-7xl pt-5 md:pt-7 lg:pt-9">Go Beyond</h1>
                <div className='flex flex-col'>
                    <div class="logos flex flex-row xl:gap-3">
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] xl:h-10' src={require('../../../assets/wordpress.png')} alt="WordPress Logo" />
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] xl:h-10' src={require('../../../assets/wix.png')} alt="Wix Logo" />
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] xl:h-10' src={require('../../../assets/shopify.png')} alt="Shopify Logo" />
                    </div>
                    <h1 className="title text-3xl md:text-4xl lg:text-5xl xl:text-7xl"><span className='text-[#0488C2] mr-1 md:mr-2'>C</span><span className='text-black mr-1 md:mr-2'>M</span><span className='text-[#5E8E3E]'>S</span></h1>
                </div>
                <h1 className="main-sub-title text-3xl md:text-4xl lg:text-5xl xl:text-7xl pt-5 md:pt-7 lg:pt-9">Website</h1>
            </div>
            <div className='mt-2'>
                <p className="description-text text-md md:text-xl lg:text-4xl mb-2 md:mb-4 lg:mb-8">
                    choose custom coded solution that
                    <br />{" "}
                    <span className="font-extrabold text-[#0051F2]">skyrocket Your sales, Profit and ROI</span>
                </p>
            </div>
            <div>
                <button className="bg-black text-white rounded-full px-5 py-2.5 text-sm md:text-md lg:text-xl font-semibold">BOOK DEMO</button>
            </div>
            <div className="ecommerce-container mt-4 lg:mt-6 gap-4 md:gap-3 lg:gap-6 xl:gap-10">
                <div className="order-steps down mt-16">
                    <img
                        className="step-images"
                        src={require('../../../assets/fashion.png')}
                        alt="fashion"
                    />
                </div>
                <div className="order-steps up">
                    <img
                        className="step-images"
                        src={require('../../../assets/appliance.png')}
                        alt="appliance"
                    />
                </div>

                <div className="order-steps down mt-16">
                    <img
                        className="step-images"
                        src={require('../../../assets/homedecore.png')}
                        alt="homedecore"
                    />
                </div>

                <div className="order-steps up">
                    <img
                        className="step-images"
                        src={require('../../../assets/smartDevice.png')}
                        alt="smartDevice"
                    />
                </div>
            </div>
        </div>
    )
}
