import React from 'react';
import './RestaurantBenifit.css';
import { useNavigate } from 'react-router-dom';

export default function RestaurantBenifit() {
    const navigate = useNavigate();

    const handleInternalNavigation = () => {
        navigate('/whyTryzen');
    };

    const handleExternalNavigation = () => {
        window.open('https://restaurant.tryzensolution.com/', '_blank');
    };

    return (
        <div id="benefits" class="rounded-xl">
            <div class="relative">
                <div class="text-center mb-8 md:mb-10">
                    <p class="sub-title text-[#0F54FF] font-bold text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">GO BEYOND COMPETITION</p>
                    <h1 class="header-title text-2xl md:text-4xl lg:text-6xl">
                        Join Us For Guaranteed Result
                    </h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: "2rem" }}>
                    <div class="relative flex flex-col cursor-pointer" onClick={handleInternalNavigation}>
                        <img src={require("../../../assets/restauretAvoid.webp")} alt="Grow" class="h-full" />
                    </div>
                    <div class="relative flex flex-col cursor-pointer" onClick={handleExternalNavigation}>
                        <img src={require("../../../assets/restaurentBenifits.webp")} alt="Grow" class="h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
