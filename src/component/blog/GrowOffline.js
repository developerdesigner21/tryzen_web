import React from 'react';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

export default function GrowOffline() {

    const sections = [
        { id: "section1", label: "Why Your Restaurant Needs an Online Ordering Platform" },
        { id: "section2", label: "Step-by-Step Guide to Setting Up Your Restaurant’s First Online Ordering Platform" },
        { id: "section3", label: "Top 10 Features Your Restaurant’s Online Ordering Platform Must Have" },
        { id: "section4", label: "Strategies to Convert Your Offline Customers into Online Buyers" },
        { id: "section5", label: "Integrating Your Online Ordering Platform with POS Systems for Seamless Operations" },
        { id: "section6", label: "How to Use Customer Feedback to Improve Your Online Ordering Platform" },
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
                    <h1 class="text-xl md:text-3xl font-bold text-center text-gray-900 md:mb-4">
                        How to Start Growing Offline Business to Online with My Restaurant’s First Online Ordering Platform
                    </h1>

                    <div id="section1" class="mt-6 md:mb-12 md:mt-16">
                        <h2 class="text-lg md:text-2xl font-semibold text-gray-900 mb-4">1. Why Your Restaurant Needs an Online Ordering Platform: <br /> Key Benefits and Opportunities</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Discuss why it’s essential for restaurants to have an online presence. Highlight benefits such as increased reach, better customer convenience, streamlined operations, and additional revenue streams.
                        </p>
                        <h3 class="text-lg font-bold text-gray-800 mb-2">Key Points:</h3>
                        <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>Convenience and speed for customers.</li>
                            <li>Reduced dependency on third-party platforms.</li>
                            <li>Improved brand loyalty through direct engagement.</li>
                            <li>Access to valuable customer data for better decision-making.</li>
                        </ul>
                    </div>

                    <div id="section2" class="mt-6 mb-6 md:mb-12">
                        <h2 class="text-lg md:text-2xl font-semibold text-gray-900 mb-4">2. Step-by-Step Guide to Setting Up Your Restaurant’s First Online Ordering Platform</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Provide a comprehensive guide for restaurant owners to set up their own online ordering system. Focus on everything from choosing the right platform to launching the service.
                        </p>
                        <h3 class="text-lg font-bold text-gray-800 mb-2">Key Points:</h3>
                        <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>Deciding between building an in-house platform or using third-party solutions.</li>
                            <li>Designing a user-friendly online menu.</li>
                            <li>Integrating payment gateways and ensuring secure transactions.</li>
                            <li>Setting up logistics for delivery and pickup options.</li>
                        </ul>
                    </div>

                    <div id="section3" class="mb-6 md:mb-12">
                        <h2 class="text-lg md:text-2xl font-semibold text-gray-900 mb-4">3. Top 10 Features Your Restaurant’s Online Ordering Platform Must Have</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Highlight the must-have features for an effective online ordering platform that ensures smooth user experiences and increases sales.
                        </p>
                        <h3 class="text-lg font-bold text-gray-800 mb-2">Key Points:</h3>
                        <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>Mobile responsiveness and user-friendly design.</li>
                            <li>Real-time menu updates.</li>
                            <li>Customization options for customers.</li>
                            <li>Integrated loyalty programs and referral systems.</li>
                            <li>Automated order confirmation and delivery tracking.</li>
                        </ul>
                    </div>

                    <div id="section4" class="mb-6 md:mb-12">
                        <h2 class="text-lg md:text-2xl font-semibold text-gray-900 mb-4">4. Strategies to Convert Your Offline Customers into Online Buyers</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Share strategies for converting your existing offline customers to use your online platform.
                        </p>
                        <h3 class="text-lg font-bold text-gray-800 mb-2">Key Points:</h3>
                        <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>Promote your online ordering system in-store with flyers, posters, and QR codes.</li>
                            <li>Offer exclusive online-only deals.</li>
                            <li>Use customer data to send personalized SMS or email campaigns.</li>
                            <li>Train staff to promote the online platform during in-person interactions.</li>
                        </ul>
                    </div>

                    <div id="section5" class="mb-6 md:mb-12">
                        <h2 class="text-lg md:text-2xl font-semibold text-gray-900 mb-4">5. Integrating Your Online Ordering Platform with POS Systems for Seamless Operations</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Guide on integrating online ordering with existing POS systems for streamlined order management, inventory tracking, and customer service.
                        </p>
                        <h3 class="text-lg font-bold text-gray-800 mb-2">Key Points:</h3>
                        <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>Benefits of integration (real-time updates, better data management).</li>
                            <li>How to choose a compatible POS system.</li>
                            <li>Steps for successful integration.</li>
                        </ul>
                    </div>

                    <div id="section6" class="mb-6 md:mb-12">
                        <h2 class="text-lg md:text-2xl font-semibold text-gray-900 mb-4">6. How to Use Customer Feedback to Improve Your Online Ordering Platform</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            Focus on the importance of listening to customers and using their feedback to refine the online ordering experience.
                        </p>
                        <h3 class="text-lg font-bold text-gray-800 mb-2">Key Points:</h3>
                        <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>Set up a feedback loop through surveys and reviews.</li>
                            <li>Analyze feedback to identify pain points.</li>
                            <li>Implement changes and communicate updates to customers.</li>
                        </ul>
                    </div>
                </div>
                <div class="md:w-1/2 lg:w-1/2 xl:w-1/3 sticky top-0 overflow-hidden" style={{ maxHeight: "240vh" }}>
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
