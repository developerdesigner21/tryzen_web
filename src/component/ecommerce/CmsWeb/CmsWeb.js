import React from 'react';
import './CmsWeb.css';

export default function CmsWeb() {
    const handleScrollToBento = (event) => {
        event.preventDefault();
        const targetSection = document.getElementById('EcomBento');
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
        <div className="intro-container mt-5 md:mt-8">
            <div className="flex flex-row gap-2 lg:gap-3 items-center justify-center full-title-gap">
                <h1 className="main-sub-title text-3xl md:text-4xl lg:text-5xl xl:text-6xltext-2xl md:text-4xl lg:text-5xl pt-5 md:pt-7 lg:pt-9">GO BEYOND</h1>
                <div className='flex flex-col'>
                    <div class="logos flex flex-row xl:gap-3">
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] xl:h-10' src={require('../../../assets/wordpress.png')} alt="WordPress Logo" />
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] xl:h-10' src={require('../../../assets/wix.png')} alt="Wix Logo" />
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] xl:h-10' src={require('../../../assets/shopify.png')} alt="Shopify Logo" />
                    </div>
                    <h1 className="cms-title text-2xl md:text-4xl lg:text-5xl"><span className='text-[#0f8cc3] mr-1 md:mr-2'>C</span><span className='text-black mr-1 md:mr-2'>M</span><span className='text-[#5E8E3E]'>S</span></h1>
                </div>
                <h1 className="main-sub-title text-2xl md:text-4xl lg:text-5xl pt-5 md:pt-7 lg:pt-9">THEME</h1>
            </div>
            <div className='mt-2'>
                <p className="ecom-description-text md:text-2xl lg:text-3xl mb-3 md:mb-5">
                    CHOOSE CUSTOM CODED SOLUTION
                    <br />{" "}
                    TO <span className='text-[#0051F2]'>SKYROCKET YOUR SALES!</span>
                </p>
            </div>
            <div>
                <button onClick={handleScrollToBento} className="bold-title bg-[#0F54FF] text-white rounded-md px-6 py-2.5 text-sm md:text-md lg:text-xl font-semibold">
                    WITH EASY TO CHECKOUT
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
