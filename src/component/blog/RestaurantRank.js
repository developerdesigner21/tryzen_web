import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function RestaurantRank() {

    const sections = [
        { id: "section1", label: "Optimize Your Google My Business Profile" },
        { id: "section2", label: "Data-Driven Decision Making with AI and Analytics" },
        { id: "section3", label: "The Rise of Ghost Kitchens and Virtual Brands" },
        { id: "section4", label: "Leverage Technology for Real-Time Monitoring and Adjustments" },
        { id: "section5", label: "Virtual and Augmented Reality for Enhanced Experiences" },
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
                    <h1 class="text-2xl md:text-xl font-bold text-center text-gray-900 mb-10">
                        The Ultimate Guide How to Rank my Restaurant on google. for SEO and also, User-Generated Content that help to Improve SEO</h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        For restaurant owners, ranking high on Google is essential for attracting new customers and increasing online orders. With most people searching online for dining options, having a strong SEO strategy can make the difference between a busy restaurant and one with empty tables. In this guide, we’ll walk you through step-by-step strategies to boost your restaurant’s Google rankings using SEO techniques and how user-generated content can further enhance your visibility and credibility.
                    </p>
                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                1. Optimize Your Google My Business Profile
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Your Google My Business (GMB) profile is one of the most powerful tools for local SEO. An optimized GMB listing not only improves your restaurant’s visibility in local searches but also makes it easier for potential customers to find essential information like your address, hours, and contact details.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Claim and Verify Your GMB Listing:</span> If you haven’t claimed your business on Google, do so immediately. Once claimed, ensure that all information is accurate and up-to-date.</li>
                                <li><span class="font-semibold">Add High-Quality Images:</span> Upload professional photos of your restaurant’s interior, exterior, popular dishes, and staff. This not only makes your profile more appealing but also helps build trust with potential customers.</li>
                                <li><span class="font-semibold">Include Relevant Keywords in Your Description:</span> Use keywords like “Italian restaurant in [City]” or “best seafood near me” in your business description, services, and attributes to increase relevance.</li>
                                <li><span class="font-semibold">Encourage Customer Reviews:</span> Positive reviews can boost your local rankings. Respond to reviews promptly and politely to show that you value customer feedback.</li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                2. Data-Driven Decision Making with AI and Analytics
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-2">
                                Data has become a powerful asset for restaurants. Leveraging data analytics and AI-powered tools, restaurant owners can gain insights into customer behavior, optimize menus, and streamline operations.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 mb-8">
                                <li><span class="font-semibold">Customer Insights:</span> AI tools can analyze ordering patterns, peak dining times, and customer preferences to predict demand and customize marketing strategies.</li>
                                <li><span class="font-semibold">Operational Efficiency:</span> Analytics can help reduce food waste by tracking inventory and predicting sales trends. AI can also be used to automate scheduling and optimize staff allocation.</li>
                                <li><span class="font-semibold">Personalization:</span> Data-driven insights allow restaurants to create personalized experiences, such as recommending dishes based on previous orders or sending targeted promotions.</li>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                3. The Rise of Ghost Kitchens and Virtual Brands
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Ghost kitchens (also known as cloud kitchens) are commercial kitchens set up specifically for fulfilling online orders, without a physical storefront for dine-in customers. This trend is disrupting the traditional restaurant model and enabling entrepreneurs to launch virtual brands with minimal investment.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Benefits:</span> Ghost kitchens reduce overhead costs, eliminate the need for prime real estate, and allow for multiple brands to operate out of a single kitchen.</li>
                                <li><span class="font-semibold">Impact on the Industry:</span> The flexibility and scalability of ghost kitchens have paved the way for rapid experimentation and expansion of new restaurant concepts.</li>
                                <li><span class="font-semibold">Future Outlook:</span> Ghost kitchens are expected to grow as more restaurants explore digital-first business models, focusing on delivery-only concepts and menu innovation.</li>
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
                                <li><span class="font-semibold">Use Real-Time Order Tracking:</span> Implement real-time order tracking for customers and staff to monitor the progress of orders. This transparency helps ensure that orders are prepared and delivered on time.</li>
                                <li><span class="font-semibold">Integrate Feedback Systems:</span> Set up a system to collect customer feedback for each location. Use this data to identify inconsistencies and take corrective action immediately.</li>
                                <li><span class="font-semibold">Invest in Inventory Management Tools:</span> Use inventory management software that syncs across all locations. This ensures that each branch has the ingredients they need to prepare orders correctly.</li>
                            </ul>
                        </div>

                        <div id="section5">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                5. Virtual and Augmented Reality for Enhanced Experiences
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
                                <Link to="/increase-sales" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/buisness3.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to Increase Sales and Traffic to Maximize Profits in Your Restaurant Business</h4>
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
