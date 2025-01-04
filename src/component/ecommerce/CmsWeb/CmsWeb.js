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
                    <h1 className="title text-3xl md:text-4xl lg:text-5xl xl:text-7xl"><span className='text-[#0F54FF] mr-1 md:mr-2'>C</span><span className='text-black mr-1 md:mr-2'>M</span><span className='text-[#5E8E3E]'>S</span></h1>
                </div>
                <h1 className="main-sub-title text-3xl md:text-4xl lg:text-5xl xl:text-7xl pt-5 md:pt-7 lg:pt-9">Website</h1>
            </div>
            <div className='mt-2'>
                <p className="text-md md:text-xl lg:text-4xl mb-2 md:mb-4 lg:mb-6">
                    <span className='description-text'>choose custom coded solution that</span>
                    <br />{" "}
                    <span className="bold-title">SKYROCKET YOUR SALES, PROFIT AND ROI</span>
                </p>
            </div>
            <div>
                <button className="bold-title bg-[#0F54FF] text-white rounded-full px-6 py-2.5 text-sm md:text-md lg:text-xl font-semibold">
                    <a href="#EcomBento">WITH EASY TO CHECKOUT</a>
                </button>
            </div>
            <div className="ecommerce-container mt-4 lg:mt-6 gap-4 md:gap-3 lg:gap-6 xl:gap-10">
                <div className="order-steps down mt-16">
                    <img
                        className="step-images"
                        src={require('../../../assets/ecomFashion.webp')}
                        alt="fashion"
                    />
                </div>
                <div className="order-steps up">
                    <img
                        className="step-images"
                        src={require('../../../assets/ecomAppliances.webp')}
                        alt="appliance"
                    />
                </div>

                <div className="order-steps down mt-16">
                    <img
                        className="step-images"
                        src={require('../../../assets/ecomHomedecore.webp')}
                        alt="homedecore"
                    />
                </div>

                <div className="order-steps up">
                    <img
                        className="step-images"
                        src={require('../../../assets/ecomSmartDeice.webp')}
                        alt="smartDevice"
                    />
                </div>
            </div>
        </div>
    )
}
