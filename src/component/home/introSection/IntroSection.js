import React from "react";
import '../Home.css';
import './IntroSection.css';
import { Link } from 'react-router-dom';

export default function IntroSection() {
    return (
        <div className="intro-container pt-5 md:pt-10">
            <div className="flex flex-row gap-2 md:gap-3 items-center justify-center">
                <h1 className="achieve-title text-2xl md:text-4xl lg:text-5xl">ACHIEVE</h1>
                <h2 className="profit-title text-2xl md:text-4xl lg:text-5xl">30% Profit</h2>
            </div>
            <p className="home-description-text md:mt-5 md:text-2xl lg:text-3xl md:mb-8">
                By CREATING OWN ORDERING CUSTOM CODED <br /> <span className="text-[#0F54FF]">E-COMMERCE</span> OR <span className="text-[#FF6802]">RESTAURENT</span>
            </p>
            <div className="info-sections flex flex-col md:flex-row gap-2 md:gap-3 xl:gap-5 mt-5 md:mt-12">
                <div className="info-box relative">

                    <div className="info-content">
                        <img
                            src={require('../../../assets/ecommerce.webp')}
                            alt="E-Commerce"
                            className="info-image"
                        />
                        <div className="info-button-container bottom-[3%]">
                            <button className="info-button px-5 py-2.5 text-sm md:text-xs lg:text-xl font-semibold rounded-md">
                                <Link to="/e-commerce">
                                    EXPLORE ECOMMERCE INFO
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="info-box relative">
                        <div className="info-content">
                            <img
                                src={require('../../../assets/restaurent.webp')}
                                alt="Restaurant"
                                className="info-image"
                            />
                            <div className="info-button-container bottom-[3%]">
                                <button className="info-button px-5 py-2.5 text-sm md:text-xs lg:text-xl font-semibold rounded-md">
                                    <Link to="/restaurent">
                                        EXPLORE RESTAURANT
                                    </Link>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
