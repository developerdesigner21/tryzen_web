import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function SeoMistakes() {

    const sections = [
        { id: "section1", label: "Neglecting Local SEO" },
        { id: "section2", label: "Ignoring Mobile Optimization" },
        { id: "section3", label: "Using Generic or Poorly Written" },
        { id: "section4", label: "Using Generic or Poorly Written" },
        { id: "section5", label: "Failing to Optimize Meta Tags" },
        { id: "section6", label: "Not Utilizing Image Optimization" },
        { id: "section7", label: "Ignoring Customer Reviews" },
        { id: "section8", label: "Not Tracking SEO Performance" },
        { id: "section9", label: "Failing to Create Quality Backlinks" },
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
                        Top 10 SEO Mistakes Restaurant Owners make to Boost there Restaurant’s Online.
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        The restaurant industry is undergoing a radical transformation, driven by rapid advancements in
                        technology. From online ordering and contactless payments to AI-powered analytics and robotic kitchens,
                        technology is redefining how restaurants operate and serve customers. To remain competitive and meet
                        evolving customer expectations, restaurant owners must stay ahead of these trends. In this blog, we will
                        explore how technology is shaping the future of the restaurant industry and the key trends that are
                        redefining the dining experience.
                    </p>
                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                1. Neglecting Local SEO
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    Many restaurant owners focus solely on general SEO without paying attention to local SEO.
                                    Since restaurants primarily serve local customers, it’s crucial to optimize for local
                                    search.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Create and optimize your Google My Business (GMB) listing. Ensure your name, address, and
                                    phone number (NAP) are consistent across all platforms. Encourage customers to leave reviews
                                    and respond to them promptly.
                                </li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                2. Ignoring Mobile Optimization
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    A significant number of customers use their mobile devices to search for restaurants. Failing to have a mobile-optimized website can lead to poor user experiences and lost customers.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Use responsive design to ensure your website adapts to different screen sizes. Test your website’s mobile performance and optimize loading times, images, and navigation.
                                </li>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                3. Using Generic or Poorly Written Content
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    Content is crucial for SEO, but many restaurant owners use generic descriptions or poorly written content that fails to engage customers or improve search rankings.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Create unique, high-quality content that reflects your restaurant’s personality. Write engaging menu descriptions, blog posts, and stories about your brand. Use relevant keywords naturally throughout the content.
                                </li>
                            </ul>
                        </div>

                        <div id="section4">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                4. Using Generic or Poorly Written Content
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    Restaurant owners often skip keyword research or fail to target the right keywords. This can result in low visibility in search results.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Use keyword research tools (like Google Keyword Planner or Ubersuggest) to identify keywords relevant to your restaurant. Focus on long-tail keywords that include your cuisine type, location, and unique offerings.
                                </li>
                            </ul>
                        </div>

                        <div id="section5">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                5. Failing to Optimize Meta Tags
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    Meta tags, including title tags and meta descriptions, are often overlooked. These tags provide crucial information to search engines and potential customers.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Craft unique and descriptive title tags for each page of your website, including relevant keywords. Write compelling meta descriptions that encourage users to click through to your site.
                                </li>
                            </ul>
                        </div>

                        <div id="section6">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                6. Not Utilizing Image Optimization
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    Many restaurant websites feature high-quality images but fail to optimize them for SEO. This can slow down page load times and impact user experience.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Use descriptive file names and alt text for all images. Compress images to reduce file size and improve loading times without sacrificing quality.
                                </li>
                            </ul>
                        </div>

                        <div id="section7">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                7. Ignoring Customer Reviews
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    Customer reviews play a significant role in local SEO and can influence potential customers’ decisions. Ignoring or failing to respond to reviews can hurt your reputation and rankings.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Actively encourage satisfied customers to leave reviews on platforms like Google, Yelp, and TripAdvisor. Respond to all reviews, both positive and negative, to show that you value customer feedback.
                                </li>
                            </ul>
                        </div>

                        <div id="section8">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                8. Not Tracking SEO Performance
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    Many restaurant owners do not track their SEO performance, making it difficult to identify areas for improvement.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Use tools like Google Analytics and Google Search Console to monitor website traffic, keyword rankings, and user behavior. Analyze the data regularly to make informed decisions about your SEO strategy.
                                </li>
                            </ul>
                        </div>

                        <div id="section9">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                9. Failing to Create Quality Backlinks
                            </h2>
                            <p class="text-lg font-semibold mb-2">Mistake:</p>
                            <ul class="text-lg list-disc list-inside mb-4">
                                <li class="md:ml-4">
                                    Backlinks from reputable sources can significantly boost your restaurant’s SEO, but many owners neglect this important aspect.
                                </li>
                            </ul>
                            <p class="text-lg font-semibold mb-2">Solution:</p>
                            <ul class="text-lg list-disc list-inside">
                                <li class="md:ml-4">
                                    Focus on building relationships with local bloggers, food critics, and influencers to earn backlinks. Participate in community events and collaborate with local businesses to enhance your online visibility.
                                </li>
                            </ul>
                        </div>
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
