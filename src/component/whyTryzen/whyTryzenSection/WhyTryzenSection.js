import React from 'react';
import './WhyTryzenSection.css';

export default function WhyTryzenSection() {
    return (
        <div className='flex items-center'>
            <div className="section-why p-4 sm:p-6 md:p-4 lg:p-6 xl:p-8 gap-5 xl:gap-0">
                <div className="section-why-left md:w-2/3">
                    <h3 className='uber-why text-lg lg:text-xl xl:text-3xl mb-1 lg:mb-3'>WHY TRYZEN SOLUTION</h3>
                    <ul className="countries-why uber-content-why flex flex-col gap-2 lg:gap-4 xl:gap-6">
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Mexico" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Ready to deliver immediate results.</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Spain" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Flexibility with NO long-term contracts</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Canada" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Custom strategies to grow your business.</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="United Kingdom" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Weekly updates without follow-up.</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Australia" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Designs that convert visiter to buyer</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Germany" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Launch services in 10 Days</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Netherlands" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />100 Days guaranteed Results </li>
                    </ul>
                </div>
                <div className="section-why-right justify-between">
                    <div>
                        <h3 className='uber-content-why font-bold mb-2 lg:mb-4 text-xl sm:text-2xl xl:text-3xl'>Explore Demo</h3>
                        <p className='uber-content-why text-sm sm:text-lg md:text-xl xl:text-2xl font-semibold mb-3'>Stop Paying Commissions and Build Own <br/> Custom Solution with<span className='text-[#FF6802]'> Designed to grow Sales!</span>.</p>
                    </div>
                    <div className='demo-grid grid grid-cols-2 items-center gap-2 sm:gap-5'>
                        <a href="https://codmarket.co.ke/" target='_blank' className='flex flex-col items-center justify-center bg-white p-2 md:p-4 rounded-lg'>
                            <div>
                                <h1 className='uber-why text-[#0F54FF] text-center mb-4 text-lg sm:text-xl'>ECOMMERCE</h1>
                                <img src={require('../../../assets/ecommerceHome.webp')} alt="QR Code Website" className='check-images-why' />
                            </div>
                            <div className='demo-buttons-why w-full'>
                                <div className="flex items-center rounded-full bg-[#0F54FF] gap-2 px-4 py-2 font-bold text-xs lg:text-sm">
                                    <span className="uber-content-why xl:text-lg">CHECK WEBSITE</span>
                                    <img src={require('../../../assets/buttonArrow.png')} alt="Arrow" className='w-4 h-2 arrow-image-why' />
                                </div>
                            </div>
                        </a>
                        <a href="https://restaurant.tryzensolution.com/" target='_blank' className='flex flex-col items-center justify-center bg-white p-2 md:p-4 rounded-lg'>
                            <div>
                                <h1 className='uber-why text-[#EA2C26] text-center text-lg sm:text-xl'>RESTAURANT</h1>
                                <img src={require('../../../assets/restaurentHome.webp')} alt="QR Code Website" className='check-images-why' />
                            </div>
                            <div className='demo-buttons-why w-full'>
                                <div className="flex items-center rounded-full bg-[#EA2C26] gap-2 px-4 py-2 font-bold text-xs lg:text-sm">
                                    <span className="uber-content-why xl:text-lg">CHECK WEBSITE</span>
                                    <img src={require('../../../assets/buttonArrow.png')} alt="Arrow" className='w-4 h-2 arrow-image-why' />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
