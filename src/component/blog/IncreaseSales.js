import React from 'react';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

export default function IncreaseSales() {

    const sections = [
        { id: "section1", label: "Introduction" },
        { id: "section2", label: "Why Online Presence is Critical for Restaurants" },
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
                        How to Increase Sales and Traffic to Maximize Profits in Your Restaurant Business
                    </h1>

                    <div>
                        <div id="section1" class="border-b border-black">
                            <h2 class="text-xl md:text-3xl font-bold mt-6 mb-4 md:mt-12 md:mb-6">
                                Introduction
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-10">
                                Running a successful restaurant now requires more than good food—it’s about reaching customers
                                online. Many owners hesitate to invest in digital strategies like websites, mobile apps, social
                                media marketing, and SEO, but these are vital for increasing sales and traffic. A strong online
                                presence captures more orders, attracts new customers, and fosters loyalty, making it essential
                                in the competitive hospitality industry.
                            </p>
                            <p class="text-lg font-semibold mb-5">Key Strategies for Creating an Effective Online Presence:</p>
                            <ul class="md:pl-6 text-gray-700 space-y-6 text-lg mb-10">
                                <li>
                                    <span class="font-bold">1. Create a professional website and mobile app:</span>
                                    <ul class="md:pl-4 space-y-2 mt-2">
                                        <li>- A website acts as the digital face of your restaurant. Include your menu,
                                            restaurant story, location details, and an easy-to-use online ordering system.</li>
                                        <li>- A mobile app is even better for user engagement. It allows for push notifications,
                                            loyalty rewards, and a direct channel for orders.</li>
                                    </ul>
                                </li>

                                <li>
                                    <span class="font-bold">2. Invest in social media marketing:</span>
                                    <ul class="md:pl-4 space-y-2 mt-2">
                                        <li>- Platforms like Instagram, Facebook, and TikTok are essential for showcasing your
                                            dishes, sharing customer stories, and promoting new items.</li>
                                        <li>- Create engaging content such as behind-the-scenes videos, customer testimonials,
                                            and daily specials to keep your followers engaged.</li>
                                    </ul>
                                </li>

                                <li>
                                    <span class="font-bold">3. Optimize for SEO (Search Engine Optimization):</span>
                                    <ul class="md:pl-4 space-y-2 mt-2">
                                        <li>- Use relevant keywords like “best [cuisine] restaurant in [location]” on your
                                            website, menu descriptions, and blog posts to rank higher on search engines.</li>
                                        <li>- Create blog content like “Top 10 dishes to try at [restaurant name]” or “How to
                                            host a perfect dinner party” to attract local search traffic.</li>
                                    </ul>
                                </li>

                                <li>
                                    <span class="font-bold">4 Leverage local SEO:</span>
                                    <ul class="md:pl-4 space-y-2 mt-2">
                                        <li>- Local SEO helps ensure your restaurant appears in “near me” searches and on Google
                                            maps.</li>
                                        <li>- Optimize your Google My Business listing with up-to-date information, photos, and
                                            customer reviews.</li>
                                        <li>- Encourage satisfied customers to leave positive reviews, which can significantly
                                            boost your local visibility.</li>
                                    </ul>
                                </li>

                                <li>
                                    <span class="font-bold">5. Run paid ad campaigns:</span>
                                    <ul class="md:pl-4 space-y-2 mt-2">
                                        <li>- Use targeted Google ads and Facebook ads to reach specific customer segments in
                                            your local area.</li>
                                        <li>- Highlight special offers, new menu items, or exclusive deals for online orders.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <span class="font-bold">6. Direct communication:</span>
                                    <ul class="md:pl-4 space-y-2 mt-2">
                                        <li>- An online presence allows for direct communication with customers, helping you
                                            promote offers, respond to reviews, and build relationships.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-6 md:mt-10 mb-4">Why Online Presence is Critical for Restaurants:</h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Restaurants now compete on how easy they are to find online. Customers often search, read
                                reviews, and order before visiting. Having a good online presence turns these visitors into
                                regular diners. Without it, you may lose business to others who are just a click away.
                            </p>

                            <div class="space-y-6 text-lg">
                                <div>
                                    <h3 class="text-lg font-bold mb-2">Create a Professional Website:</h3>
                                    <ul class="md:pl-4 text-gray-700 space-y-2">
                                        <li>- Choose a reliable platform like WordPress or a custom-built site with a
                                            user-friendly interface.</li>
                                        <li>- Include your full menu, high-quality images of your dishes, a blog section, and an
                                            easy ordering system.</li>
                                        <li>- Make sure the site is mobile-responsive, as most customers will access it through
                                            their phones. </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-bold text-gray-800 mb-2">2. Develop a Branded Mobile App:</h3>
                                    <ul class="md:pl-4 text-gray-700 space-y-2">
                                        <li>- Offer a loyalty rewards program, push notifications for special discounts, and an
                                            intuitive order tracking system.</li>
                                        <li>- Integrate features like social media login and secure payments for a seamless
                                            experience. </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-bold text-gray-800 mb-2">3. Build a Strong Social Media Presence:
                                    </h3>
                                    <ul class="md:pl-4 text-gray-700 space-y-2">
                                        <li>- Post daily or weekly updates showcasing your menu, events, and customer
                                            experiences.</li>
                                        <li>- Run giveaways, contests, and special promotions to increase engagement. </li>
                                        <li>- Use professional photography and engaging captions to attract more followers.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-bold text-gray-800 mb-2">4. Optimise for SEO:</h3>
                                    <ul class="md:pl-4 text-gray-700 space-y-2">
                                        <li>- Use keyword research tools like Google Keyword Planner or Ahrefs to find what your
                                            potential customers are searching for.</li>
                                        <li>- Optimise your website’s meta descriptions, titles, and content with these
                                            keywords.</li>
                                        <li>- Write blog posts about local events, seasonal dishes, or health benefits of your
                                            menu items.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-bold text-gray-800 mb-2">5. Focus on Local SEO:</h3>
                                    <ul class="md:pl-4 text-gray-700 space-y-2">
                                        <li>- Claim and optimize your Google My Business profile.</li>
                                        <li>- Use local keywords like “best Italian restaurant in [City Name].”</li>
                                        <li>- Join local directories and ensure your restaurant is listed correctly with updated
                                            contact information.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-bold text-gray-800 mb-2">6. Launch Paid Ad Campaigns:</h3>
                                    <ul class="md:pl-4 text-gray-700 space-y-2">
                                        <li>- Set a budget and target local audiences based on interests, location, and
                                            behavior.</li>
                                        <li>- Promote online ordering, special events, or happy hours to drive immediate
                                            traffic.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 lg:w-1/2 xl:w-1/2 sticky top-0 overflow-hidden" style={{ maxHeight: "205vh" }}>
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
                                    <img src={require('../../assets/buisness3.webp')} alt="Blog Image"
                                        class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to avoid 3rd party delivery charge and i can my Save
                                            25% Delivery Costs for my Restaurant.</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/grow-offline" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/two.webp')} alt="Blog Image"
                                        class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to i start growing Offline business to Online my
                                            Restaurant’s First Online Ordering Platform</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/ensure-consistency" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/three.webp')} alt="Blog Image"
                                        class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How to Ensure Consistency in Online Orders Across Multiple
                                            Restaurant Locations</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/brand-experience" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/four.webp')} alt="Blog Image"
                                        class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">Creating a Unified Brand Experience: Connecting Your
                                            Restaurant’s Online and Offline Presence</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/future-shaping" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/five.webp')} alt="Blog Image"
                                        class="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 class="font-bold text-sm">How Technology is Shaping the Future of the and how Trends
                                            Redefining Restaurant Industry</h4>
                                    </div>
                                </Link>
                            </li>
                            <li class="flex">
                                <Link to="/online-reputation" class="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/six.webp')} alt="Blog Image"
                                        class="w-12 h-12 rounded-md mr-4" />
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
