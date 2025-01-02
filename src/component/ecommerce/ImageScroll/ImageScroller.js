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
    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);

    useEffect(() => {
        const cloneImages = (containerRef) => {
            const container = containerRef.current;
            const images = Array.from(container.children);
            images.forEach((image) => {
                const clone = image.cloneNode(true);
                container.appendChild(clone);
            });
        };
        cloneImages(leftContainerRef);
        cloneImages(rightContainerRef);
    }, []);


    return (
        <>
            <div class="text-center mb-8 md:mb-10">
                <p class="ecom-our-food font-bold text-center text-lg md:text-2xl xl:text-3xl mb-1 md:mb-3">
                    OUR FOOD
                </p>
                <h1 class="website-design text-2xl md:text-4xl lg:text-6xl">
                    Website Designs
                </h1>
            </div>
            <div className="carousel-wrapper gap-5">
                <div className="carousel-line gap-3 md:gap-5" ref={leftContainerRef}>
                    <img src={babyStore} alt="Image 1" className='rounded-xl' />
                    <img src={cbdStore} alt="Image 2" className='rounded-xl' />
                    <img src={costmaticStore} alt="Image 3" className='rounded-xl' />
                    <img src={ebikeStore} alt="Image 4" className='rounded-xl' />
                    <img src={fashionStore} alt="Image 5" className='rounded-xl' />
                    <img src={fitnessStore} alt="Image 6" className='rounded-xl' />
                    <img src={groceryStore} alt="Image 7" className='rounded-xl' />
                    <img src={decoreStore} alt="Image 8" className='rounded-xl' />
                </div>

                <div className="carousel-line gap-3 reverse md:gap-5" ref={rightContainerRef}>
                    <img src={jewelleryStore} alt="Image 1" className='rounded-xl' />
                    <img src={medicalStore} alt="Image 2" className='rounded-xl' />
                    <img src={mensStore} alt="Image 3" className='rounded-xl' />
                    <img src={petStore} alt="Image 4" className='rounded-xl' />
                    <img src={restaurantOrder} alt="Image 5" className='rounded-xl' />
                    <img src={restaurantStore} alt="Image 6" className='rounded-xl' />
                    <img src={vapeStore} alt="Image 7" className='rounded-xl' />
                    <img src={womenStore} alt="Image 8" className='rounded-xl' />
                </div>
            </div>
        </>
    )
}
