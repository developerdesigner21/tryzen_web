import React, { useEffect, useRef } from 'react';
import './ImageScroller.css';
import babyStore from '../../../assets/BABY STORE.png';
import cbdStore from '../../../assets/CBD STORE.png';
import costmaticStore from '../../../assets/cosmetics STORE.png';
import ebikeStore from '../../../assets/E-bike STORE.png';
import fashionStore from '../../../assets/fashion store.png';
import fitnessStore from '../../../assets/FITNESS STORE.png';
import groceryStore from '../../../assets/GROCERY-STORE.png';
import decoreStore from '../../../assets/HOMEDECORE STORE.png';
import jewelleryStore from '../../../assets/jewellery  STORE.png';
import medicalStore from '../../../assets/MEDICAL STORE.png';
import mensStore from '../../../assets/MEN’S STORE.png';
import petStore from '../../../assets/PET-FOOD-STORE.png';
import restaurantOrder from '../../../assets/restaurant order.png';
import restaurantStore from '../../../assets/restaurant STORE.png';
import vapeStore from '../../../assets/vape-store.png';
import womenStore from '../../../assets/WOMEN STORE.png';

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
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <>
            <div class="text-center mb-8 md:mb-10">
                <p class="ecom-our-food font-bold text-center text-lg md:text-2xl xl:text-3xl mb-1 md:mb-3">
                    OUR ECOMMERCE
                </p>
                <h1 class="website-design text-2xl md:text-4xl lg:text-6xl">
                    Website Designs
                </h1>
            </div>
            <div className="scroller" data-direction="left" data-speed="slow">
                <div className="scroller__inner">
                    <img src={babyStore} alt="Baby Store" />
                    <img src={cbdStore} alt="CBD Store" />
                    <img src={costmaticStore} alt="Cosmetic Store" />
                    <img src={ebikeStore} alt="E-bike Store" />
                    <img src={fashionStore} alt="Fashion Store" />
                    <img src={fitnessStore} alt="Fitness Store" />
                    <img src={groceryStore} alt="Grocery Store" />
                    <img src={decoreStore} alt="Decore Store" />
                </div>
            </div>

            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner">
                    <img src={jewelleryStore} alt="Jewellery Store" />
                    <img src={medicalStore} alt="Medical Store" />
                    <img src={mensStore} alt="Men's Store" />
                    <img src={petStore} alt="Pet Food Store" />
                    <img src={restaurantOrder} alt="Restaurant Order" />
                    <img src={restaurantStore} alt="Restaurant Store" />
                    <img src={vapeStore} alt="Vape Store" />
                    <img src={womenStore} alt="Women Store" />
                </div>
            </div>
        </>
    )
}
