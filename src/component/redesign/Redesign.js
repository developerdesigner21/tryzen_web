import React from 'react';
import './Redesign.css';
import { Link } from 'react-router-dom';

export default function Redesign() {
    return (
        // <div className="flex flex-col md:flex-row home-redesign-container px-4 py-8 md:px-4 md:py-6 md:p-6 lg:px-6 lg:py-6 xl:px-10 xl:py-10 rounded-lg gap-4 xl:gap-20">
        //     <div className="md:w-1/2 mb-5 xl:pl-10 order-last md:order-first">
        //         <div className="flex items-center mb-6">
        //             <img
        //                 src={require('../../assets/clients.webp')}
        //                 alt="Worldwide Clients"
        //                 className="w-32 md:w-32 xl:w-48 rounded-full mr-2.5"
        //             />
        //             <div className='flex flex-col gap-1'>
        //                 <p className="text-sm text-white">Trusted by clients worldwide</p>
        //                 <img
        //                     src={require('../../assets/redesign5star.png')}
        //                     alt="5 Stars"
        //                     className="w-24"
        //                 />
        //             </div>
        //         </div>

        //         <h1 className="text-2xl lg:text-3xl xl:text-4xl text-white mb-4">DESIGN YOUR WEBSITE</h1>
        //         <h2 className="text-2xl lg:text-3xl xl:text-4xl">
        //             <span className='font-semibold text-white'>THAT </span><span className='text-black font-semibold bg-[#F9ED32] inline-block p-1 mb-5 lg:mb-8'>BOOST SALES <span className='font-bold'>FREE!</span></span>
        //         </h2>

        //         <ul className="list-none p-0 mb-5 lg:mb-8">
        //             <li className="flex items-center  text-white text-xl lg:text-2xl xl:text-3xl font-semibold mb-3">
        //                 <img src={require('../../assets/redesignCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> 100% free designs
        //             </li>
        //             <li className="flex items-center  text-white text-xl lg:text-2xl xl:text-3xl mb-3">
        //                 <img src={require('../../assets/redesignCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <span>Designs</span><span className='font-semibold ml-1'>that drive more sales</span>
        //             </li>
        //             <li className="flex items-center  text-white text-xl lg:text-2xl xl:text-3xl mb-3">
        //                 <img src={require('../../assets/redesignCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <span className='font-semibold mr-1'>Proven track record</span>of clients
        //             </li>
        //             <li className="flex items-center  text-white text-xl lg:text-2xl xl:text-3xl mb-3">
        //                 <img src={require('../../assets/redesignCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <span className='font-semibold mr-1'>No hidden costs </span> or commitments
        //             </li>
        //         </ul>

        //         <button className="start-success-button px-2 xl:px-8 xl:px-12 py-3.5 font-semibold rounded-lg text-md lg:text-lg xl:text-2xl cursor-pointer">
        //             <Link to="/whyTryzen" className='flex items-center'>
        //                 START YOUR SUCCESS WITH US <span className="ml-2.5"><img src={require('../../assets/redesignButton.png')} className="w-8" /></span>
        //             </Link>
        //         </button>

        //         <ul className="list-none p-0 mt-5 flex gap-4">
        //             <li className="text-[#F9ED32] flex items-center text-lg mb-3">
        //                 <span className="mr-2.5">•</span> [Offer is Availbale for Limited Time Only]
        //             </li>
        //         </ul>
        //     </div>

        //     <div className="md:w-1/2 max-w-[500px] md:max-w-[700px]">
        //         <img
        //             src={require('../../assets/redesignImage.webp')}
        //             alt="Web Design"
        //         />
        //     </div>
        // </div>
        <div className="home-redesign-container">
            <div className="text-section">
                <h1 className="hidden sm:block redesign-main-title sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:mb-5">GET A <span className='text-[#FFEB3B]'>FREE </span>WEBSITE DESIGN</h1>
                <h1 className="sm:hidden redesign-main-title text-3xl font-bold mb-2">GET A <span className='text-[#FFEB3B]'>FREE </span><br />WEBSITE DESIGN</h1>
                <h2 className="redesign-sub-title text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">BOOSTS YOUR SALES!</h2>

                <div className="icons-row">
                    <div className="icon-item">
                        <img src={require('../../assets/redesignIcon1.png')} alt="No Hidden Costs" className="icon" />
                        <p className='font-semibold boost-feature'>NO HIDDEN COSTS</p>
                    </div>
                    <div className="icon-item">
                        <img src={require('../../assets/redesignIcon2.png')} alt="No Commitments" className="icon" />
                        <p className='font-semibold boost-feature'>NO COMMITMENTS</p>
                    </div>
                    <div className='hidden sm:block'>
                        <div className="icon-item boost-feature">
                            <img src={require('../../assets/redesignIcon3.png')} alt="Best Results" className="icon" />
                            <p className='font-semibold'>JUST BEST RESULTS</p>
                        </div>
                    </div>
                </div>
                <div className='redesign-section p-4 sm:p-6'>
                    <div className="flex flex-col sm:flex-row bg-white text-black gap-4 lg:gap-12" style={{ borderRadius: "50px" }}>
                        <div className="sm:w-1/2 mb-5 lg:pt-8 xl:pt-12">
                            <div className="flex items-center mb-5 lg:mb-8">
                                <img
                                    src={require('../../assets/clients.webp')}
                                    alt="Worldwide Clients"
                                    className="w-24 md:w-24 xl:w-24 rounded-full mr-2.5"
                                />
                                <div className='flex flex-col gap-1'>
                                    <p className="text-xs font-semibold">Trusted by clients worldwide</p>
                                    <img
                                        src={require('../../assets/redesign5star.png')}
                                        alt="5 Stars"
                                        className="w-24"
                                    />
                                </div>
                            </div>

                            <ul className="list-none p-0 mb-5 lg:mb-8">
                                <li className="check-list flex items-center text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold mb-3">
                                    <img src={require('../../assets/greenCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p className='font-bold'>100% FREE DESIGNS</p>
                                </li>
                                <li className="check-list flex items-center text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <img src={require('../../assets/greenCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p>Designs that <strong> drive more sales</strong></p>
                                </li>
                                <li className="check-list flex items-center text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <img src={require('../../assets/greenCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p><strong>Proven track record</strong> of clients</p>
                                </li>
                                <li className="check-list flex items-center text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <img src={require('../../assets/greenCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p><strong>Transform Your Online Presence</strong></p>
                                </li>
                            </ul>

                            <button className="bg-[#FFEB3B] w-full flex items-center justify-center px-10 sm:px-4 text-center py-2.5 font-semibold rounded-full text-2xl sm:text-md lg:text-xl xl:text-2xl cursor-pointer redesign-button">
                                <Link to="/whyTryzen" className='flex items-center'>
                                    START FREE DESIGN <span className="ml-2"><img src={require('../../assets/nextButton.png')} className="w-8" /></span>
                                </Link>
                            </button>
                        </div>

                        <div className="sm:w-1/2 max-w-[500px]">
                            <img
                                src={require('../../assets/redesignImage.webp')}
                                alt="Web Design"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
