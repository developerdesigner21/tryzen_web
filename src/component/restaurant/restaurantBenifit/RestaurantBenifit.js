import React from 'react';
import './RestaurantBenifit.css';

export default function RestaurantBenifit() {

    return (
        <div id="benefits" class="rounded-xl">
            <div class="relative">
                <div class="text-center mb-8 md:mb-10">
                    <h1 class="sub-title text-[#FF6802] font-bold text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">GO BEYOND COMPETITION</h1>
                    <h1 class="header-title text-2xl md:text-4xl lg:text-6xl">
                        Join Us For Guaranteed Result
                    </h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: "2rem" }}>
                    <div class="relative flex flex-col cursor-pointer">
                        <img src={require("../../../assets/restaurentAvoid.webp")} alt="Grow" class="h-full" />
                    </div>
                    <div class="relative flex flex-col cursor-pointer">
                        <img src={require("../../../assets/restaurentBenifit.webp")} alt="Grow" class="h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}