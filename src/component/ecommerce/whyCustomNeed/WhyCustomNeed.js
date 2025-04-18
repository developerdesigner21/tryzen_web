import React from 'react';
import './WhyCustomNeed.css';

export default function WhyCustomNeed() {
    return (
        <div className='flex items-center'>
            <div className="ecom-section p-4 sm:p-6 md:p-4 lg:p-6 xl:p-8 gap-5 xl:gap-0">
                <div className="ecom-section-left md:w-1/2">
                    <h3 className='why-ecom text-lg lg:text-xl xl:text-3xl mb-1 lg:mb-3'>WHY CUSTOM CODED</h3>
                    <p className='ecom-content text-md sm:text-lg lg:text-xl xl:text-2xl mb-3 md:mb-5'>Is better choice for long time</p>
                    <ul className="ecom-points ecom-content flex flex-col gap-2 lg:gap-4">
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Mexico" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />No Restrictions on Policies & Marketing</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Spain" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Seamless Operational Orders</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Canada" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Increased Brand Loyalty</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="United Kingdom" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Enhanced Customer Experience</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Australia" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Full Control on Branding</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Germany" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />No Limits on Customisation</li>
                        <li className='text-lg lg:text-xl xl:text-2xl'><img src={require('../../../assets/greenRight.png')} alt="Netherlands" className='w-5 h-5 lg:w-7 lg:h-7 mr-2' />Slow Performance Due to Plugins</li>
                    </ul>
                </div>
                <div className="ecom-section-right justify-between w-1/2">
                    <div>
                        <h3 className='ecom-content font-bold mb-2 lg:mb-4 text-xl sm:text-2xl xl:text-3xl'>Explore Demo</h3>
                        <p className='ecom-content text-sm sm:text-lg md:text-xl xl:text-2xl font-semibold mb-3'>A Faster, Smarter, and More Profitable <br /> <span className='text-[#00B67A]'>Alternative to Shopify, wordpress or wix builder. </span></p>
                    </div>
                    <div className='ecom-demo-grid grid grid-cols-2 items-center gap-2 sm:gap-5'>
                        <a href="https://ecom.tryzensolution.com/" target='_blank' >
                            <div className='flex flex-col items-center justify-center bg-white p-2 md:p-4 rounded-lg h-full small-padding'>
                                <div>
                                    <img src={require('../../../assets/ecommerceHome.webp')} alt="QR Code Website" className='ecom-check-images' />
                                </div>
                                <div className='ecom-demo-buttons w-full'>
                                    <div className="flex items-center rounded-full bg-[#038851] gap-1 sm:gap-2 px-4 py-2 font-bold text-xs lg:text-sm small-button">
                                        <span className="ecom-content xl:text-lg">DEMO WEBSITE</span>
                                        <img src={require('../../../assets/buttonArrow.png')} alt="Arrow" className='w-4 h-2 ecom-arrow-image' />
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://ecom.tryzensolution.com/" target='_blank'>
                            <div className='flex flex-col items-center justify-center bg-white p-2 md:p-4 rounded-lg h-full small-padding'>
                                <div>
                                    <img src={require('../../../assets/EcommerceScan.webp')} alt="QR Code Website" className='ecom-check-images' />
                                </div>
                                <div className='ecom-demo-buttons w-full'>
                                    <div className="flex items-center rounded-full bg-[#038851] gap-1 sm:gap-2 px-4 py-2 font-bold text-xs lg:text-sm small-button">
                                        <span className="hidden sm:flex ecom-content xl:text-lg">DEMO APPLICATION</span>
                                        <span className="sm:hidden ecom-content xl:text-lg">DEMO APP</span>
                                        <img src={require('../../../assets/buttonArrow.png')} alt="Arrow" className='w-4 h-2 ecom-arrow-image' />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
