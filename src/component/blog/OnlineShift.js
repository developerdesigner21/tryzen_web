import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function OnlineShift() {

    const sections = [
        { id: "section1", label: "Build a Strong Digital Presence" },
        { id: "section2", label: "Adapt to Online Ordering and Delivery" },
        { id: "section3", label: "Embrace Loyalty Programs to Retain Customers" },
        { id: "section4", label: "Stay Ahead with Innovation and Adaptability" },
        { id: "section5", label: "Offer Unique Digital-Only Experiences" },
        { id: "section6", label: "Technology to Enhance Operations" },
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
                        How Restaurants Can Compete with online Shifting of Consumer and there Preferences
                    </h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        The restaurant industry is facing a rapid shift in consumer behavior as more people choose online platforms for food orders, delivery, and takeout. This shift, driven by convenience and a growing digital-first mentality, has created new challenges and opportunities for traditional restaurants. To remain competitive, restaurant owners must adapt their strategies to cater to these evolving preferences, while also leveraging technology to enhance the dining experience. In this post, we’ll explore practical ways restaurants can respond to this online migration and successfully compete in the new digital era.
                    </p>

                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                1. Build a Strong Digital Presence
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                To compete effectively, restaurants need to establish a compelling digital presence that aligns with their brand and caters to the online audience. This involves more than just having a basic website—it’s about creating an engaging, interactive, and user-friendly online experience.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Create an Attractive, Mobile-Responsive Website:</span> Make sure your website is easy to navigate on both desktops and smartphones. Include a digital menu, contact details, and online ordering options prominently.</li>
                                <li><span class="font-semibold">Leverage Social Media Marketing:</span> Platforms like Instagram, Facebook, and TikTok are ideal for showcasing menu items, sharing behind-the-scenes content, and promoting new offerings. Utilize high-quality images and videos to capture the attention of potential customers.</li>
                                <li><span class="font-semibold">Claim and Optimize Listings on Review Sites:</span> Ensure your restaurant is listed on Google My Business, Yelp, and other review sites. Respond to reviews—both positive and negative—to show that you value customer feedback.</li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                2. Adapt to Online Ordering and Delivery
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Online ordering and delivery have become a core part of the restaurant industry. Customers expect a smooth, hassle-free experience when placing orders online. To meet this demand:
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Implement a User-Friendly Online Ordering System:</span> Choose a system that is easy to use, integrates with your website, and provides real-time order updates. If possible, invest in a branded mobile app for even better customer engagement.</li>
                                <li><span class="font-semibold">Streamline the Menu for Delivery:</span> Not every menu item is suitable for delivery. Create a specialized menu featuring items that travel well and maintain their quality when delivered.</li>
                                <li><span class="font-semibold">Offer Multiple Delivery Options:</span> Partner with third-party delivery platforms like DoorDash, UberEats, or Zomato to reach a wider audience. For larger margins, consider offering in-house delivery to encourage customers to order directly through your website.</li>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                3. Embrace Loyalty Programs to Retain Customers
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
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                4. Stay Ahead with Innovation and Adaptability
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                The restaurant industry will continue to evolve, and staying ahead of trends is key to long-term success. Restaurants need to remain flexible and open to adopting new technologies and strategies.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Monitor Industry Trends:</span> Keep an eye on emerging trends like ghost kitchens, AI-driven marketing, and sustainability practices to stay competitive.</li>
                                <li><span class="font-semibold">Experiment with New Concepts:</span> Test out new menu items, digital experiences, or marketing strategies regularly to see what resonates with your audience.</li>
                                <li><span class="font-semibold">Adapt Quickly to Customer Feedback:</span> Use customer reviews and feedback to make quick adjustments to your offerings and improve the overall experience.</li>
                            </ul>
                        </div>

                        <div id="section5">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                5. Offer Unique Digital-Only Experiences
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Creating unique experiences exclusively for your digital audience can make your online presence more engaging and attract customers who value innovation.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Create an Exclusive Online-Only Menu:</span> Design a special menu featuring dishes available only for online orders to incentivize customers to use your digital platforms.</li>
                                <li><span class="font-semibold">Host Virtual Events:</span> Conduct virtual cooking classes, wine tastings, or Q&A sessions with your chef to create a sense of community and keep customers engaged.</li>
                                <li><span class="font-semibold">Utilize Augmented Reality (AR):</span> Use AR technology to let customers visualize dishes before ordering, or create interactive digital experiences around your brand.</li>
                            </ul>
                        </div>
                        <div id="section6">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                6. Technology to Enhance Operations
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Incorporating technology into daily operations can streamline processes, reduce errors, and provide a better customer experience.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Implement a Cloud-Based POS System:</span> A modern POS system can integrate with online ordering platforms, track sales, and manage inventory, providing real-time insights into business performance.</li>
                                <li><span class="font-semibold">Use AI and Automation:</span>  Consider using AI-driven tools for order management, chatbots for handling customer inquiries, or even kitchen automation for food preparation to reduce wait times and improve order accuracy.</li>
                                <li><span class="font-semibold">Invest in a Professional Online Ordering System:</span>  Use a reliable platform that integrates with your website and offers a smooth ordering and payment experience. Consider developing a branded mobile app if your budget allows.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 lg:w-1/2 xl:w-1/3 sticky top-0 overflow-hidden" style={{ maxHeight: "220vh" }}>
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
