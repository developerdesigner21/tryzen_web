import React from 'react';
import './Redesign.css';

export default function Redesign() {
    return (
        <div className="flex flex-col md:flex-row home-redesign-container px-4 py-8 md:px-4 md:py-6 md:p-6 lg:px-10 lg:py-10 rounded-lg">
            <div className="md:w-1/2 mb-5">
                <div className="flex items-center mb-6">
                    <img
                        src={require('../../../assets/redesignClients.png')}
                        alt="Worldwide Clients"
                        className="md:w-32 xl:w-48 rounded-full mr-2.5"
                    />
                    <div className='flex flex-col gap-1'>
                        <p className="text-sm text-white">Trusted by clients worldwide</p>
                        <img
                            src={require('../../../assets/redesign5star.png')}
                            alt="5 Stars"
                            className="w-24"
                        />
                    </div>
                </div>

                <h1 className="text-2xl lg:text-3xl xl:text-4xl text-white mb-4">DESIGN YOUR WEBSITE</h1>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl">
                    <span className='font-semibold text-white'>THAT </span><span className='text-black font-semibold bg-[#F9ED32] inline-block p-1 mb-5 lg:mb-8'>BOOST SALES <span className='font-bold'>FREE!</span></span>
                </h2>

                <ul className="list-none p-0 mb-5 lg:mb-8">
                    <li className="flex items-center  text-white text-xl lg:text-2xl xl:text-3xl font-semibold mb-3">
                        <img src={require('../../../assets/redesignCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> 100% free designs
                    </li>
                    <li className="flex items-center  text-white text-xl lg:text-2xl xl:text-3xl mb-3">
                        <img src={require('../../../assets/redesignCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <span>Designs</span><span className='font-semibold ml-1'>that drive more sales</span>
                    </li>
                    <li className="flex items-center  text-white text-xl lg:text-2xl xl:text-3xl mb-3">
                        <img src={require('../../../assets/redesignCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <span className='font-semibold mr-1'>Proven track record</span>of clients
                    </li>
                    <li className="flex items-center  text-white text-xl lg:text-2xl xl:text-3xl mb-3">
                        <img src={require('../../../assets/redesignCheck.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <span className='font-semibold mr-1'>No hidden costs</span>or commitments
                    </li>
                </ul>

                <button className="start-success-button px-5 py-2.5 font-semibold rounded-full text-md lg:text-lg cursor-pointer flex items-center">
                    START YOUR SUCCESS WITH US <span className="ml-2.5"><img src={require('../../../assets/redesignButton.png')} className="w-8" /></span>
                </button>
            </div>

            <div className="md:w-1/2 max-w-[500px] md:max-w-[700px]">
                <img
                    src={require('../../../assets//redesignImage.png')}
                    alt="Web Design"
                />
            </div>
        </div>
    )
}
