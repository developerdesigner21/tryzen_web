import React from 'react';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

export default function Plateform() {

    const sections = [
        { id: "section1", label: "WordPress" },
        { id: "section2", label: "SquareUp" },
        { id: "section3", label: "Custom Solutions" },
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
                        How to Choose the Right Online Ordering Platform like Wordpress, Shopify or customs solution
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 my-10">
                        In today’s digital era, having an efficient and user-friendly online ordering platform is essential for
                        restaurant success. With numerous options available, from popular platforms like WordPress and Shopify
                        to fully custom-built solutions, choosing the right platform can be overwhelming. This blog will explore
                        the benefits and drawbacks of each option, helping restaurant owners make an informed decision that
                        suits their unique business needs.
                    </p>
                    <h1 class="text-lg font-bold leading-relaxed text-gray-700 mt-10 mb-2">
                        Why the Right Online Ordering Platform Matters
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-2">
                        The right online ordering platform can make or break your restaurant’s digital presence. It impacts the
                        customer experience, order management, marketing capabilities, and overall profitability. An efficient
                        platform will ensure smooth order processing, integrate with your existing systems, and offer features
                        that help grow your business.
                    </p>
                    <p class="text-lg leading-relaxed text-gray-700 mb-2">
                        Choosing the right platform boils down to three key factors:
                    </p>
                    <div>
                        <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                            <li>Ease of Use for You and Your Customers</li>
                            <li>Customization and Flexibility</li>
                            <li>Scalability and Cost-Effectiveness</li>
                        </ul>
                    </div>

                    <div id="section1" class="my-12">
                        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">WordPress: A Flexible and Affordable
                            Solution</h2>
                        <p class="text-lg text-gray-700 mb-6">
                            WordPress is a versatile platform that allows restaurant owners to build their online ordering
                            system using plugins like WooCommerce. It’s a popular choice for its flexibility and low cost.
                        </p>
                        <h2 class="text-lg md:text-xl font-bold text-gray-700 mb-4">Benefits of Using WordPress:</h2>
                        <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
                            <li><span class="font-semibold">Customizability:</span> WordPress offers thousands of plugins and
                                themes, allowing you to create a unique ordering experience tailored to your brand.</li>
                            <li><span class="font-semibold">Affordability:</span> It’s one of the most cost-effective options, with
                                many free plugins available. Premium plugins are also relatively inexpensive compared to other
                                platforms.</li>
                            <li><span class="font-semibold">SEO-Friendly:</span> WordPress is built with SEO in mind, helping your
                                restaurant rank higher in local search results.</li>
                            <li><span class="font-semibold">Control Over Your Data:</span> You own your website and its data, giving
                                you complete control over how information is used and shared.</li>
                            <li><span class="font-semibold">Large Community Support:</span> With a huge community of developers and
                                designers, you can find support and resources easily.</li>
                        </ul>

                        <h3 class="text-lg md:text-xl font-bold text-gray-700 mb-4">Drawbacks of WordPress:</h3>
                        <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                            <li><span class="font-semibold">Learning Curve:</span> If you’re not tech-savvy, managing a WordPress
                                site can be challenging. Setting up and maintaining the site might require technical knowledge.
                            </li>
                            <li><span class="font-semibold">Plugin Dependency:</span> To create a robust online ordering system, you
                                may need multiple plugins, which can lead to compatibility issues and security vulnerabilities
                                if not maintained properly.</li>
                        </ul>
                    </div>

                    <div id="section2" class="my-12">
                        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">SquareUp: An All-in-One Solution for
                            Small and Medium-Sized Restaurants</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            SquareUp (or Square) is a powerful platform that combines point-of-sale (POS) functionality with
                            online ordering capabilities. It’s a popular choice for restaurants looking for an integrated
                            solution.
                        </p>
                        <h3 class="text-lg md:text-xl font-bold text-gray-700 mb-4">Benefits of Using SquareUp:</h3>
                        <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                            <li><span class="font-semibold">Easy Setup:</span> SquareUp is designed for ease of use, making it
                                simple for non-technical users to set up an online ordering system.</li>
                            <li><span class="font-semibold">POS Integration:</span> SquareUp offers seamless integration with its
                                POS system, making it easy to manage both in-house and online orders from a single dashboard.
                            </li>
                            <li><span class="font-semibold">Affordable and Transparent Pricing:</span> SquareUp’s pricing structure
                                is straightforward, with no hidden fees, making it a budget-friendly option for small and
                                medium-sized restaurants.</li>
                            <li><span class="font-semibold">Built-In Marketing Tools:</span> With tools for email marketing, loyalty
                                programs, and promotions, SquareUp makes it easy to engage customers and drive repeat business.
                            </li>
                            <li><span class="font-semibold">Mobile Optimization:</span> SquareUp’s online ordering pages are optimized for mobile devices,
                                providing a smooth experience for customers on the go.
                            </li>
                        </ul>
                        <h3 class="text-lg md:text-xl font-bold text-gray-700 mb-4">Drawbacks of SquareUp:</h3>
                        <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                            <li><span class="font-semibold">Limited Customization:</span> While SquareUp is easy to use, it offers limited customization options compared to WordPress or custom solutions.</li>
                            <li><span class="font-semibold">Scalability Constraints:</span> SquareUp is better suited for small and medium-sized restaurants. As your business grows, you might outgrow its capabilities.</li>
                            <li><span class="font-semibold">Data Control Limitations:</span> You have limited control over data and platform configurations compared to a custom-built solution.</li>
                        </ul>
                    </div>

                    <div id="section3" class="my-12">
                        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Custom Solutions: Tailored Platforms for Complete Control</h2>
                        <p class="text-lg text-gray-700 mb-4">
                            For restaurant owners with specific needs or looking for a fully branded experience, a custom-built solution might be the best choice. This approach involves creating a unique ordering platform from scratch, tailored to your restaurant’s requirements.
                        </p>
                        <h3 class="text-lg md:text-xl font-bold text-gray-700 mb-4">Benefits of Custom Solutions:</h3>
                        <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                            <li><span class="font-semibold">Complete Customization:</span> Build the platform exactly to your specifications, with no restrictions on design, features, or integrations.</li>
                            <li><span class="font-semibold">Scalability and Flexibility:</span> As your restaurant grows, a custom solution can scale and adapt to changing business needs without being limited by platform constraints.
                            </li>
                            <li><span class="font-semibold">Seamless Integration with Existing Systems: </span> A custom platform can integrate with your existing POS, CRM, inventory management, and other systems, streamlining your operations.</li>
                            <li><span class="font-semibold">Data Ownership and Security:</span> With a custom solution, you have full control over your data and security configurations, ensuring compliance and privacy.
                            </li>
                            <li><span class="font-semibold">No Monthly Subscription Fees:</span> While the initial development cost is higher, there are no recurring fees, making it more cost-effective in the long run for larger restaurants.
                            </li>
                        </ul>
                        <h3 class="text-lg md:text-xl font-bold text-gray-700 mb-4">Drawbacks of Custom Solutions:</h3>
                        <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                            <li><span class="font-semibold">High Upfront Costs:</span> Building a custom solution requires a significant investment in development, design, and ongoing maintenance.</li>
                            <li><span class="font-semibold">Longer Development Time:</span>  Custom solutions take longer to develop and deploy compared to ready-made platforms like WordPress or SquareUp.</li>
                            <li><span class="font-semibold">Maintenance Requirements:</span> You’ll need a dedicated team or service provider to handle ongoing updates, security patches, and feature enhancements.</li>
                        </ul>
                    </div>
                </div>
                <div class="md:w-1/2 lg:w-1/2 xl:w-1/3 sticky top-0 overflow-hidden" style={{ maxHeight: "210vh" }}>
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
                                <Link to="/online-ordering" class="flex flex-row hover:text-blue-600">
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
        </div >
    )
}
