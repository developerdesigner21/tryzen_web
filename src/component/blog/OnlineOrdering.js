import React from 'react';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

export default function OnlineOrdering() {

    const sections = [
        { id: "section1", label: "Assess Your Current Setup and Define Your Goals" },
        { id: "section2", label: "Optimize Your Menu for Digital Ordering" },
        { id: "section3", label: "Set Up a Reliable Order Management System" },
        { id: "section4", label: "Train Your Staff" },
        { id: "section5", label: "Set Up Delivery and Pickup Options" },
        { id: "section6", label: "Implement Marketing Strategies to Promote the Launch" },
        { id: "section7", label: "Monitor Performance and Gather Feedback" },
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
                        Step-by-Step Guide How to Prepare Your Restaurant for Seamless Online Ordering Integration
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 my-10">
                        As restaurants shift towards digital solutions, online ordering has become a crucial part of business strategy. However, transitioning to an online ordering platform can be challenging without the right preparation. This step-by-step guide will help restaurant owners prepare for a seamless integration, ensuring a smooth transition from offline to online ordering.
                    </p>

                    <div id="section1" class="mb-8">
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Step 1: Assess Your Current Setup and Define Your Goals</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Before diving into online ordering, evaluate your current operations and define clear goals for the integration.
                        </p>
                        <ul class="list-disc text-lg pl-6 text-gray-700 space-y-2">
                            <li><span class="font-bold">Evaluate Your Existing Processes:</span> Take a close look at your current order-taking, kitchen, and delivery processes. Identify areas that need improvement.</li>
                            <li><span class="font-bold">Set Goals:</span> Decide on specific objectives—such as increasing order volume, reducing dependency on third-party platforms, or improving customer satisfaction.</li>
                            <li><span class="font-bold">Choose the Right Online Ordering Platform:</span> Research and choose a platform that fits your restaurant’s size, menu complexity, and budget. Consider whether you want an in-house system or a third-party provider.</li>
                        </ul>
                    </div>

                    <div id="section2" class="mb-8">
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Step 2: Optimize Your Menu for Digital Ordering</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Your menu is the core of your online ordering platform. Ensure it is designed for easy navigation and profitability.
                        </p>
                        <ul class="list-disc text-lg pl-6 text-gray-700 space-y-2">
                            <li><span class="font-bold">Create a Digital-Friendly Menu:</span> Simplify your menu by featuring items that are easy to deliver and have a high-profit margin. Exclude dishes that don’t travel well.</li>
                            <li><span class="font-bold">Use High-Quality Visuals and Descriptions:</span> Include enticing photos and clear, concise descriptions for each item. This can boost customer confidence and increase order volume.</li>
                            <li><span class="font-bold">Highlight Bestsellers and Promotions:</span> Use tags like “Customer Favorite” or “Chef’s Special” to draw attention to specific items.</li>
                        </ul>
                    </div>

                    <div id="section3" class="mb-8">
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Step 3: Set Up a Reliable Order Management System</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            A smooth order management system is essential for handling online orders efficiently and minimizing errors.
                        </p>
                        <ul class="list-disc text-lg pl-6 text-gray-700 space-y-2">
                            <li><span class="font-bold">Integrate with Your POS System:</span> Ensure your online ordering system integrates seamlessly with your existing POS for real-time order updates, inventory management, and better reporting.</li>
                            <li><span class="font-bold">Enable Real-Time Notifications:</span> Set up notifications to alert your staff about new orders instantly to maintain a quick service time.</li>
                            <li><span class="font-bold">Test the System:</span> Run multiple test orders to identify any issues and ensure that orders flow smoothly from the customer to the kitchen and delivery team.</li>
                        </ul>
                    </div>

                    <div id="section4" class="mb-8">
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Step 4: Train Your Staff</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            A successful integration depends on your team’s ability to handle online orders effectively.
                        </p>
                        <ul class="list-disc text-lg pl-6 text-gray-700 space-y-2">
                            <li><span class="font-bold">Educate Staff on the New System:</span> Provide training sessions to ensure that all team members know how to manage the system, update inventory, and handle special requests.</li>
                            <li><span class="font-bold">Create a Digital Ordering SOP:</span> Establish a standard operating procedure (SOP) for processing online orders, including order acceptance, preparation, packaging, and delivery.</li>
                            <li><span class="font-bold">Handle Customer Service for Online Orders:</span> Train staff on how to resolve common issues such as order delays or incorrect items, ensuring a positive customer experience.</li>
                        </ul>
                    </div>

                    <div id="section5" class="mb-8">
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Step 5: Set Up Delivery and Pickup Options</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Delivery and pickup logistics are crucial to the success of your online ordering platform.
                        </p>
                        <ul class="list-disc text-lg pl-6 text-gray-700 space-y-2">
                            <li><span class="font-bold">Choose Between In-House or Third-Party Delivery:</span> Decide if you’ll use your own delivery drivers or partner with a third-party delivery service. Each option has its pros and cons in terms of cost and control.</li>
                            <li><span class="font-bold">Create a Dedicated Pickup Area:</span> Set up a designated pickup area for customers to collect their orders quickly and easily.</li>
                            <li><span class="font-bold">Optimize Delivery Zones and Fees:</span> Determine your delivery zones and set delivery fees that balance profitability and customer satisfaction.</li>
                        </ul>
                    </div>

                    <div id="section6" class="mb-8">
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Step 6: Implement Marketing Strategies to Promote the Launch</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Once your system is ready, it’s time to spread the word and attract customers to your online platform.
                        </p>
                        <ul class="list-disc text-lg pl-6 text-gray-700 space-y-2">
                            <li><span class="font-bold">Announce the Launch on Social Media:</span> Use platforms like Facebook, Instagram, and Twitter to announce the launch. Include a clear call-to-action and link to your ordering platform.</li>
                            <li><span class="font-bold">Offer Exclusive Online-Only Deals:</span> Use discounts, BOGO offers, or free delivery for first-time online customers to generate excitement.</li>
                            <li><span class="font-bold">Leverage Email and SMS Marketing:</span> Send announcements to your existing customer base with incentives to try the new platform.</li>
                        </ul>
                    </div>

                    <div id="section7" class="mb-8">
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Step 7: Monitor Performance and Gather Feedback</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            After the launch, it’s critical to monitor performance and gather customer feedback to refine the online ordering experience.
                        </p>
                        <ul class="list-disc text-lg pl-6 text-gray-700 space-y-2">
                            <li><span class="font-bold">Track Key Metrics:</span> Measure metrics like order volume, average order value, and customer satisfaction. This data will help you identify trends and areas for improvement.</li>
                            <li><span class="font-bold">Collect Customer Feedback:</span> Use surveys or follow-up emails to gather feedback on the ordering experience. Listen to your customers and implement changes based on their suggestions.</li>
                            <li><span class="font-bold">Adjust and Scale:</span> Based on performance, consider adding new features like loyalty programs, mobile apps, or expanding delivery zones to scale your online ordering system.</li>
                        </ul>
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
                                <Link to="/plateform" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/two.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to Choose the Right Online Ordering Platform like Wordpress, Shopify or customs solution</h4>
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
