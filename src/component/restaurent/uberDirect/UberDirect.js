import React from 'react';
import './UberDirect.css';

export default function UberDirect() {
    return (
        <div className='flex items-center'>
            <div className="section p-4 lg:p-8 gap-5">
                <div className="section-left md:w-2/3">
                    <h3 className='uber lg:text-xl xl:text-2xl'>UBER DIRECT</h3>
                    <p className='country-names mb-4 lg:text-xl'>Is Available in Your Country?</p>
                    <ul className="countries grid grid-cols-2 gap-2 lg:gap-4">
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/mexico.png')} alt="Mexico" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />Mexico</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/spain.png')} alt="Spain" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />Spain</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/canada.png')} alt="Canada" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />Canada</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/uk.png')} alt="United Kingdom" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />United Kingdom</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/australia.png')} alt="Australia" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />Australia</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/germany.png')} alt="Germany" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />Germany</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/netherlands.png')} alt="Netherlands" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />Netherlands</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/usa.png')} alt="United States" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />United States</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/portugal.png')} alt="Portugal" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />Portugal</li>
                        <li className='text-md lg:text-lg xl:text-2xl'><img src={require('../../../assets/france.png')} alt="France" className='w-5 h-5 lg:w-7 lg:h-7 mr-1' />France</li>
                    </ul>
                </div>
                <div className="section-right">
                    <h3 className='font-bold mb-3 lg:text-xl xl:text-2xl'>CHECK LIVE DEMO TO EXPERIENCE</h3>
                    <p className='mb-3 lg:mb-5 lg:text-xl'>Branded by you, delivered with UberDirect. Offer on-demand delivery for your own website <strong className='text-[#00B67A]'>NO MARKETPLACE FEES</strong>.</p>
                    <div className='grid grid-cols-2 items-center gap-2 lg:gap-5'>
                        <div className='flex flex-col items-center justify-center bg-white p-2 md:p-4 rounded-lg'>
                            <div>
                                <img src={require('../../../assets/UberWebsite.png')} alt="QR Code Website" className='h-32 lg:h-48 check-images' />
                            </div>
                            <div className='demo-buttons w-full'>
                                <a href="https://restaurant.tryzensolution.com/" target='_balnk' className="flex items-center rounded-full gap-2 px-4 py-2 font-bold text-xs lg:text-sm">Check Website
                                    <img src={require('../../../assets/buttonArrow.png')} alt="Arrow" className='w-4 h-2 arrow-image' />
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-white p-2 md:p-4 rounded-lg'>
                            <div>
                                <img src={require('../../../assets/scanner.png')} alt="QR Code Website" className='h-32 lg:h-48 check-images' />
                            </div>
                            <div className='demo-buttons w-full'>
                                <a href="https://restaurant.tryzensolution.com/" target='_blank' className="flex items-center rounded-full gap-1 md:gap-2 px-2 md:px-4 py-2 font-bold text-xs lg:text-sm">
                                    <span className="scan-text">SCAN TO CHECK APP</span>
                                    <span className="check-app-text hidden">Check App</span>
                                    <img src={require('../../../assets/buttonArrow.png')} alt="Arrow" className='w-4 h-2 arrow-image' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
