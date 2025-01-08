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
            <div className="flex items-center justify-center">
                <h1 className="main-sub-title text-2xl md:text-4xl lg:text-5xl pt-[20px] md:pt-[30px] lg:pt-[40px] xl:pt-[45px] mr-1 lg:mr-2">GO BEYOND </h1>
                <div className='flex'>
                    <div className="flex flex-col items-center">
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] h-[15px] md:h-[25px] lg:h-[35px] xl:h-[40px]' src={require('../../../assets/wordpress.png')} alt="WordPress Logo" />
                        <h1 className="cms-title text-2xl md:text-4xl lg:text-5xl"><span className='text-[#0f8cc3] mr-1 md:mr-2'>C</span></h1>
                    </div>
                    <div className="flex flex-col items-center ml-1">
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] h-[15px] md:h-[25px] lg:h-[35px] xl:h-[40px]' src={require('../../../assets/wix.png')} alt="Wix Logo" />
                        <h1 className="cms-title text-2xl md:text-4xl lg:text-5xl"><span className='text-black'>M</span></h1>
                    </div>
                    <div className="flex flex-col items-center ml-1">
                        <img className='w-[15px] md:w-[25px] lg:w-[35px] xl:w-[40px] h-[15px] md:h-[25px] lg:h-[35px] xl:h-[40px]' src={require('../../../assets/shopify.png')} alt="Shopify Logo" />
                        <h1 className="cms-title text-2xl md:text-4xl lg:text-5xl"><span className='text-[#5E8E3E] mr-1'>S</span></h1>
                    </div>
                </div>
                <h1 className="main-sub-title text-2xl md:text-4xl lg:text-5xl pt-[20px] md:pt-[30px] lg:pt-[40px] xl:pt-[45px] ml-1 lg:ml-2"> THEME</h1>
            </div>
            <div className='mt-2'>
                <p className="ecom-description-text md:text-2xl lg:text-3xl mb-2 md:mb-3">
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
            <div className="ecommerce-container mt-5 md:mt-10 gap-4 md:gap-3 lg:gap-6 xl:gap-10">
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
