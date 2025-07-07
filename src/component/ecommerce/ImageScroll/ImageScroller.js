import React, { useState } from 'react';
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
    return (
        <>
            <div class="text-center mb-8 md:mb-10">
                <h1 class="ecom-our-food text-[#0F54FF] font-bold text-center text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">
                    OUR ECOMMERCE
                </h1>
                <h1 class="website-design text-2xl md:text-4xl lg:text-6xl">
                    Website Designs
                </h1>
            </div>
            <div className="scroller" data-direction="left">
                <div className="scroller__inner">
                    {[babyStore, womenStore, costmaticStore, ebikeStore, fashionStore, fitnessStore].map((img, i) => (
                        <ImageWithLoader key={i} src={img} alt={`Image ${i}`} />
                    ))}
                    {[babyStore, womenStore, costmaticStore, ebikeStore, fashionStore, fitnessStore].map((img, i) => (
                        <ImageWithLoader key={`dup-${i}`} src={img} alt={`Duplicate ${i}`} />
                    ))}
                </div>
            </div>

            <div className="scroller" data-direction="right">
                <div className="scroller__inner">
                    {[jewelleryStore, beutyStore, womenStore, petFoodStore, mensStore, fashion, decoreStore].map((img, i) => (
                        <ImageWithLoader key={i} src={img} alt={`Image ${i}`} />
                    ))}
                    {[jewelleryStore, beutyStore, womenStore, petFoodStore, mensStore, fashion, decoreStore].map((img, i) => (
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
