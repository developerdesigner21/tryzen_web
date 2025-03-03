import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function OptimizeOperation() {

    const sections = [
        { id: "section1", label: "Centralise Online Order Management Across All Locations" },
        { id: "section2", label: "Implement Location-Based Menu Customization" },
        { id: "section3", label: "Optimize Inventory Management and Supply Chain Coordination" },
        { id: "section4", label: "Streamline Delivery and Pickup Logistics" },
        { id: "section5", label: "Maintain Consistency in Branding and Customer Experience" },
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
                        How to Optimise Operations for Multi-Location Restaurants with Online Ordering
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        Managing a multi-location restaurant chain comes with its unique set of challenges. With different locations operating under the same brand, ensuring consistency in service quality, menu management, and order fulfillment can be daunting. Adding an online ordering system into the mix further complicates operations. However, with the right strategies, restaurant owners can streamline processes, reduce costs, and offer a consistent experience across all locations. This guide will provide actionable tips to optimize operations for multi-location restaurants with online ordering.
                    </p>

                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                1. Centralise Online Order Management Across All Locations
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                One of the most effective ways to optimize operations for multi-location restaurants is to implement a centralized online order management system. A single dashboard that consolidates orders from all locations helps streamline workflows and ensures consistency.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Use a Unified POS System:</span> Choose a POS system that integrates seamlessly with your online ordering platform and can handle multi-location management. A unified system allows you to view sales, inventory, and order statuses for each location in real-time.</li>
                                <li><span class="font-semibold">Centralize Menu Management:</span> Create and update menus from a central location to ensure consistency across all branches. This prevents discrepancies in pricing or item availability, providing a uniform customer experience.</li>
                                <li><span class="font-semibold">Automate Order Routing:</span> Use automation tools to route orders to the correct location based on the customer’s address. This reduces manual errors and ensures that the nearest location fulfills the order, speeding up delivery times.</li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                2. Implement Location-Based Menu Customization
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Different locations might have unique menu offerings based on local preferences or ingredient availability. Optimize your online ordering platform to support location-specific menus while maintaining the brand’s overall look and feel.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Dynamic Menus for Each Location:</span> Use an online ordering system that allows you to set up dynamic menus for different locations. For example, a seafood specialty may be available at coastal locations but not in inland branches.</li>
                                <li><span class="font-semibold">Location-Based Pricing Adjustments:</span> Adjust pricing based on local demand, costs, or promotional strategies. This flexibility ensures that each location can optimize profitability without affecting the overall brand perception.</li>
                                <li><span class="font-semibold">Highlight Local Specials and Offers:</span> Promote location-specific deals and special items directly on your online ordering platform to encourage more orders from nearby customers.</li>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                3. Optimize Inventory Management and Supply Chain Coordination
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                For multi-location restaurants, coordinating inventory and supply chain logistics is a crucial factor in maintaining smooth operations. Implementing an integrated system that provides visibility across all locations will help prevent stockouts and overstocking.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Real-Time Inventory Syncing:</span> Use a platform that syncs inventory in real-time across all locations. This prevents over-ordering, minimizes waste, and ensures that customers always see accurate stock levels when ordering online.</li>
                                <li><span class="font-semibold">Centralized Supplier Management:</span> Manage suppliers and procurement centrally for bulk purchasing and cost savings. Use the system to track deliveries and inventory movement between locations.</li>
                                <li><span class="font-semibold">Implement Inventory Alerts:</span> Set up automated alerts for low-stock items to ensure that popular menu items are always available and can be restocked before running out.</li>
                            </ul>
                        </div>

                        <div id="section4">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                4. Streamline Delivery and Pickup Logistics
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Managing delivery and pickup for multiple locations requires a well-coordinated logistics strategy. Optimize your delivery operations to reduce costs, improve efficiency, and provide a superior customer experience.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Use Smart Delivery Routing:</span>  Implement smart delivery routing software that assigns deliveries to drivers based on their location, order load, and traffic conditions. This ensures faster delivery times and reduces fuel costs.</li>
                                <li><span class="font-semibold">Enable Curbside Pickup and In-Store Pickup Options:</span>  Offer convenient pickup options for customers, allowing them to choose the nearest location for in-store or curbside pickup. Clearly indicate the pickup location during the order process.</li>
                                <li><span class="font-semibold">Coordinate with Third-Party Delivery Services:</span>  For locations without in-house delivery drivers, partner with local third-party delivery services to extend your reach without investing in a delivery fleet.</li>
                            </ul>
                        </div>

                        <div id="section5">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                5. Maintain Consistency in Branding and Customer Experience
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                With multiple locations, maintaining a consistent brand experience is crucial. Customers should receive the same quality of service and food regardless of which branch they order from. Use the following strategies to ensure consistency:
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Standardize Training for Staff:</span> Implement a standardized training program across all locations to ensure that staff members are well-versed in handling online orders, customer inquiries, and delivery processes.</li>
                                <li><span class="font-semibold">Use a Centralized Brand Guideline:</span>  Develop a brand guideline that covers everything from menu presentation to packaging design. This ensures that customers receive the same experience regardless of location.</li>
                                <li><span class="font-semibold">Provide Uniform Customer Support:</span> Use a centralized support team to handle customer inquiries, complaints, and feedback. This helps maintain a consistent voice and resolution process across all locations.</li>
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
                                <Link to="/order-blog" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/buisness3.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to avoid 3rd party delivery charge and i can my Save 25% Delivery Costs for my Restaurant.</h4>
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
