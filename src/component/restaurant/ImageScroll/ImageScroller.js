import React, { useState } from "react";
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
    return (
        <>
            <div className="text-center mb-8 md:mb-10">
                <h1 className="our-food font-bold text-center text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">
                    OUR FOOD
                </h1>
                <h1 className="website-design text-2xl md:text-4xl lg:text-6xl">
                    Website Designs
                </h1>
            </div>

            <div className="scroller" data-direction="left">
                <div className="scroller__inner">
                    {[fastFood, burger, hotdogs, grocery, delight, variety].map((img, i) => (
                        <ImageWithLoader key={i} src={img} alt={`Image ${i}`} />
                    ))}
                    {[fastFood, burger, hotdogs, grocery, delight, variety].map((img, i) => (
                        <ImageWithLoader key={`dup-${i}`} src={img} alt={`Duplicate ${i}`} />
                    ))}
                </div>
            </div>

            <div className="scroller" data-direction="right">
                <div className="scroller__inner">
                    {[burgerMeal, fastFoodMeal, indian, store, tacos, sandwich].map((img, i) => (
                        <ImageWithLoader key={i} src={img} alt={`Image ${i}`} />
                    ))}
                    {[burgerMeal, fastFoodMeal, indian, store, tacos, sandwich].map((img, i) => (
                        <ImageWithLoader key={`dup-${i}`} src={img} alt={`Duplicate ${i}`} />
                    ))}
                </div>
            </div>
        </>
    )
}

function ImageWithLoader({ src, alt }) {
    const [loading, setLoading] = useState(true);

    return (
        <div className="image-wrapper">
            {loading && <div className="image-placeholder"></div>}
            <img
                src={src}
                alt={alt}
                className={`image ${loading ? "hidden" : "visible"}`}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
}
