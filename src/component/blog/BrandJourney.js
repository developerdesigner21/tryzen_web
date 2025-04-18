import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function BrandJourney() {

    const sections = [
        { id: "section1", label: "Provide a Memorable In-Store Experience" },
        { id: "section2", label: "Collect and Respond to Customer Feedback" },
        { id: "section3", label: "Create a Consistent Visual Identity" },
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
                        Creating a Seamless Brand Journey for Customers: Online Ordering to In-Store Dining
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        Maintaining consistency across multiple restaurant locations is crucial for building a strong brand identity and providing a reliable customer experience. When it comes to online orders, consistency is even more important because customers expect the same quality, accuracy, and speed regardless of which location they order from. This blog will outline strategies for ensuring that your multi-location restaurant delivers consistent online orders every time.
                    </p>
                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                1. Provide a Memorable In-Store Experience
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                The in-store experience is where your brand comes to life. Ensure that it reflects your brand’s values and promises.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Design the Space to Match Your Brand:</span> Your restaurant’s interior design should be a physical manifestation of your brand. Whether it’s rustic, modern, or family-oriented, the design should evoke the same feelings as your digital presence.</li>
                                <li><span class="font-semibold">Use Branded Packaging and Collateral:</span> From menu covers to takeout bags, use branded materials that reinforce your visual identity.</li>
                                <li><span class="font-semibold">Create a Signature Customer Service Experience:</span> Train your staff to deliver service that aligns with your brand’s promises. For example, if your brand is known for being eco-friendly, educate your staff on sustainable practices and how to communicate them to customers.</li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                2. Collect and Respond to Customer Feedback
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Customer feedback is invaluable for understanding how your brand is perceived. Use it to identify gaps between your intended brand identity and customer experiences.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Monitor Online Reviews and Social Media Mentions:</span> Use tools like Google Alerts and social media monitoring platforms to track what customers are saying about your brand.</li>
                                <li><span class="font-semibold">Incorporate Feedback into Your Brand Strategy:</span> Use feedback to refine your brand identity and ensure that your messaging and visual elements resonate with your target audience.</li>
                                <li><span class="font-semibold">Respond Consistently:</span> Whether it’s a positive review or a complaint, respond to customer feedback in a manner consistent with your brand voice. This shows that you care about their experience and reinforces your brand’s values.</li>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                3. Create a Consistent Visual Identity
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Your restaurant’s visual identity is often the first thing customers notice, whether it’s your logo, menu design, or social media graphics. To establish a memorable brand, ensure that your visual elements are cohesive and consistent.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Design a Distinct Logo:</span> Your logo is the cornerstone of your visual identity. It should be simple, easily recognizable, and reflective of your restaurant’s personality.</li>
                                <li><span class="font-semibold">Choose a Color Palette:</span> Use a consistent color scheme across all platforms, from your website to printed menus and in-store decor. Colors evoke emotions and associations, so choose a palette that aligns with your brand values (e.g., green for sustainability, red for passion).</li>
                                <li><span class="font-semibold">Select Typography Carefully:</span> Your font choices should complement your brand’s style. Use the same fonts across your website, social media, and printed materials for a cohesive look.</li>
                                <li><span class="font-semibold">Create Brand Guidelines: </span> Develop a brand style guide that outlines how your visual elements should be used. This ensures that your brand looks the same whether it’s displayed on a billboard or a social media post.</li>
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
                                <Link to="/plateform" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/two.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to Choose the Right Online Ordering Platform like Wordpress, Shopify or customs solution</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link href="/online-ordering" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/three.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">Step-by-Step Guide How to Prepare Your Restaurant for Seamless Online Ordering Integration</h4>
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
                                <Link to="/seo-mistakes" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/six.webp')} alt="Blog Image" class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">Top 10 SEO Mistakes Restaurant Owners make to Boost there Restaurant’s Online.</h4>
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
