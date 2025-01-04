import React from 'react';

export default function Benifits() {
    return (
        <div id="benefits" class="rounded-xl">
            <div class="relative">
                <div class="text-center pt-5 mb-8 md:mb-10">
                    <p class="sub-title font-bold text-lg md:text-2xl xl:text-3xl mb-1 md:mb-3">GROW <span className='font-extrabold'>30%</span> PROFIT BY</p>
                    <h1 class="header-title text-xl md:text-3xl lg:text-5xl">
                        REDUCE 3RD PARTY COMMISION
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
