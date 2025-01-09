import React, { useEffect } from 'react';
import './ImageScroller.css';
import babyStore from '../../../assets/EcomBABYSTORE.webp';
import womenStore from '../../../assets/EcomWOMENSTORE.webp';
import costmaticStore from '../../../assets/EcomcosmeticsSTORE.webp';
import ebikeStore from '../../../assets/EcomEbikeStore.webp';
import fashionStore from '../../../assets/EcomFashionStore.webp';
import fitnessStore from '../../../assets/EcomFITNESSSTORE.webp';
import fashion from '../../../assets/Ecomfashionstores.webp';
import decoreStore from '../../../assets/EcomHOMEDECORESTORE.webp';
import jewelleryStore from '../../../assets/EcomjewellerySTORE.webp';
import beutyStore from '../../../assets/EcombeautyStore.webp';
import petFoodStore from '../../../assets/EcomPETFOODSTORE.webp';
import mensStore from '../../../assets/EcomMENΓÇÖSSTORE.webp';

export default function ImageScroller() {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    // duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <>
            <div class="text-center mb-8 md:mb-10">
                <p class="ecom-our-food font-bold text-center text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">
                    OUR ECOMMERCE
                </p>
                <h1 class="website-design text-2xl md:text-4xl lg:text-6xl">
                    Website Designs
                </h1>
            </div>
            <div className="scroller" data-direction="left" data-speed="slow">
                <div className="scroller__inner">
                    <img src={babyStore} alt="Baby Store" />
                    <img src={womenStore} alt="CBD Store" />
                    <img src={costmaticStore} alt="Cosmetic Store" />
                    <img src={ebikeStore} alt="E-bike Store" />
                    <img src={fashionStore} alt="Fashion Store" />
                    <img src={fitnessStore} alt="Fitness Store" />
                </div>
            </div>

            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner">
                    <img src={jewelleryStore} alt="Jewellery Store" />
                    <img src={beutyStore} alt="Medical Store" />
                    <img src={womenStore} alt="Women Store" />
                    <img src={petFoodStore} alt="Restaurant Store" />
                    <img src={mensStore} alt="Vape Store" />
                    <img src={fashion} alt="Grocery Store" />
                    <img src={decoreStore} alt="Decore Store" />
                </div>
            </div>
        </>
    )
}
