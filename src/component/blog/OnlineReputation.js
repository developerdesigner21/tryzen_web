import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link as ScrollLink } from "react-scroll";

export default function OnlineReputation() {

    const sections = [
        { id: "section1", label: "Understand the Value of Customer Reviews" },
        { id: "section2", label: "Timing is Everything: Choose the Right Moment" },
        { id: "section3", label: "Use Subtle Reminders in Your Physical Space" },
        { id: "section4", label: "Make It Easy and Convenient for Customers to Leave Reviews" },
        { id: "section5", label: "Respond to Every Review" },
        { id: "section6", label: "Incentivize Reviews Without Violating Guidelines" },
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
            <div class="flex flex-col md:flex-row gap-5 pt-12 lg:pt-10">
                <div class="w-full max-w-4xl bg-white mx-auto p-4 md:p-8 shadow-lg rounded-lg">
                    <h1 class="text-xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                        Boost Your Restaurant’s Online Reputation: How to Ask for Reviews Without Sounding Pushy</h1>
                    <p class="text-lg leading-relaxed text-gray-700 mb-10">
                        In the restaurant industry, online reviews play a critical role in shaping your reputation and attracting new customers. Positive reviews can boost your visibility on platforms like Google, Yelp, and TripAdvisor, while negative reviews can deter potential diners. But how do you encourage customers to leave reviews without coming across as pushy or desperate? In this post, we’ll explore subtle, effective ways to ask for reviews, ensuring that customers feel valued and motivated to share their experiences.
                    </p>
                    <div>
                        <div id="section1">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                1. Understand the Value of Customer Reviews
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Before diving into the tactics for asking reviews, it’s essential to understand why reviews matter so much:
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Increase Visibility:</span> The more reviews your restaurant has, the higher your ranking on platforms like Google and Yelp. This improves your chances of appearing in local searches.</li>
                                <li><span class="font-semibold">Build Trust:</span> Authentic customer reviews create social proof, helping potential customers trust your restaurant.</li>
                                <li><span class="font-semibold">Improve Customer Loyalty:</span> When customers feel their opinions are valued, they’re more likely to become repeat diners.</li>
                            </ul>
                        </div>

                        <div id="section2">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                2. Timing is Everything: Choose the Right Moment
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-2">
                                Send a Follow-Up Email After Dining: If your restaurant collects email addresses for reservations or online orders, send a follow-up email within 24-48 hours of their visit. Keep the message short and personal, thanking them for dining and politely asking for their feedback.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 mb-8">
                                <h2 class="text-xl font-bold mt-6 mb-3">
                                    Example:
                                </h2>
                                <p class="mb-4"> “Thank you for visiting [Restaurant Name]! We hope you enjoyed your meal. We’d love to hear your thoughts—please consider leaving a review on Google. Your feedback helps us serve you better.”</p>
                                <li><span class="font-semibold">Ask When Delivering the Check or Receipt:</span> If a customer expresses satisfaction or compliments your restaurant, that’s the perfect moment to mention leaving a review. Have your staff respond with something like:</li>
                                <p class="mt-2">“We’re so glad you enjoyed your meal! If you have a moment, we’d appreciate it if you could share your experience online.”</p>
                            </ul>
                        </div>

                        <div id="section3">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                3. Use Subtle Reminders in Your Physical Space
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                You don’t have to ask for reviews verbally. Sometimes, visual reminders placed strategically can do the job without disrupting the customer’s experience.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li>
                                    <span class="font-semibold">Include a Request on Receipts:</span> Add a simple message like, “Loved your meal? Share your experience on [Review Site]!” at the bottom of printed or digital receipts.
                                    <p class="mt-2">“Thank you for dining with us! Your feedback helps us grow—leave us a review on Yelp!”</p>
                                </li>
                                <li><span class="font-semibold">Place Table Tents or Small Signs:</span> Use small, attractive table tents or posters at the counter that encourage customers to leave a review. Keep the wording friendly and appreciative:</li>
                                <li><span class="font-semibold">Include a Review Request on Your Packaging:</span>  If you offer takeout or delivery, print a subtle review request on the packaging, such as on bags or containers.</li>
                            </ul>
                        </div>

                        <div id="section4">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                4. Make It Easy and Convenient for Customers to Leave Reviews
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Even satisfied customers may skip leaving reviews if the process is cumbersome. Make it as easy as possible for them to share their thoughts by providing direct links and clear instructions.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Create a Short URL or QR Code:</span> Use tools like Bitly to create a short, easy-to-remember URL, or generate a QR code that links directly to your review page on Google or Yelp. Display this QR code on your menu, business card, or receipts.</li>
                                <li><span class="font-semibold">Example:</span>
                                    <p>“Scan to leave a review! We’d love to hear from you.” (with a QR code included)</p>
                                </li>
                                <li><span class="font-semibold">Link to Review Platforms from Your Website and Emails:</span> Include direct links to review sites like Google, Yelp, and TripAdvisor on your website’s contact page or email signature. Make it a one-click process to write a review.</li>
                            </ul>
                        </div>

                        <div id="section5">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                5. Respond to Every Review (Yes, Every Single One)
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Responding to reviews—both positive and negative—shows that you value customer feedback. This also encourages others to leave their own reviews, knowing that their opinion will be heard.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Thank Customers for Positive Reviews:</span> A simple, personalized response like, “Thank you, [Customer Name], for the kind words! We’re glad you enjoyed your experience and look forward to serving you again.” can go a long way.</li>
                                <li><span class="font-semibold">Address Negative Reviews Professionally:</span> Respond to negative reviews politely and offer solutions where possible. This shows that you care about customer satisfaction and are committed to improving.</li>
                            </ul>
                        </div>

                        <div id="section6">
                            <h2 class="text-xl md:text-3xl font-bold mt-12 mb-6">
                                6. Incentivize Reviews Without Violating Guidelines
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Most review platforms have strict policies against incentivizing reviews (e.g., offering discounts or freebies in exchange for reviews). However, you can still create incentives that encourage honest feedback without violating these rules.
                            </p>
                            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-8">
                                <li><span class="font-semibold">Host a Monthly Review Giveaway:</span>  Instead of rewarding individual reviews, host a monthly giveaway for all customers who leave a review (positive or negative).<br />
                                    <span class="font-semibold">Example:</span>
                                    <p>“Leave us a review on Google or Yelp, and you’ll be entered into our monthly giveaway for a free dinner for two!”</p>
                                </li>
                                <li><span class="font-semibold">Create a Social Media Feature Campaign:</span> Highlight one customer review per week on your social media pages and thank them publicly. Customers will be more inclined to leave reviews if they know they might get featured.</li>
                            </ul>
                        </div>

                        <div id="section7">
                            <h2 class="text-xl md:text-3xl font-bold mt-8 md:mt-16 mb-6">
                                Conclusion
                            </h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Asking for reviews doesn’t have to feel awkward or pushy. By using subtle, thoughtful methods to encourage customer feedback, you can build a strong online reputation for your restaurant and create more opportunities to connect with your audience. Remember to keep your requests genuine, make the process easy, and always thank customers for taking the time to share their experiences.
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
