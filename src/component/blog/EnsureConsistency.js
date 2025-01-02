import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function EnsureConsistency() {

    const sections = [
        { id: "section1", label: "Standardise Your Menu and Item Descriptions" },
        { id: "section2", label: "Implement Consistent Order Fulfillment Processes" },
        { id: "section3", label: "Centralize Order Management with Integrated Systems" },
        { id: "section4", label: "Leverage Technology for Real-Time Monitoring and Adjustments" },
        { id: "section5", label: "Leverage Technology for Real-Time Monitoring and Adjustments" },
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
                        How to Ensure Consistency in Online Orders Across Multiple Restaurant Locations
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        Maintaining consistency across multiple restaurant locations is crucial for building a strong brand identity and providing a reliable customer experience. When it comes to online orders, consistency is even more important because customers expect the same quality, accuracy, and speed regardless of which location they order from. This blog will outline strategies for ensuring that your multi-location restaurant delivers consistent online orders every time.            </p>

                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-6">
                                1. Standardise Your Menu and Item Descriptions
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                One of the first steps to ensuring consistency is to standardize your menu across all locations. Whether customers order from your main branch or a remote location, the menu should have the same look, feel, and offerings.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Create a Centralized Menu:</span> Use a central menu management system to maintain uniformity. Make updates centrally and push them to all locations simultaneously.</li>
                                <li><span class="font-semibold">Use Consistent Item Names and Descriptions:</span> Ensure that the names, descriptions, and visuals for each item are the same across locations. This avoids confusion and creates a uniform customer experience.</li>
                                <li><span class="font-semibold">Set Standard Portion Sizes:</span> Implement standardized portion sizes and ingredients for each dish. This ensures that customers receive the same quantity and quality regardless of location.</li>
                                <li><span class="font-semibold">Adapt for Local Preferences:</span> While consistency is key, allow for minor variations to accommodate local tastes if necessary. For example, add a "regional favorites" section to the menu.</li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-6">
                                2. Implement Consistent Order Fulfillment Processes
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                A standardized order fulfillment process ensures that orders are handled the same way across all branches, minimizing the chances of errors and inconsistencies.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Create Standard Operating Procedures (SOPs):</span> Develop SOPs that outline every step of the order fulfillment process—from order acceptance and preparation to packaging and delivery. Train staff at all locations on these procedures.</li>
                                <li><span class="font-semibold">Use Consistent Packaging:</span> Implement standardized packaging materials, labels, and instructions to maintain uniformity. This includes branded boxes, bags, and order inserts like thank-you notes or promotional flyers.</li>
                                <li><span class="font-semibold">Establish Quality Control Measures:</span> Set up a quality control checklist that staff must complete before sending out an order. This includes checking for correct items, packaging, and presentation.</li>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-6">
                                3. Centralize Order Management with Integrated Systems
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Managing online orders centrally is crucial for ensuring that orders are routed, prepared, and fulfilled correctly across all locations.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Use a Unified Order Management System:</span> Implement a cloud-based order management system that integrates with your POS, kitchen management, and delivery platforms. This system should provide real-time visibility into orders at all locations.</li>
                                <li><span class="font-semibold">Automate Order Routing:</span> Use order routing software to automatically direct orders to the correct location based on the customer’s address. This reduces manual errors and speeds up the order fulfillment process.</li>
                                <li><span class="font-semibold">Monitor Order Metrics Across Locations:</span> Track key metrics like average preparation time, delivery time, and customer satisfaction for each location. This helps identify inconsistencies and areas for improvement.</li>
                            </ul>
                        </div>

                        <div id="section4">
                            <h2 class="text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-6">
                                4. Leverage Technology for Real-Time Monitoring and Adjustments
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Technology can help you monitor, analyze, and adjust processes in real-time, making it easier to maintain consistency.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Use Real-Time Order Tracking:</span> Implement real-time order tracking for customers and staff to monitor the progress of orders. This transparency helps ensure that orders are prepared and delivered on time.</li>
                                <li><span class="font-semibold">Integrate Feedback Systems:</span> Set up a system to collect customer feedback for each location. Use this data to identify inconsistencies and take corrective action immediately.</li>
                                <li><span class="font-semibold">Invest in Inventory Management Tools:</span> Use inventory management software that syncs across all locations. This ensures that each branch has the ingredients they need to prepare orders correctly.</li>
                            </ul>
                        </div>

                        <div id="section5">
                            <h2 class="text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-6">
                                5. Leverage Technology for Real-Time Monitoring and Adjustments
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                The final touchpoint in the online ordering process is delivery or pickup. A consistent experience here is just as important as food quality and order accuracy.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Set Standard Delivery Protocols:</span> Whether using in-house drivers or third-party services, establish clear delivery protocols for handling food, communicating with customers, and managing delays.</li>
                                <li><span class="font-semibold">Optimize Pickup Processes:</span> Ensure that all locations have a designated area for order pickups, with clear signage and instructions. This minimizes confusion and improves the pickup experience.</li>
                                <li><span class="font-semibold">Maintain Uniform Packaging and Branding:</span> Use the same packaging materials, bags, and delivery notes for every order to maintain brand consistency and a professional appearance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 lg:w-1/2 xl:w-1/3 sticky top-0 overflow-hidden" style={{ maxHeight: "230vh" }}>
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
                                        <h4 class="font-bold text-sm">Step-by-Step Guide How to Prepare Your Restaurant for Seamless Online Ordering Integration</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/optimize-operation" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/three.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to Optimise Operations for Multi-Location Restaurants with Online Ordering</h4>
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
