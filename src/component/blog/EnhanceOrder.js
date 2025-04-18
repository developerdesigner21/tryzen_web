import React from 'react';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

export default function EnhanceOrder() {

    const sections = [
        { id: "section1", label: "Optimize Your Online Menu for Higher Margins" },
        { id: "section2", label: "Implement Strategic Pricing and Promotions" },
        { id: "section3", label: "Leverage Data-Driven Marketing" },
        { id: "section4", label: "Improve the User Experience on Your Ordering Platform" },
        { id: "section5", label: "Use Loyalty Programs to Drive Repeat Business" },
    ];

    return (
        <div class="bg-gray-100 p-4 md:p-10 xl:p-16">
            <nav class="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
                <Link to="/" id="brand" class="hidden lg:flex gap-2 items-center flex-1">
                    <img class="object-cover" src={mainLogo} alt="Logo" style={{ height: "2rem" }} />
                </Link>
                <Link to="/" id="brand" class="lg:hidden gap-2 items-center flex-1">
                    <img class="object-cover" src={smallLogo} alt="Logo" style={{ height: "2rem" }} />
                </Link>
                <div id="nav-menu" class="hidden md:flex gap-5 lg:gap-12">
                    <a href="index.html#features" class="font-medium hover:text-primary">Features</a>
                    <a href="index.html#why" class="font-medium hover:text-primary">Why Tryzen?</a>
                    <a href="index.html#blogs" class="font-medium hover:text-primary">Blogs</a>
                    <a href="index.html#reviews" class="font-medium hover:text-primary">Reviews</a>
                    <a href="index.html#pricing" class="font-medium hover:text-primary">Pricing</a>

                </div>
                <div class="flex flex-1 justify-end">
                    <button
                        class="flex gap-2 items-center border border-gray-400 px-1 md:px-4 py-1 md:py-2 rounded-lg hover:border-gray-600">
                        <i class="fa-solid fas fa-calendar-alt"></i>
                        <a target="_blank" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk"
                            class="text-sm font-display md:font-medium">
                            SCHEDULE MEETING
                        </a>
                    </button>
                </div>
            </nav>
            <div class="flex flex-col md:flex-row gap-5 pt-12 lg:pt-10">
                <div class="w-full max-w-4xl bg-white mx-auto p-4 md:p-8 shadow-lg rounded-lg">
                    <h1 class="text-xl md:text-3xl font-bold text-center text-gray-900 mb-4">
                        5 Proven Ways to Enhance Online Order Profitability and Drive More Revenue for Your Restaurant
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 my-10">
                        As digital ordering continues to gain momentum, it’s essential for restaurants to optimize their strategies to increase profitability and capture more revenue. With higher operational costs, fees from third-party platforms, and increasing competition, a targeted approach can make all the difference. Here are five proven strategies that restaurant owners can implement to maximize online order profitability and drive more revenue.
                    </p>

                    <div>
                        <div>
                            <ul class="text-gray-700 text-lg mb-10">
                                <li id="section1" class="my-10">
                                    <span class="text-xl font-bold">1. Optimize Your Online Menu for Higher Margins </span>
                                    <p class="mt-2">One of the most effective ways to boost profitability is by carefully designing your online menu. Highlight high-margin items, offer bundled deals, and strategically price menu items to encourage upselling and cross-selling.</p>
                                    <ul class="list-disc pl-4 space-y-2 mt-2">
                                        <li><span class="font-bold">Menu Engineering:</span> Feature dishes with the highest profit margins prominently and use attractive images and descriptions to draw attention.</li>
                                        <li><span class="font-bold">Bundle Offers:</span> Offer combination deals like “Meal for Two” or “Family Pack” to increase the average order value.</li>
                                        <li><span class="font-bold">Low-Profit Items:</span> Consider removing items with low margins or high preparation costs, focusing on dishes that yield a better return.</li>
                                    </ul>
                                </li>

                                <li id="section2" class="my-10">
                                    <span class="text-xl font-bold">2. Implement Strategic Pricing and Promotions</span>
                                    <p class="mt-2">Pricing plays a critical role in profitability. Implement dynamic pricing strategies for peak hours, offer discounts to incentivize bulk orders, and promote exclusive online-only offers.</p>
                                    <ul class="list-disc pl-4 space-y-2 mt-2">
                                        <li><span class="font-bold">Dynamic Pricing:</span> Adjust pricing during peak hours or weekends to reflect higher demand.</li>
                                        <li><span class="font-bold">Limited-Time Offers:</span> Use limited-time discounts or buy-one-get-one (BOGO) deals to drive urgency and increase sales.</li>
                                        <li><span class="font-bold">Targeted Promotions:</span> Offer exclusive promotions for customers who order directly through your app or website instead of third-party platforms, reducing commission fees.</li>
                                    </ul>
                                </li>

                                <li id="section3" class="mb-10">
                                    <span class="text-xl font-bold">3. Leverage Data-Driven Marketing</span>
                                    <p class="mt-2">Data analytics is a game-changer in the digital age. Use insights from your online ordering system to understand customer behavior, preferences, and trends.</p>
                                    <ul class="list-disc pl-4 space-y-2 mt-2">
                                        <li><span class="font-bold">Personalized Marketing:</span> Send personalized offers and promotions based on customers’ past orders.</li>
                                        <li><span class="font-bold">Predictive Analytics:</span> Use predictive analytics to forecast demand for specific items and adjust inventory and promotions accordingly.</li>
                                        <li><span class="font-bold">Customer Segmentation:</span> Segment your customers into groups (e.g., frequent buyers, weekend customers) and target each group with tailored messaging. </li>
                                    </ul>
                                </li>

                                <li id="section4" class="my-10">
                                    <span class="text-xl font-bold">4. Improve the User Experience on Your Ordering Platform </span>
                                    <p class="mt-2">A seamless, intuitive ordering experience can significantly reduce cart abandonment and boost sales. Make sure your platform is user-friendly, visually appealing, and optimized for mobile devices.</p>
                                    <ul class="list-disc pl-4 space-y-2 mt-2">
                                        <li><span class="font-bold">Simplified Checkout Process:</span> Minimize the number of steps in the checkout process and offer guest checkout options.</li>
                                        <li><span class="font-bold">Clear Navigation and Search:</span> Ensure customers can easily find items and navigate the menu.</li>
                                        <li><span class="font-bold">Responsive Design:</span> Optimize your website for mobile devices to cater to customers ordering on the go.</li>
                                    </ul>
                                </li>

                                <li id="section5" class="my-10">
                                    <span class="text-xl font-bold">5. Use Loyalty Programs to Drive Repeat Business</span>
                                    <p class="mt-2">Loyalty programs are a powerful tool to boost profitability and ensure long-term growth. Implement a points-based loyalty program, offer exclusive rewards, and create a VIP program for your top customers. </p>
                                    <ul class="list-disc pl-4 space-y-2 mt-2">
                                        <li><span class="font-bold">Points-Based Rewards:</span> Offer points for every dollar spent, which can be redeemed for discounts or free items.</li>
                                        <li><span class="font-bold">Exclusive Online Rewards:</span> Provide special discounts or freebies that are only available for online orders. </li>
                                        <li><span class="font-bold">Tiered Loyalty Programs:</span> Implement tier-based rewards, where customers unlock better perks the more they spend.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 lg:w-1/2 xl:w-1/3 sticky top-0 overflow-hidden" style={{ maxHeight: "220vh" }}>
                    <div class="bg-white rounded-2xl p-3 xl:p-6 shadow-md">
                        <div class="flex items-center mb-4">
                            <img src={profilePicture} alt="Author" class="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h3 class="font-bold text-lg">Amit Lakahani</h3>
                                <p class="text-gray-500">CEO & Founder of <br /> Tryzen Solution</p>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-700 mb-2">In This Article</h4>
                            <ul class="text-gray-600 space-y-2">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <ScrollLink
                                            to={section.id}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            offset={-70}
                                            className="block font-medium hover:text-blue-600 cursor-pointer"
                                            activeClass="text-blue-600 font-bold"
                                        >
                                            {section.label}
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                            <button
                                href="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                class="flex items-center text-white font-semibold mt-4 border border-gray-400 py-2 px-4 rounded-full"
                                style={{ backgroundColor: "#29A71A" }}
                            >
                                <img src={whatsapp} alt="Industry Trends" class="mr-2" style={{ height: "20px" }} />
                                <span>CHAT WITH US</span>
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl p-3 xl:p-6 shadow-md mt-6 md:mt-8">
                        <div class="text-center">
                            <div class="flex flex-row items-center justify-between">
                                <div>
                                    <img src={smallLogo} alt="Tryzen Solution Logo"
                                        class="w-12 h-12 rounded-full mx-auto mb-4" />
                                </div>
                                <div>
                                    <div class="flex justify-around items-center gap-2 xl:gap-4 text-sm mb-4">
                                        <div>
                                            <span class="font-bold text-lg">24</span>
                                            <p>posts</p>
                                        </div>
                                        <div>
                                            <span class="font-bold text-lg">55</span>
                                            <p>followers</p>
                                        </div>
                                        <div>
                                            <span class="font-bold text-lg">1</span>
                                            <p>following</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <h3 class="font-bold text-xl">TryzenSolution</h3>
                            <p class="mt-2 font-semibold">We help to create <span class="text-pink-500">🎁</span> E-commerce &
                                restaurant owners to create website and application to <span class="text-green-500">🚀</span>
                                grow business <span class="text-blue-500">💻</span>.</p>
                        </div>
                        <div class="grid grid-cols-3 gap-2 mt-4">
                            <img src={require('../../assets/s1.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s2.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s3.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s4.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s5.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s6.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s7.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s8.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s9.webp')} alt="Portfolio Image" class="w-full h-full rounded-md shadow-sm" />
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl p-3 xl:p-6 shadow-md mt-6 md:mt-8">
                        <h3 class="font-bold text-lg mb-4">Other Important Blogs</h3>
                        <ul class="space-y-4">
                            <li class="flex">
                                <Link to="/increase-sales" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/buisness3.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to Increase Sales and Traffic to Maximize Profits in Your Restaurant Business</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/grow-offline" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/two.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to i start growing Offline business to Online my
                                            Restaurant’s First Online Ordering Platform</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/ensure-consistency" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/three.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to Ensure Consistency in Online Orders Across Multiple
                                            Restaurant Locations</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/brand-experience" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/four.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">Creating a Unified Brand Experience: Connecting Your
                                            Restaurant’s Online and Offline Presence</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/future-shaping" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/five.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How Technology is Shaping the Future of the and how Trends
                                            Redefining Restaurant Industry</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/online-reputation" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/six.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">Boost Your Restaurant’s Online Reputation: How to Ask for
                                            Reviews Without Sounding Pushy</h4>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
