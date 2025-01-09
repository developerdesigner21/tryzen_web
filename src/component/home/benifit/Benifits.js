import React from 'react';

export default function Benifits() {
    return (
        <div id="benefits" class="rounded-xl">
            <div class="relative">
                <div class="text-center mb-8 md:mb-10">
                    <p class="sub-title text-[#0F54FF] font-bold text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">GROW <span className='font-extrabold'>30%</span> PROFIT BY</p>
                    <h1 class="header-title text-2xl md:text-4xl lg:text-6xl">
                        Reduce 3rd Party Commission
                    </h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: "2rem" }}>
                    <div class="relative flex flex-col">
                        <img src={require("../../../assets/home1.webp")} alt="Grow" class="h-full" />
                    </div>
                    <div class="relative flex flex-col">
                        <img src={require("../../../assets/home2.webp")} alt="Grow" class="h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
