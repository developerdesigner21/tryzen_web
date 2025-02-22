import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function FutureShaping() {

    const sections = [
        { id: "section1", label: "Rise of Online Ordering and Delivery Services" },
        { id: "section2", label: "Cloud Kitchens and Virtual Restaurants" },
        { id: "section3", label: "AI and Automation in Restaurant Operations" },
        { id: "section4", label: "Enhanced Customer Experience through Personalization" },
        { id: "section5", label: "Data Analytics for Better Decision-Making" },
        { id: "section6", label: "Cloud-Based POS Systems and Digital Management Toolss" },
        { id: "section7", label: "Conclusion" },
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
            <div className="flex flex-col md:flex-row gap-5 xl:gap-10 pt-12 lg:pt-10">
                <div class="w-full max-w-4xl bg-white mx-auto p-4 md:p-8 shadow-lg rounded-lg">
                    <h1 class="text-xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                        How Technology is Shaping the Future of the and how Trends Redefining Restaurant Industry            </h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        The restaurant industry has seen tremendous change in recent years, with technology emerging as a major force that is redefining how restaurants operate, engage with customers, and manage their day-to-day activities. From online ordering and AI-powered automation to cloud kitchens and digital payments, technology is making the industry more efficient and customer-focused. This post explores key trends and innovations that are shaping the future of the restaurant industry and how they are creating new opportunities for growth and profitability.
                    </p>
                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                1. Rise of Online Ordering and Delivery Services
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                The demand for online ordering and delivery has skyrocketed, reshaping the traditional dining experience. This trend is set to grow even further as more customers prefer convenience and contactless services. Technology platforms like Grubhub, Zomato, Swiggy, and UberEats are making it easier for restaurants to reach customers far beyond their physical locations.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Benefits:</span> Increased order volumes, ability to reach a wider audience, and opportunities to optimize the menu based on data-driven insights.</li>
                                <li><span class="font-semibold">Key Considerations:</span> Restaurants must integrate online ordering into their business strategy and optimize their digital presence for a seamless experience.</li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                2. Cloud Kitchens and Virtual Restaurants
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Cloud kitchens, also known as ghost kitchens, are kitchens set up specifically to cater to online orders, without the need for a dine-in option. These are allowing restaurants to expand their operations at a fraction of the cost. Similarly, virtual restaurants focus solely on delivery, using existing kitchen spaces to create new concepts.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Benefits:</span> Lower operational costs, higher flexibility, and the ability to test new concepts quickly.</li>
                                <li><span class="font-semibold">Trends:</span> Many traditional restaurants are shifting towards hybrid models, combining dine-in and delivery-only concepts under the same roof.</li>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                3. AI and Automation in Restaurant Operations
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                AI and automation are transforming how restaurants manage operations, from order processing to kitchen management and customer service. AI can predict peak times, optimize staffing, and even suggest menu changes based on customer preferences.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Benefits:</span> Greater efficiency, reduced labor costs, and data-driven decision-making.</li>
                                <li><span class="font-semibold">Examples:</span> AI-powered chatbots for handling reservations and inquiries, robots for food preparation, and automated delivery systems for last-mile delivery.</li>
                            </ul>
                        </div>

                        <div id="section4">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                4. Enhanced Customer Experience through Personalization
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Data is now at the heart of many restaurant decisions. With technology collecting vast amounts of data on customer behavior, order patterns, and menu performance, restaurants can make more informed decisions to enhance their profitability.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Benefits:</span> Ability to optimize menus, reduce waste, and improve marketing strategies.</li>
                                <li><span class="font-semibold">Trends:</span> Real-time dashboards and predictive analytics are becoming essential tools for restaurant managers.</li>
                            </ul>
                        </div>

                        <div id="section5">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                5. Data Analytics for Better Decision-Making
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Data is now at the heart of many restaurant decisions. With technology collecting vast amounts of data on customer behavior, order patterns, and menu performance, restaurants can make more informed decisions to enhance their profitability.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Benefits:</span> Ability to optimize menus, reduce waste, and improve marketing strategies.</li>
                                <li><span class="font-semibold">Trends:</span> Real-time dashboards and predictive analytics are becoming essential tools for restaurant managers.</li>
                            </ul>
                        </div>

                        <div id="section6">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                6. Cloud-Based POS Systems and Digital Management Tools
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Cloud-based point-of-sale (POS) systems are replacing traditional POS setups, offering a range of new capabilities such as real-time data tracking, multi-location management, and easy integration with third-party services. Digital management tools now allow restaurants to streamline everything from employee scheduling to inventory management.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Benefits:</span> Centralized control, enhanced reporting, and simplified operations.</li>
                                <li><span class="font-semibold">Trend:</span> Restaurants are adopting cloud POS systems to stay agile and adapt quickly to changing business needs.</li>
                            </ul>
                        </div>

                        <div id="section7">
                            <h2 class="text-xl md:text-3xl font-bold mt-8 md:mt-16 mb-6">
                                Conclusion
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Technology is not just an option; it’s a necessity for restaurants to thrive in a rapidly evolving market. By embracing digital transformation, restaurants can enhance their operational efficiency, provide better customer experiences, and stay ahead of industry trends. Investing in technology today will set the foundation for a more resilient and profitable restaurant business in the future.
                            </p>
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
                                <Link href="/online-ordering" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/two.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">Step-by-Step Guide How to Prepare Your Restaurant for Seamless Online Ordering Integration</h4>
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
                                <Link to="/online-shift" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/five.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How Restaurants Can Compete with online Shifting of Consumer and there Preferences</h4>
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
