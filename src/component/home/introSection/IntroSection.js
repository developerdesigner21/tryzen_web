import React from "react";
import '../Home.css';
import './IntroSection.css';
import { Link } from 'react-router-dom';

export default function IntroSection() {
    return (
        <div className="intro-container pt-5 md:pt-10">
            <div className="flex flex-row gap-2 md:gap-3 items-center justify-center">
                <h1 className="achieve-title text-3xl md:text-5xl xl:text-7xl">ACHIEVE</h1>
                <h2 className="profit-title text-3xl md:text-5xl xl:text-7xl">30% Profit</h2>
            </div>
            <p className="hidden md:block description-text md:mt-5 md:text-xl lg:text-4xl md:mb-8">
                By creating your own custom website and application <br /> for your{" "}
                <span className="relative-container ecom-Restaurant">
                    E-Commerce
                    <div className="arrow-container hidden md:flex">
                        <img
                            src={require('../../../assets/ItalicArrow.png')}
                            alt="Arrow for E-Commerce"
                            className="arrow-image"
                        />
                    </div>
                </span>{" "}
                or{" "}
                <span className="relative-container ecom-Restaurant">
                    Restaurant
                    <div className="arrow-container hidden md:flex">
                        <img
                            src={require('../../../assets/ItalicArrow.png')}
                            alt="Arrow for Restaurant"
                            className="arrow-image"
                        />
                    </div>
                </span>{" "}
                business.
            </p>
            <p className="md:hidden description-text text-md mt-3 mb-2">
                By creating your own custom web and app <br /> for your{" "}
                <span className="relative-container ecom-Restaurant">
                    E-Commerce
                </span>{" "}
                or{" "}
                <span className="relative-container ecom-Restaurant">
                    Restaurant
                </span>{" "}
                business.
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
                            <button className="info-button px-5 py-2.5 text-sm md:text-xs lg:text-xl font-semibold">
                                <Link to="/e-commerce">
                                    EXPLORE ECOMMERCE INFO
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="info-box relative">
                    <a href="https://restaurant.tryzensolution.com/" target="_blank" rel="noopener noreferrer">
                        <div className="info-content">
                            <img
                                src={require('../../../assets/restaurent.webp')}
                                alt="Restaurant"
                                className="info-image"
                            />
                            <div className="info-button-container bottom-[3%]">
                                <button className="info-button px-5 py-2.5 text-sm md:text-xs lg:text-xl font-semibold">
                                    <Link to="/restaurent">
                                        EXPLORE RESTAURANT
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
