import React, { useEffect } from "react";
import "./ImageScroller.css";
import burger from "../../../assets/rest-burger.webp";
import fastFood from "../../../assets/rest-fast-food.webp";
import delight from "../../../assets/rest-delight.webp";
import hotdogs from "../../../assets/rest-hotdos.webp";
import sandwich from "../../../assets/rest-sandwitch.webp";
import variety from "../../../assets/rest-variety.webp";

import burgerMeal from "../../../assets/rest-burger-meal.webp";
import fastFoodMeal from "../../../assets/rest-fast-foods.webp";
import grocery from "../../../assets/rest-grocery.webp";
import indian from "../../../assets/rest-indian.webp";
import store from "../../../assets/rest-STORE.webp";
import tacos from "../../../assets/rest-tacos-bull.webp";

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
            <div className="text-center mb-8 md:mb-10">
                <p className="our-food font-bold text-center text-xl md:text-2xl xl:text-3xl mb-1 md:mb-3">
                    OUR FOOD
                </p>
                <h1 className="website-design text-3xl md:text-4xl lg:text-6xl">
                    Website Designs
                </h1>
            </div>

            <div className="scroller" data-direction="left" data-speed="slow">
                <div className="scroller__inner">
                    <img src={fastFood} alt="CBD Store" />
                    <img src={burger} alt="Baby Store" />
                    <img src={hotdogs} alt="E-bike Store" />
                    <img src={grocery} alt="Men's Store" />
                    <img src={delight} alt="Cosmetic Store" />
                    <img src={variety} alt="Fitness Store" />
                </div>
            </div>

            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner">
                    <img src={burgerMeal} alt="Jewellery Store" />
                    <img src={fastFoodMeal} alt="Medical Store" />
                    <img src={indian} alt="Pet Food Store" />
                    <img src={store} alt="Restaurant Order" />
                    <img src={tacos} alt="Restaurant Store" />
                    <img src={sandwich} alt="Fashion Store" />
                </div>
            </div>
        </>
    );
}
