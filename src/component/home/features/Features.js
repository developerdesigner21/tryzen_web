import React from 'react';
import '../Home.css';
import './Features.css';
import GrowOnline from '../../../assets/Feature1.webp';
import MultiStore from '../../../assets/Feature2.webp';
import FasterTack from '../../../assets/Feature3.webp';
import FastDelivery from '../../../assets/Feature4.webp';
import WhatsAppMarketing from '../../../assets/Feature5.webp';
import GoogleGrowth from '../../../assets/Feature6.webp';
import Coupon from '../../../assets/Feature7.webp';
import POS from '../../../assets/Feature8.webp';

export default function Features() {
    return (
        <div id="features" class="rounded-xl">
            <div class="text-center mb-8 md:mb-10">
                <h1 class="sub-title text-[#FF6802] font-bold text-center text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">
                    REASON TO CHOOSE
                </h1>
                <h1 class="header-title text-2xl md:text-4xl lg:text-6xl">
                    Tryzen Solution
                </h1>
            </div>

            <div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] xl:grid-cols-4 gap-6 lg:gap-8">
                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#E0F8F2" }}>
                    <img src={GrowOnline} alt="Grow Online" class="mx-auto mb-4 h-40" />
                    <h3 class="features-titles text-md md:text-xl font-semibold mb-2">Grow Online Presence with website and apps</h3>
                    <p class="features-content text-gray-700 text-sm font-semibold">It offer interactive features such as easy
                        order, and personalised recommendations, enhancing customer engagement.</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#FFEECB" }}>
                    <img src={MultiStore} alt="Multi Store" class="mx-auto mb-4 h-40" />
                    <h3 class="features-titles text-md md:text-xl font-semibold mb-2">Multi Store with RealTime Dashboard</h3>
                    <p class="features-content text-gray-700 text-sm font-semibold">It help to Manage multiple stores with
                        real-time data, centralized control, and seamless customer experience</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#F1F1F1" }}>
                    <img src={FasterTack} alt="Faster Tack" class="mx-auto mb-4 h-40" />
                    <h3 class="features-titles text-md md:text-xl font-semibold mb-2">We achieve Faster Speed with best tech</h3>
                    <p class="features-content text-gray-700 text-sm font-semibold">We ensures faster speed, optimised
                        performance, This tech used by Uber, Instagram, DoorDash & other big company</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#D9F2F7" }}>
                    <img src={FastDelivery} alt="Fast Delivery" class="mx-auto mb-4 h-40" />
                    <h3 class="features-titles text-md md:text-xl font-semibold mb-2">Quick Delivery with Uber Direct | Doordash</h3>
                    <p class="features-content text-gray-700 text-sm font-semibold">This Feature Enable quick deliveries using
                        Uber Direct & DoorDash for seamless logistics and faster service.</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#EEECFF" }}>
                    <img src={WhatsAppMarketing} alt="Google Growth" class="mx-auto mb-4 h-40" />
                    <h3 class="features-titles text-md md:text-xl font-semibold mb-2">Google Ranking & Social media marketing</h3>
                    <p class="features-content text-gray-700 text-sm font-semibold">We help Combining Google ranking with social
                        media marketing creates a powerful strategy to drive more sales.</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#DAFFF6" }}>
                    <img src={GoogleGrowth} alt="WhatsApp Marketing" class="mx-auto mb-4 h-40" />
                    <h3 class="features-titles text-md md:text-xl font-semibold mb-2">WhatsApp Marketing with and Review Offer</h3>
                    <p class="features-content text-gray-700 text-sm font-semibold">Engage customers instantly through personalised messages and updates et more attention,
                        leading to quick decisions.</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#FDF3EA" }}>
                    <img src={Coupon} alt="Coupon" class="mx-auto mb-4 h-40" />
                    <h3 class="features-titles text-md md:text-xl font-semibold mb-2">Create Offer Page & Coupon Code</h3>
                    <p class="features-content text-gray-700 text-sm font-semibold">Increase your sales by offering exclusive deals and coupons to attract new customers 
                        and keep them coming back for more!</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#FFEFBA" }}>
                    <img src={POS} alt="POS" class="mx-auto mb-4 h-40" />
                    <h3 class="features-titles text-md md:text-xl font-semibold mb-2">It helps to manage In-House and Online stock</h3>
                    <p class="features-content text-gray-700 text-sm font-semibold">POS helps smarter decision-making with real-time data and sales analysis, inventory management & insights.</p>
                </div>
            </div>
        </div>
    )
}
