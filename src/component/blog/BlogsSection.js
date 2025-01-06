import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import increase from '../../assets/increase.webp';
import menu from '../../assets/menu.webp';
import strategy from '../../assets/strategy.webp';
import block from '../../assets/block.webp';
import trends from '../../assets/trends.webp';
import star from '../../assets/star.webp';
import whatsapp from '../../assets/whatsapp.webp';
import FirstThree from '../../assets/13.webp';
import FirstTwo from '../../assets/12.webp';
import FirstOne from '../../assets/11.webp';
import SecondOne from '../../assets/21.webp';
import SecondTwo from '../../assets/22.webp';
import SecondThree from '../../assets/23.webp';
import ThirdOne from '../../assets/31.webp';
import ThirdTwo from '../../assets/32.webp';
import FourOne from '../../assets/41.webp';
import FourTwo from '../../assets/42.webp';
import FiveOne from '../../assets/51.webp';
import FiveTwo from '../../assets/52.webp';
import SixOne from '../../assets/61.webp';
import SixTwo from '../../assets/62.webp';
import SixThree from '../../assets/63.webp';

export default function BlogsSection() {
    const [activeContent, setActiveContent] = useState(1);

    const handleClick = (contentId) => {
        setActiveContent(contentId);
    };
    return (
        <div id="blogs">
            <div class="rounded-xl py-5 md:pt-12 pb-6 md:pb-10 px-6 lg:px-10">
                <div class="text-center mb-2 md:mb-5">
                    <p class="sub-title text-xl md:text-4xl md:text-3xl mb-5">READ DIFFERENT BLOGS</p>
                    <h1 class="header-title text-2xl md:text-5xl">
                        TO GROW YOUR BUISNESS
                    </h1>
                </div>

                <div class="flex flex-col mx-2">
                    {/* <div class="hidden md:flex flex-col mt-4 md:p-2 p-1">
                        <div class="flex flex-wrap gap-4 mb-6 flex-row justify-center">
                            <button id="btn1" 
                                onClick={()=>handleClick(1)}
                                class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <img src={increase} alt="Increase Sales" class="mr-3" style={{ height: "16px" }} />
                                <p class="text-sm md:text-md font-bold">How to increases Profitability in online order
                                </p>
                            </button>
                            <button id="btn2"
                                onClick={()=>handleClick(2)}
                                class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <img src={menu} alt="Restaurant Software" class="mr-3" style={{ height: "20px" }} />
                                <p class="text-sm md:text-md font-bold">How I can Start My online Order Journey</p>
                            </button>
                            <button id="btn3"
                                onClick={()=>handleClick(3)}
                                class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <img src={strategy} alt="Marketing Strategy" class="mr-3" style={{ height: "20px" }} />
                                <p class="text-sm md:text-md font-bold">How To Manage Multi-Location Restaurants</p>
                            </button>
                            <button id="btn4"
                                onClick={()=>handleClick(4)}
                                class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <img src={block} alt="Increase Sales" class="mr-3"  style={{ height: "16px" }} />
                                <p class="text-sm md:text-md font-bold">Unique Brand Identity for My Restaurant</p>
                            </button>
                            <button id="btn5"
                                onClick={()=>handleClick(5)}
                                class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <img src={trends} alt="Industry Trends" class="mr-3" style={{ height: "20px" }} />
                                <p class="text-sm md:text-md font-bold">What are Upcoming Industry Trends</p>
                            </button>
                            <button id="btn6"
                                onClick={()=>handleClick(6)}
                                class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <img src={star} alt="Google Ranks" class="mr-3" style={{ height: "20px" }} />
                                <p class="text-sm md:text-md font-bold">How i can Get ranking in Google</p>
                            </button>
                        </div>
                    </div>

                    <div class="flex mt-4 md:hidden">
                        <div class="mb-6">
                            <div class="mb-2">
                                <div class="button-swiper-slide mb-1">
                                    <button id="btn1" class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                        <img src={increase} alt="Increase Sales" class="mr-3" style={{ height: "16px" }} />
                                        <p class="text-sm md:text-md font-bold">How to increase Profitability in online order</p>
                                    </button>
                                </div>
                                <div class="button-swiper-slide mb-1">
                                    <button id="btn2" class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                        <img src={menu} alt="Restaurant Software" class="mr-3" style={{ height: "20px" }} />
                                        <p class="text-sm md:text-md font-bold">How I can Start My online Order Journey</p>
                                    </button>
                                </div>
                                <div class="button-swiper-slide mb-1">
                                    <button id="btn3" class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                        <img src={strategy} alt="Marketing Strategy" class="mr-3" style={{ height: "20px" }} />
                                        <p class="text-sm md:text-md font-bold">How To Manage Multi-Location Restaurants</p>
                                    </button>
                                </div>
                                <div class="button-swiper-slide mb-1">
                                    <button id="btn4" class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                        <img src={block} alt="Increase Sales" class="mr-3" style={{ height: "20px" }} />
                                        <p class="text-sm md:text-md font-bold">Unique Brand Identity for My Restaurant</p>
                                    </button>
                                </div>
                                <div class="button-swiper-slide mb-1">
                                    <button id="btn5" class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                        <img src={trends} alt="Industry Trends" class="mr-3" style={{ height: "20px" }} />
                                        <p class="text-sm md:text-md font-bold">What are Upcoming Industry Trends</p>
                                    </button>
                                </div>
                                <div class="button-swiper-slide mb-1">
                                    <button id="btn6" class="border-solid border-2 border-gray-300 bg-white text-blue-800 py-3 px-2 md:px-5 rounded-lg flex items-center shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                        <img src={star} alt="Industry Trends" class="mr-3" style={{ height: "20px" }} />
                                        <p class="text-sm md:text-md font-bold">How i can Get ranking in Google</p>
                                    </button>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div> */}

                    <div id="content1" class={`content w-full flex flex-col lg:flex-row items-center rounded-lg ${activeContent !== 1 ? 'hidden-content' : ''}`}>
                        <div class="lg:w-1/2 md:p-6 rounded-lg">
                            <h2 class="text-xl md:text-4xl font-bold text-gray-800 mb-4">How to increases Profitability
                                in online orders</h2>
                            <p class="text-gray-600 text-md mb-6">
                                Boost profitability by optimizing menu, upselling, cutting delivery costs, using data
                                analytics, and offering targeted promotions to increase order value while streamlining
                                operations
                            </p>
                            <button
                                href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                class="hidden md:flex items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                style={{ backgroundColor: "#29A71A" }}
                            >
                                <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                <span>CHAT WITH US</span>
                            </button>
                        </div>
                        <div class="hidden lg:w-1/2 md:grid grid-cols-3 gap-4">
                            <Link to="order-blog"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={FirstThree} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">
                                        How i can Increase sals and traffic that maximise my Profits in Restaurant’s
                                        business
                                    </h3>
                                </div>
                            </Link>
                            <Link to="increase-sales"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={FirstTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">
                                        5 Proven Ways to Enhance Online Order Profitability and Drive More Revenue for
                                        Your Restaurant
                                    </h3>
                                </div>
                            </Link>
                            <Link to="enhance-order"
                                class="bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={FirstOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">
                                        how to avoid 3rd party delivery charge and i can my Save 25% Delivery Costs for
                                        my Restaurant.
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div class="swiper-container md:hidden">
                            <div class="swiper-wrapper grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
                                <div class="swiper-slide">
                                    <Link to="order-blog" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={FirstThree} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">How i can Increase sales and traffic that maximise my Profits in Restaurant’s
                                                business
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="increase-sales" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={FirstTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">5 Proven Ways to Enhance Online Order Profitability and Drive More Revenue for
                                                Your Restaurant
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="enhance-order" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={FirstOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">How to avoid 3rd party delivery charge and i can my Save 25% Delivery Costs for
                                                my Restaurant.</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="flex">
                                <button
                                    href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                    class="flex md:hidden items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                    style={{ backgroundColor: "#29A71A" }}
                                >
                                    <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                    <span>CHAT WITH US</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="content2"
                        class={`content w-full flex flex-col lg:flex-row items-center rounded-lg ${activeContent !== 2 ? 'hidden-content' : ''}`}>
                        <div class="lg:w-1/2 md:p-6 rounded-lg">
                            <h2 class="text-xl md:text-4xl font-bold text-gray-800 mb-4">How I can Start My online
                                Order Journey</h2>
                            <p class="text-gray-600 text-md mb-6">
                                WEBSITE AND APPLICATION REALLY boost visibility, streamline operations, and enhance
                                customer engagement, loyalty AND DIRECT Communication.
                            </p>
                            <button
                                href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                class="hidden md:flex items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                style={{ backgroundColor: "#29A71A" }}
                            >
                                <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                <span>CHAT WITH US</span>
                            </button>
                        </div>
                        <div class="hidden md:grid lg:w-1/2 md:grid-cols-3 gap-4">
                            <Link to="grow-offline"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={SecondTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">Step-by-Step Guide How to Prepare Your Restaurant
                                        for Seamless Online Ordering Integration
                                    </h3>
                                </div>
                            </Link>
                            <Link to="online-ordering"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={SecondThree} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">How to i start growing Offline business to Online
                                        my Restaurant’s First Online Ordering Platform
                                    </h3>
                                </div>
                            </Link>
                            <Link to="plateform"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={SecondOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">How to Choose the Right Online Ordering Platform
                                        like Wordpress, Shopify or customs solution
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div class="swiper-container md:hidden">
                            <div class="swiper-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-8">
                                <div class="swiper-slide">
                                    <Link to="grow-offline" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={SecondTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">Step-by-Step Guide How to Prepare Your Restaurant
                                                for Seamless Online Ordering Integration
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="online-ordering" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={SecondThree} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">How to i start growing Offline business to Online
                                                my Restaurant’s First Online Ordering Platform
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="plateform" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={SecondOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">How to Choose the Right Online Ordering Platform
                                                like Wordpress, Shopify or customs solution</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="flex">
                                <button
                                    href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                    class="flex md:hidden items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                    style={{ backgroundColor: "#29A71A" }}
                                >
                                    <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                    <span>CHAT WITH US</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="content3" class={`content w-full flex flex-col lg:flex-row items-center rounded-lg ${activeContent !== 3 ? 'hidden-content' : ''}`}>
                        <div class="lg:w-1/2 md:p-6 rounded-lg">
                            <h2 class="text-xl md:text-4xl font-bold text-gray-800 mb-4">How To Manage Multi-Location
                                Restaurants</h2>
                            <p class="text-gray-600 text-md mb-6">
                                Managing multi-location restaurants with online orders requires a centralised system,
                                streamlined operations, and consistent quality. Use data and technology to optimize
                                performance and boost profits.
                            </p>
                            <button
                                href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                class="hidden md:flex items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                style={{ backgroundColor: "#29A71A" }}
                            >
                                <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                <span>CHAT WITH US</span>
                            </button>
                        </div>
                        <div class="hidden lg:w-1/2 md:grid md:grid-cols-2 gap-4">
                            <Link to="optimize-operation"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={ThirdTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">How to Optimise Operations for Multi-Location
                                        Restaurants with Online Ordering
                                    </h3>
                                </div>
                            </Link>
                            <Link to="ensure-consistency"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={ThirdOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">How to Ensure Consistency in Online Orders Across
                                        Multiple Restaurant Locations
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div class="swiper-container md:hidden">
                            <div class="swiper-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-8">
                                <div class="swiper-slide">
                                    <Link to="optimize-operation" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={{ ThirdTwo }} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">How to Optimise Operations for Multi-Location
                                                Restaurants with Online Ordering
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="ensure-consistency" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={ThirdOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">How to Ensure Consistency in Online Orders Across
                                                Multiple Restaurant Locations
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="flex">
                                <button
                                    href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                    class="flex md:hidden items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                    style={{ backgroundColor: "#29A71A" }}
                                >
                                    <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                    <span>CHAT WITH US</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="content4" class={`content w-full flex flex-col lg:flex-row items-center rounded-lg ${activeContent !== 4 ? 'hidden-content' : ''}`}>
                        <div class="lg:w-1/2 md:p-6 rounded-lg">
                            <h2 class="text-xl md:text-4xl font-bold text-gray-800 mb-4">Unique Brand Identity for My
                                Restaurant
                            </h2>
                            <p class="text-gray-600 text-md mb-6">
                                unified brand identity that aligns your restaurant’s online and offline presence.
                                Consistent visuals, messaging, and customer experience can strengthen your brand and
                                drive growth across all channels.
                            </p>
                            <button
                                href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                class="hidden md:flex items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                style={{ backgroundColor: "#29A71A" }}
                            >
                                <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                <span>CHAT WITH US</span>
                            </button>
                        </div>
                        <div class="hidden lg:w-1/2 md:grid md:grid-cols-2 gap-4">
                            <Link to="brand-experience"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={FourOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">Creating a Unified Brand Experience: Connecting
                                        Your Restaurant’s Online and Offline Presence
                                    </h3>
                                </div>
                            </Link>
                            <Link to="brand-journey"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={FourTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">Creating a Seamless Brand Journey for Customers:
                                        Online Ordering to In-Store Dining
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div class="swiper-container md:hidden">
                            <div class="swiper-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-8">
                                <div class="swiper-slide">
                                    <Link to="brand-experience" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={FourOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">Creating a Unified Brand Experience: Connecting
                                                Your Restaurant’s Online and Offline Presence
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="brand-journey" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={FourTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">Creating a Seamless Brand Journey for Customers:
                                                Online Ordering to In-Store Dining
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="flex">
                                <button
                                    href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                    class="flex md:hidden items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                    style={{ backgroundColor: "#29A71A" }}
                                >
                                    <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                    <span>CHAT WITH US</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="content5" class={`content w-full flex flex-col lg:flex-row items-center rounded-lg ${activeContent !== 5 ? 'hidden-content' : ''}`}>
                        <div class="lg:w-1/2 md:p-6 rounded-lg">
                            <h2 class="text-xl md:text-4xl font-bold text-gray-800 mb-4">What are Upcoming Industry
                                Trends</h2>
                            <p class="text-gray-600 text-md mb-6">
                                Upcoming restaurant trends include tech adoption, sustainable sourcing, health-focused
                                menus, and personalised dining experiences, transforming your business in future
                            </p>
                            <button
                                href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                class="hidden md:flex items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                style={{ backgroundColor: "#29A71A" }}
                            >
                                <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                <span>CHAT WITH US</span>
                            </button>
                        </div>
                        <div class="hidden lg:w-1/2 md:grid md:grid-cols-2 gap-4">
                            <Link to="future-shaping"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={FiveOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">How Technology is Shaping the Future of the and
                                        how Trends Redefining Restaurant Industry
                                    </h3>
                                </div>
                            </Link>
                            <Link to="online-shift"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={FiveTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">How Restaurants Can Compete with online Shifting
                                        of Consumer and there Preferences
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div class="swiper-container md:hidden">
                            <div class="swiper-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-8">
                                <div class="swiper-slide">
                                    <Link to="future-shaping" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={FiveOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">How Restaurants Can Compete with online Shifting
                                                of Consumer and there Preferences
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="online-shift" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={FiveTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">How Restaurants Can Compete with online Shifting
                                                of Consumer and there Preferences
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="flex">
                                <button
                                    href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                    class="flex md:hidden items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                    style={{ backgroundColor: "#29A71A" }}
                                >
                                    <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                    <span>CHAT WITH US</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="content6" class={`content w-full flex flex-col lg:flex-row items-center rounded-lg ${activeContent !== 6 ? 'hidden-content' : ''}`}>
                        <div class="lg:w-1/2 md:p-6 rounded-lg">
                            <h2 class="text-xl md:text-4xl font-bold text-gray-800 mb-4">How i can Get ranking in
                                Google</h2>
                            <p class="text-gray-600 text-md mb-6">
                                SEO boosts restaurant visibility, attracts local customers, improves website traffic,
                                and enhances mobile and voice search ranking. It drives more reservations, increases
                                foot traffic, and grows online orders.
                            </p>
                            <button
                                href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                class="hidden md:flex items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                style={{ backgroundColor: "#29A71A" }}
                            >
                                <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                <span>CHAT WITH US</span>
                            </button>
                        </div>
                        <div class="hidden lg:w-1/2 md:grid md:grid-cols-3 gap-4">
                            <Link to="online-reputation"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={SixOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">Boost Your Restaurant’s Online Reputation: How to
                                        Ask for Reviews Without Sounding Pushy
                                    </h3>
                                </div>
                            </Link>
                            <Link to="restaurant-rank"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={SixTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">The Ultimate Guide How to Rank my Restaurant on
                                        google. for SEO and also, User-Generated Content that help to Improve SEO
                                    </h3>
                                </div>
                            </Link>
                            <Link to="seo-mistakes"
                                class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                <img src={SixThree} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                <div class="p-2">
                                    <h3 class="text-lg font-bold mb-2">Top 10 SEO Mistakes Restaurant Owners make to
                                        Boost there Restaurant’s Online.
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div class="swiper-container md:hidden">
                            <div class="swiper-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-8">
                                <div class="swiper-slide">
                                    <Link to="online-reputation" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={SixOne} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">Boost Your Restaurant’s Online Reputation: How to
                                                Ask for Reviews Without Sounding Pushy
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="restaurant-rank" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={SixTwo} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">The Ultimate Guide How to Rank my Restaurant on
                                                google. for SEO and also, User-Generated Content that help to Improve SEO
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link to="seo-mistakes" class="relative bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-2">
                                        <img src={SixThree} alt="Business Strategy" class="w-full h-32 rounded-2xl object-cover mb-4" />
                                        <div>
                                            <h3 class="text-md font-semibold">Top 10 SEO Mistakes Restaurant Owners make to
                                                Boost there Restaurant’s Online.
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="flex">
                                <button
                                    href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                    class="flex md:hidden items-center text-white font-semibold border border-gray-400 py-2 px-4 rounded-full mb-4 md:mb-0"
                                    style={{ backgroundColor: "#29A71A" }}
                                >
                                    <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                    <span>CHAT WITH US</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
