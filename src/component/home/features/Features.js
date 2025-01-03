import React from 'react';
import '../Home.css';
import GrowOnline from '../../../assets/p1.webp';
import MultiStore from '../../../assets/p2.webp';
import FasterTack from '../../../assets/p3.webp';
import FastDelivery from '../../../assets/p4.webp';
import WhatsAppMarketing from '../../../assets/p5.webp';
import GoogleGrowth from '../../../assets/p6.webp';
import Coupon from '../../../assets/p7.webp';
import POS from '../../../assets/p8.webp';

export default function Features() {
    return (
        <div id="features" class="rounded-xl">
            <div class="text-center pt-5 mb-8 md:mb-10">
                <p class="sub-title font-bold text-center text-lg md:text-2xl xl:text-3xl mb-1 md:mb-3">
                    REASON TO CHOOSE
                </p>
                <h1 class="header-title text-2xl md:text-4xl lg:text-5xl">
                    TRYZEN SOLUTION
                </h1>
            </div>

            <div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] xl:grid-cols-4 gap-6 lg:gap-8">
                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#E0F8F2" }}>
                    <img src={GrowOnline} alt="Grow Online" class="mx-auto mb-4 h-40" />
                    <h3 class="text-md md:text-xl font-semibold mb-2">Grow Online Presence with website and apps</h3>
                    <p class="text-gray-700 text-sm font-semibold mt-3 md:mt-6">It offer interactive features such as easy
                        order, and personalised recommendations, enhancing customer engagement.</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#FFEECB" }}>
                    <img src={MultiStore} alt="Multi Store" class="mx-auto mb-4 h-40" />
                    <h3 class="text-md md:text-xl font-semibold mb-2">Multi Store with RealTime Dashboard</h3>
                    <p class="text-gray-700 text-sm font-semibold mt-3 md:mt-6">It help to Manage multiple stores with
                        real-time data, centralized control, and seamless customer experience</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#F1F1F1" }}>
                    <img src={FasterTack} alt="Faster Tack" class="mx-auto mb-4 h-40" />
                    <h3 class="text-md md:text-xl font-semibold mb-2">We achieve Faster Speed with best technologies</h3>
                    <p class="text-gray-700 text-sm font-semibold mt-3 md:mt-6">We ensures faster speed, optimised
                        performance, This tech used by Uber, Instagram, DoorDash & other big company</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#D9F2F7" }}>
                    <img src={FastDelivery} alt="Fast Delivery" class="mx-auto mt-4 h-40" />
                    <h3 class="text-md md:text-xl font-semibold mb-2">Quick Delivery with Uber Direct | Doordash</h3>
                    <p class="text-gray-700 text-sm font-semibold mt-3 md:mt-6">This Feature Enable quick deliveries using
                        Uber Direct & DoorDash for seamless logistics and faster service.</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#EEECFF" }}>
                    <img src={GoogleGrowth} alt="Google Growth" class="mx-auto mb-4 h-40" />
                    <h3 class="text-md md:text-xl font-semibold mb-2">Google Ranking & Social media marketing</h3>
                    <p class="text-gray-700 text-sm font-semibold mt-3 md:mt-6">We help Combining Google ranking with social
                        media marketing creates a powerful strategy to drive more customers.</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#DAFFF6" }}>
                    <img src={WhatsAppMarketing} alt="WhatsApp Marketing" class="mx-auto mb-4 h-40" />
                    <h3 class="text-md md:text-xl font-semibold mb-2">WhatsApp Marketing with and Review Offer</h3>
                    <p class="text-gray-700 text-sm font-semibold mt-3 md:mt-6">Engage customers instantly through personalised messages and updates et more attention,
                        leading to quick decisions.</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#FDF3EA" }}>
                    <img src={Coupon} alt="Coupon" class="mx-auto mb-4 h-40" />
                    <h3 class="text-md md:text-xl font-semibold mb-2">Create Offer Page & Coupon Code</h3>
                    <p class="text-gray-700 text-sm font-semibold mt-3 md:mt-6">Increase your sales by offering exclusive deals and coupons to attract new customers 
                        and keep them coming back for more!</p>
                </div>

                <div class="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: "#FFEFBA" }}>
                    <img src={POS} alt="POS" class="mx-auto my-2 h-40" />
                    <h3 class="text-md md:text-xl font-semibold mb-2">It helps to manage In-House and Online stock</h3>
                    <p class="text-gray-700 text-sm font-semibold mt-3 md:mt-6">POS helps smarter decision-making with real-time data and sales analysis, inventory management & insights.</p>
                </div>
            </div>
        </div>
    )
}
