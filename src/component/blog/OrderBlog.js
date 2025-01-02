import React from 'react';
import '../home/Home.css';
import mainLogo from '../../assets/mainlogo.png';
import smallLogo from '../../assets/smallLogo.webp';
import blogImage from '../../assets/b1.webp';
import profilePicture from '../../assets/dp.webp';
import whatsapp from '../../assets/whatsapp.webp';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

export default function OrderBlog() {

    const sections = [
        { id: "section1", label: "Disadvantages to relying on third-party food" },
        { id: "section2", label: "How I Can Replace 3rd Party Solution Provider" },
        { id: "section3", label: "Implementation Guide" },
    ];

    return (
        <div className="bg-gray-100 p-4 md:p-10 xl:p-16">
            <nav className="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
                <Link to="/" id="brand" className="hidden lg:flex gap-2 items-center flex-1">
                    <img className="object-cover" src={mainLogo} alt="Logo" style={{ height: "2rem" }} />
                </Link>
                <Link to="/" id="brand" className="lg:hidden gap-2 items-center flex-1">
                    <img className="object-cover" src={smallLogo} alt="Logo" style={{ height: "2rem" }} />
                </Link>
                <div id="nav-menu" className="hidden md:flex gap-5 lg:gap-12">
                    <a href="index.html#features" className="font-medium hover:text-primary">Features</a>
                    <a href="index.html#why" className="font-medium hover:text-primary">Why Tryzen?</a>
                    <a href="index.html#blogs" className="font-medium hover:text-primary">Blogs</a>
                    <a href="index.html#reviews" className="font-medium hover:text-primary">Reviews</a>
                    <a href="index.html#pricing" className="font-medium hover:text-primary">Pricing</a>

                </div>
                <div className="flex flex-1 justify-end">
                    <button
                        className="flex gap-2 items-center border border-gray-400 px-1 md:px-4 py-1 md:py-2 rounded-lg hover:border-gray-600">
                        <i className="fa-solid fas fa-calendar-alt"></i>
                        <a target="_blank" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk"
                            className="text-sm font-display md:font-medium">
                            SCHEDULE MEETING
                        </a>
                    </button>
                </div>
            </nav>

            <div className="flex flex-col md:flex-row gap-5 xl:gap-10 pt-12 lg:pt-10">
                <div className="w-full max-w-5xl bg-white mx-auto p-4 md:p-8 shadow-lg rounded-lg">
                    <h1 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-4">
                        How to avoid 3rd party delivery charge and save 25% delivery costs for my restaurant.
                    </h1>
                    <div className="flex justify-center items-center gap-8 mb-8">
                        <div className="text-center">
                            <img src={blogImage} alt="Your Website" className="mx-auto mb-4 rounded-md" />
                        </div>
                    </div>

                    <div>
                        <div id="section0" className="border-b border-black">
                            <p className="text-lg leading-relaxed text-gray-700 mb-10">
                                In today’s highly competitive restaurant industry, owners often find themselves relying on
                                third-party food delivery apps such as Uber Eats, DoorDash, and Rappi to reach customers. While
                                these platforms provide convenience and visibility, <span className="font-bold">they come with hefty
                                    commissions and limited control over customer relationships.</span> This dependency can eat
                                into
                                profits and hinder the growth of the restaurant’s own brand. Thus, <span className="font-bold">it’s
                                    critical to find a solution that allows restaurant owners to establish direct connections
                                    with
                                    customers and maintain control over their sales.</span>
                            </p>
                        </div>

                        <div id="section1" className="border-b border-black">
                            <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-6 md:mt-12 md:mb-6">Disadvantages to relying on third-party food
                                apps:
                            </h2>
                            <ul className="list-disc text-lg pl-6 text-gray-700 space-y-3 mb-10">
                                <li>
                                    <span className="font-bold">High commissions:</span> Restaurants often pay up to 30% of each
                                    order
                                    in commission fees, which significantly reduces profit margins.
                                </li>
                                <li>
                                    <span className="font-bold">Lack of customer data:</span> Third-party apps own the customer
                                    data,
                                    making it difficult for restaurants to build a loyal customer base.
                                </li>
                                <li>
                                    <span className="font-bold">Brand dilution:</span> When using these platforms, customers often
                                    associate the service with the app, not the restaurant’s brand.
                                </li>
                                <li>
                                    <span className="font-bold">Limited customization and offers:</span> Restaurants are unable to
                                    promote personalized deals or offers that suit their brand.
                                </li>
                                <li>
                                    <span className="font-bold">Negative customer experience:</span> Delivery issues, which are
                                    beyond
                                    the restaurant’s control, can lead to bad reviews and affect the restaurant’s reputation.
                                </li>
                            </ul>
                        </div>

                        <div id="section2" className="border-b border-black">
                            <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-10 mb-4">How I Can Replace 3rd Party Solution
                                Provider
                            </h2>

                            <p className="text-lg leading-relaxed text-gray-700 mb-4">
                                Create a branded website and mobile application for your restaurant. This approach enables you
                                to
                                connect directly with customers, offer tailored services, and eliminate the high commissions
                                charged
                                by third-party platforms. Here’s why it’s a great solution:
                            </p>

                            <ul className="list-disc text-lg pl-6 text-gray-700 space-y-2 mb-10">
                                <li><span className="font-bold">Full control over branding:</span> Your website and app are entirely
                                    customizable, allowing you to create a unique identity for your restaurant.</li>
                                <li><span className="font-bold">Increased profit margins:</span> With direct orders, you keep 100%
                                    of
                                    the revenue, reducing the dependency on commission-based platforms.</li>
                                <li><span className="font-bold">Customer data ownership:</span> You gain full access to customer
                                    data,
                                    which helps in building loyalty and targeting specific customer groups with offers.</li>
                                <li><span className="font-bold">Customized marketing campaigns:</span> You can run promotions and
                                    loyalty programs directly on your own platform to drive more traffic.</li>
                                <li><span className="font-bold">Seamless customer experience:</span> By providing a smooth, branded
                                    online ordering experience, you can build a stronger relationship with your customers.</li>
                            </ul>
                        </div>


                        <div id="section3">
                            <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-10 mb-4">Implementation Guide</h2>
                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Here’s a step-by-step guide to building your own branded website and application:
                            </p>

                            <div className="space-y-6 text-lg">
                                <div>
                                    <h3 className="text-lg font-bold mb-2">1. Identify your needs and goals:</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Determine the features you want, such as an interactive menu, online ordering, table
                                            reservations, and a loyalty program.</li>
                                        <li>Outline the look and feel of your website and app, focusing on a design that
                                            reflects
                                            your brand.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">2. Choose a platform or development
                                        partner:
                                    </h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Partner with a professional development service, like TryzenSolution, that
                                            specializes
                                            in creating custom websites and apps for restaurants.</li>
                                        <li>Ensure that the partner understands the restaurant business and offers services such
                                            as
                                            integration with POS systems and support for menu management.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">3. Create a compelling website:</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Design a user-friendly interface that showcases your menu, chef specialties, and
                                            promotions.</li>
                                        <li>Add high-quality images, customer testimonials, and an "About Us" section to
                                            establish
                                            trust.</li>
                                        <li>Optimize the site for both desktop and mobile devices for seamless browsing.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">4. Build a branded mobile app:</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Include features like push notifications for offers, order tracking, loyalty
                                            rewards,
                                            and a user-friendly checkout process.</li>
                                        <li>Implement a secure payment gateway and easy registration options to simplify the
                                            customer journey.</li>
                                        <li>Provide options for takeaway, home delivery, and even curbside pickup.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">5. Integrate a marketing strategy:</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Use the customer data from your app and website to send personalized email marketing
                                            campaigns.</li>
                                        <li>Offer special discounts to customers who use your platform instead of third-party
                                            apps.
                                        </li>
                                        <li>Promote your new app and website on social media to attract your existing customers.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">6. Launch and monitor growth:</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Connect your new app and website to Google Analytics & Facebook Analytics.</li>
                                        <li>Once developed, launch your app and website with a promotional campaign to attract
                                            attention.</li>
                                        <li>Monitor customer behavior and app performance regularly, updating features and
                                            resolving
                                            any issues as they arise.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 sticky top-0 overflow-hidden" style={{ maxHeight: "210vh" }}>
                    <div className="bg-white rounded-2xl p-3 xl:p-6 shadow-md">
                        <div className="flex items-center mb-4">
                            <img src={profilePicture} alt="Author" className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h3 className="font-bold text-lg">Amit Lakahani</h3>
                                <p className="text-gray-500">CEO & Founder of <br /> Tryzen Solution</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700 mb-2">In This Article</h4>
                            <ul className="text-gray-600 space-y-2">
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
                                className="flex items-center text-white font-semibold mt-4 border border-gray-400 py-2 px-4 rounded-full"
                                style={{ backgroundColor: "#29A71A" }}
                            >
                                <img src={whatsapp} alt="Industry Trends" className="mr-2" />
                                <span>CHAT WITH US</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 xl:p-6 shadow-md mt-6 md:mt-8">
                        <div className="text-center">
                            <div className="flex flex-row items-center justify-between">
                                <div>
                                    <img src={smallLogo} alt="Tryzen Solution Logo"
                                        className="w-12 h-12 rounded-full mx-auto mb-4" />
                                </div>
                                <div>
                                    <div className="flex justify-around items-center gap-2 xl:gap-4 text-sm mb-4">
                                        <div>
                                            <span className="font-bold text-lg">24</span>
                                            <p>posts</p>
                                        </div>
                                        <div>
                                            <span className="font-bold text-lg">55</span>
                                            <p>followers</p>
                                        </div>
                                        <div>
                                            <span className="font-bold text-lg">1</span>
                                            <p>following</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-bold text-xl">TryzenSolution</h3>
                            <p className="mt-2 font-semibold">We help to create <span className="text-pink-500">🎁</span> E-commerce
                                &
                                restaurant owners to create website and application to <span className="text-green-500">🚀</span>
                                grow business <span className="text-blue-500">💻</span>.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-4">
                            <img src={require('../../assets/s1.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s2.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s3.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s4.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s5.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s6.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s7.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s8.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            <img src={require('../../assets/s9.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 xl:p-6 shadow-md mt-6 md:mt-8">
                        <h3 className="font-bold text-lg mb-4">Other Important Blogs</h3>
                        <ul className="space-y-4">
                            <li className="flex">
                                <Link to="/enhance-order" className="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/buisness3.webp')} alt="Blog Image" className="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 className="font-bold text-sm">5 Proven Ways to Enhance Online Order Profitability
                                            and Drive More Revenue for Your Restaurant</h4>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to="/grow-offline" className="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/two.webp')} alt="Blog Image" className="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 className="font-bold text-sm">How to i start growing Offline business to Online my
                                            Restaurant’s First Online Ordering Platform</h4>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to="/ensure-consistency" className="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/three.webp')} alt="Blog Image" className="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 className="font-bold text-sm">How to Ensure Consistency in Online Orders Across
                                            Multiple
                                            Restaurant Locations</h4>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to="/brand-experience" className="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/four.webp')} alt="Blog Image" className="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 className="font-bold text-sm">Creating a Unified Brand Experience: Connecting Your
                                            Restaurant’s Online and Offline Presence</h4>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to="/future-shaping" className="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/five.webp')} alt="Blog Image" className="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 className="font-bold text-sm">How Technology is Shaping the Future of the and how
                                            Trends
                                            Redefining Restaurant Industry</h4>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to="/online-reputation" className="flex flex-row hover:text-blue-600">
                                    <img src={require('../../assets/six.webp')} alt="Blog Image" className="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <h4 className="font-bold text-sm">Boost Your Restaurant’s Online Reputation: How to Ask
                                            for
                                            Reviews Without Sounding Pushy</h4>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

