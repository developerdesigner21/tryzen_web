import React from 'react';
import { Link } from 'react-router-dom';
import './EcomBenifit.css';

export default function EcomBenifit() {
    return (
        <div id="benefits" class="rounded-xl">
            <div class="relative">
                <div class="text-center mb-8 md:mb-10">
                    <p class="sub-title text-[#FF6802] font-bold text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">GO BEYOND COMPETITION</p>
                    <h1 class="header-title text-2xl md:text-4xl lg:text-6xl">
                        Join Us For Guaranteed Result
                    </h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: "2rem" }}>
                    {/* <div class="relative flex flex-col"> */}
                    <Link to='/whyTryzen'>                        
                        <img src={require("../../../assets/ecomAvoid.webp")} alt="Grow" class="h-full" />
                    </Link>
                    {/* </div> */}
                    <a class="relative flex flex-col" href="https://codmarket.co.ke/" target='_blank'>
                        <img src={require("../../../assets/ecomBenifit.webp")} alt="Grow" class="h-full" />
                    </a>
                </div>
            </div>
        </div>
    )
}
