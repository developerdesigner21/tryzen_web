import React, { useState } from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/mainlogo.png';
import Features from "./features/Features";
import IntroSection from "./introSection/IntroSection";
import BlogsSection from "./BlogsSection";
import ClientReviews from "./ClientReviews";
import Benifits from "./benifit/Benifits";
import Pricing from "./pricing/Pricing";
import Redesign from "./redesign/Redesign";

function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div>
            <div className="bg-transparent p-3 flex justify-between items-center top-0 left-0 right-0 z-50 border border-b">
                <button className="p-2 lg:hidden" onClick={toggleSidebar}>
                    <i className={`fa-solid ${sidebarOpen ? 'fa-times' : 'fa-bars'} text-gray-600`}></i>
                </button>
                <Link to='/' id="brand" className="gap-2 items-center flex-1">
                    <img
                        className="object-cover"
                        src={mainLogo}
                        alt="Logo"
                        style={{ height: "2rem" }}
                    />
                </Link>

                <div id="nav-menu" className="flex hidden lg:flex lg:gap-6 xl:gap-12">
                    <Link to='/restaurent' className="font-semibold hover:text-[#089668] xl:text-lg cursor-pointer">Restaurant</Link>
                    <Link to='/e-commerce' className="font-semibold hover:text-[#089668] xl:text-lg cursor-pointer">E-Commerce</Link>
                    <Link to='/whyTryzen' className="font-semibold hover:text-[#089668] xl:text-lg cursor-pointer">Why This Solution?</Link>
                    <a className="font-semibold hover:text-[#089668] xl:text-lg cursor-pointer">Blogs</a>
                    <a className="font-semibold hover:text-[#089668] xl:text-lg cursor-pointer">Portfolio</a>
                    <a className="font-medium hover:text-[#089668] xl:text-lg cursor-pointer">Calculate Loss</a>
                </div>

                <div className="flex flex-1 justify-end">
                    <button className="flex gap-2 items-center bg-black text-white border border-2 border-black px-1 md:px-4 py-1 md:py-2 rounded-lg hover:border-gray-600">
                        <img
                            src={require('../../assets/freeDesign.png')}
                            alt="free"
                            style={{ height: "1rem" }}
                        />
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk"
                            className="text-sm font-bold"
                        >
                            FREE DESIGN
                        </a>
                    </button>
                </div>
                {sidebarOpen && (
                    <div className="fixed top-0 left-0 w-2/3 md:w-1/3 h-full bg-white shadow-lg z-50 flex flex-col p-5">
                        <div className='flex justify-between items-center'>
                            <Link to='/' id="brand" className="gap-2 items-center flex-1">
                                <img
                                    className="object-cover"
                                    src={mainLogo}
                                    alt="Logo"
                                    style={{ height: "2rem" }}
                                />
                            </Link>
                            <button className="self-end p-2" onClick={toggleSidebar}>
                                <i className="fa-solid fa-times text-gray-600"></i>
                            </button>
                        </div>
                        <nav className="flex flex-col gap-4 mt-5">
                            <Link to="/restaurent" className="font-semibold hover:text-[#089668]" onClick={toggleSidebar}>
                                Restaurant
                            </Link>
                            <Link to="/e-commerce" className="font-semibold hover:text-[#089668]" onClick={toggleSidebar}>
                                E-Commerce
                            </Link>
                            <Link to='/whyTryzen' className="font-semibold hover:text-[#089668]" onClick={toggleSidebar}>
                                Why This Solution?
                            </Link>
                            <a className="font-semibold hover:text-[#089668]" onClick={toggleSidebar}>
                                Blogs
                            </a>
                            <a className="font-semibold hover:text-[#089668]" onClick={toggleSidebar}>
                                Portfolio
                            </a>
                            <a className="font-medium hover:text-[#089668]" onClick={toggleSidebar}>
                                Calculate Loss
                            </a>
                        </nav>
                    </div>
                )}
                {sidebarOpen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>
            <div className="px-2 md:px-6 lg:px-10 xl:px-12 pb-10">
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><IntroSection /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Features /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Redesign /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Benifits /></div>
                <div><Pricing /></div>
            </div>
        </div>

    );
}

export default Home;