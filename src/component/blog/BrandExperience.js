import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function BrandExperience() {

    const sections = [
        { id: "section1", label: "Why a Unified Brand Experience Matters" },
        { id: "section2", label: "Align Your Visual Identity Across Channels" },
        { id: "section3", label: "Integrate Your Online and Offline Loyalty Programs" },
        { id: "section4", label: "Leverage Technology for Real-Time Monitoring and Adjustments" },
        { id: "section5", label: "Personalize Customer Interactions Across All Channels" },
    ];

    return (
        <div class="bg-gray-100 p-4 md:p-10 xl:p-16">
            <nav class="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
                <Link to="/" id="brand" class="hidden lg:flex gap-2 items-center flex-1">
                    <img class="object-cover" src={mainLogo} alt="Logo" style={{ height: "2rem" }} />
                </Link>
                <Link to="/" id="brand" class="lg:hidden gap-2 items-center flex-1">
                    <img class="object-cover" src="./assets/smallLogo.webp" alt="Logo" style={{ height: "2rem" }} />
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
                    <h1 class="text-xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                        Creating a Unified Brand Experience: Connecting Your Restaurant’s Online and Offline Presence
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        In today’s competitive market, restaurants need to ensure that their customers receive the same brand experience whether they are dining in, ordering online, or interacting with the business on social media. A unified brand experience not only boosts customer loyalty but also helps build a consistent and recognizable identity. This blog will explore actionable strategies to connect your restaurant’s online and offline presence, ensuring a seamless and cohesive experience across all touchpoints.
                    </p>

                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                1. Why a Unified Brand Experience Matters
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                A unified brand experience creates consistency, familiarity, and trust. Customers who interact with your brand in multiple ways—such as in-store dining, online ordering, and social media engagement—expect the same level of quality, service, and messaging. Discrepancies in experience can lead to confusion and disengagement, ultimately affecting your bottom line.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Builds Brand Loyalty:</span> A consistent experience across all channels fosters customer loyalty and encourages repeat business.</li>
                                <li><span class="font-semibold">Enhances Recognition:</span> When your brand elements, such as logos, colors, and tone, are consistent, it’s easier for customers to recognize and remember your restaurant.</li>
                                <li><span class="font-semibold">Increases Customer Satisfaction:</span> Providing a uniform experience ensures that customers know what to expect, whether they’re ordering online or visiting your restaurant.</li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                2. Align Your Visual Identity Across Channels
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                The visual identity of your restaurant is one of the most powerful tools in creating a unified brand experience. Ensure that your logo, color scheme, typography, and imagery are consistent across all platforms.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Use the Same Branding Elements:</span> Keep your logo, brand colors, and fonts the same across your website, social media pages, menus, and in-store signage.</li>
                                <li><span class="font-semibold">Create a Brand Style Guide:</span> Develop a comprehensive style guide that outlines how your brand elements should be used in different scenarios. This guide should be shared with everyone involved in your restaurant’s marketing and operations.</li>
                                <li><span class="font-semibold">Match Digital and In-Store Aesthetics:</span>  If your restaurant has a particular ambiance—such as a rustic, modern, or casual vibe—reflect that aesthetic in your online presence through visuals, website design, and social media content.</li>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                3. Integrate Your Online and Offline Loyalty Programs
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Loyalty programs are a powerful way to drive repeat business and build customer relationships. However, many restaurants struggle with integrating their online and offline loyalty programs, leading to a disjointed experience.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Implement a Unified Loyalty Program:</span>  Use a loyalty program that works seamlessly both in-store and online. Customers should be able to earn and redeem points regardless of how they interact with your brand.</li>
                                <li><span class="font-semibold">Use Technology to Track Customer Interactions:</span>  Leverage technology to track customer interactions across all channels. This allows you to personalize offers based on their preferences and order history.</li>
                                <li><span class="font-semibold">Promote Your Loyalty Program Consistently:</span>  Ensure that customers are aware of the loyalty program through in-store signage, your website, and social media channels. Use the same visuals and messaging to reinforce the program’s benefits.</li>
                            </ul>
                        </div>

                        <div id="section4">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                4. Leverage Technology for Real-Time Monitoring and Adjustments
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Technology can help you monitor, analyze, and adjust processes in real-time, making it easier to maintain consistency.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Use Real-Time Order Tracking:</span>  Implement real-time order tracking for customers and staff to monitor the progress of orders. This transparency helps ensure that orders are prepared and delivered on time.</li>
                                <li><span class="font-semibold">Integrate Feedback Systems:</span> Set up a system to collect customer feedback for each location. Use this data to identify inconsistencies and take corrective action immediately.</li>
                                <li><span class="font-semibold">Invest in Inventory Management Tools:</span>  Use inventory management software that syncs across all locations. This ensures that each branch has the ingredients they need to prepare orders correctly.</li>
                            </ul>
                        </div>

                        <div id="section5">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                5. Personalize Customer Interactions Across All Channels
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Personalization is key to creating a memorable brand experience. Use data and technology to personalize customer interactions, whether they’re ordering online, visiting in person, or engaging on social media.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Use Customer Data for Personalized Offers:</span> Leverage order history and preferences to send personalized offers via email or through your app. Ensure these offers are consistent and can be redeemed both online and in-store.</li>
                                <li><span class="font-semibold">Create a Seamless Omnichannel Experience:</span> Allow customers to start an interaction on one channel (e.g., placing an order online) and continue it on another (e.g., picking up the order in-store) without losing context.</li>
                                <li><span class="font-semibold">Reward Customer Loyalty Across Channels:</span> Ensure that loyalty points, rewards, and offers are valid both online and offline, providing a unified experience regardless of how the customer engages with your brand.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 lg:w-1/2 xl:w-1/3 sticky top-0 overflow-hidden" style={{ maxHeight: "225vh" }}>
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
                                <Link to="/enhance-order" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/buisness3.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">5 Proven Ways to Enhance Online Order Profitability and Drive More Revenue for Your Restaurant</h4>
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
                                <Link to="/brand-journey" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/four.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">Creating a Seamless Brand Journey for Customers: Online Ordering to In-Store Dining</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/online-shift" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/five.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How Restaurants Can Compete with online Shifting of Consumer and there Preferences</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/restaurant-rank" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/six.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">The Ultimate Guide How to Rank my Restaurant on google. for SEO and also, User-Generated Content that help to Improve SEO</h4>
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
