import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

export default function Pricing() {
    return (
        <div id="pricing" class="rounded-xl">
            <div class="text-center mb-8 md:mb-10">
                <h1 class="sub-title text-[#FF6802] font-bold text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">
                    STOP USING <span className='font-extrabold'>3</span>RD PARTY APPS
                </h1>
                <p class="header-title text-center text-2xl md:text-4xl lg:text-6xl">
                    Like Uber, Door Dash & Rappi
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-8 lg:p-2 xl:p-4 w-full lg:w-1/2">
                    <h2 className="mb-4 pricing-content">
                        <span className='md:text-xl lg:text-2xl'>STOP RELYING ON SITE LIKE</span> <br /><span className='text-xl md:text-3xl font-bold text-[#0F54FF]'>Wordpress, Shopify, Wix</span>
                    </h2>
                    <p className="pricing-content text-sm md:text-md mb-6">
                        Take Control with Your Own Custom Website! Say goodbye to limitations and hidden fees. With our
                        custom-built websites, you get a high-performing design tailored to your business, supported and
                        maintenance by professional updates.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
                        <div className="rounded-lg overflow-hidden">
                            <div className="bg-[#F44336] text-white p-4 pricing-content">
                                <h3 className="text-center text-md md:text-lg font-bold">3RD PARTY SITE</h3>
                            </div>
                            <div className="bg-gray-100 p-4 lg:p-2 xl:p-4">
                                <ul className="space-y-2 text-sm md:text-md font-semibold pricing-content">
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Limited Customisation</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Slow Performance</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Generic Templates Design</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> SEO Limitations on Site</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} />Plugin or APP Overload</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> NO Checkout customization</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Not Future-Proof</li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <div className="bg-[#0F54FF] text-white p-4 pricing-content">
                                <h3 className="text-center text-md md:text-lg font-bold">OWN CUSTOM WEB</h3>
                            </div>
                            <div className="bg-gray-100 p-4 lg:p-2 xl:p-4">
                                <ul className="space-y-2 text-sm md:text-md font-semibold pricing-content">
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} /> Complete Customisation</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} />Faster Load Times</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} /> Unique Branding Design</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} /> Advanced SEO Features</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} /> ⁠High Data Security</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} /> Higher Conversion Rates</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} /> Dedicated Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button className="pricing-content w-full bg-[#0F54FF] sm:hover:bg-blue-700 text-white py-3 rounded-md font-bold text-sm md:text-lg button-discover">
                            <Link to="/e-commerce">
                                DISCOVER MORE ABOUT ECOMMERCE
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-8 lg:p-2 xl:p-4 w-full lg:w-1/2">
                    <h2 className="mb-4 pricing-content">
                        <span className='md:text-xl lg:text-2xl'>STOP RELYING ON APPS LIKE</span> <br /><span className='text-xl md:text-3xl font-bold text-[#FF6802]'>UberDirect, DoorDash, Rappi !</span>
                    </h2>
                    <p className="pricing-content text-sm md:text-md mb-6">
                        High commissions, limited control over customer experience, and restricted access to valuable data
                        are holding you back. Build your own system to increase profits, take full control of your brand
                        identity, and boost customer loyalty!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
                        <div className="rounded-lg overflow-hidden">
                            <div className="bg-[#F44336] text-white p-4 pricing-content">
                                <h3 className="text-center text-md md:text-lg font-bold">3RD PARTY APPS</h3>
                            </div>
                            <div className="bg-gray-100 p-4 lg:p-2 xl:p-4">
                                <ul className="space-y-2 text-sm md:text-md font-semibold pricing-content">
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> +⁠30% Commissions</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> No Customer Loyalty</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Reduced Brand Control</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Customer Data Loss</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Increased Competition</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Dependence on Policies</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/falseIcon.png")} style={{ width:'20px', height:"20px" }} /> Hidden Costs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <div className="bg-[#FF6802] text-white p-4 pricing-content">
                                <h3 className="text-center text-md md:text-lg font-bold">OWN SOLUTION</h3>
                            </div>
                            <div className="bg-gray-100 p-4 lg:p-2 xl:p-4">
                                <ul className="space-y-2 text-sm md:text-md font-semibold pricing-content">
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} />Zero Commissions</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} />Direct Customer Relationship</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} />Full Control Over Branding</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} />⁠Batter Customer Experience</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} />Increased Brand Loyalty</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} />No Restriction on Policy</li>
                                    <li className='flex gap-2 items-center'><img src={require("../../../assets/trueIcon.png")} style={{ width:'20px', height:"20px" }} />Streamline ⁠Order manage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button className="pricing-content w-full bg-[#FF6802] sm:hover:bg-orange-600 text-white py-3 font-bold rounded-md text-sm md:text-lg button-discover">
                            <Link to="/restaurent">
                                DISCOVER MORE ABOUT RESTAURANT
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
