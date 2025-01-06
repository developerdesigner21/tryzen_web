import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import mainLogo from '../../assets/mainTryzenLogo.png';
import FreeDesignPopup from "../whyTryzen/freeDesignPopup/FreeDesignPopup";
import './Header.css';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const isActive = (path) => location.pathname === path ? 'text-[#FD7E14]' : 'text-gray-600';

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
            <div className="container mx-auto bg-transparent p-3 flex justify-between items-center">
                <button className="p-2 lg:hidden" onClick={toggleSidebar}>
                    <i className={`fa-solid ${sidebarOpen ? 'fa-times' : 'fa-bars'} text-gray-600`}></i>
                </button>
                <Link to='/' id="brand" className="gap-2 items-center flex-1">
                    <img
                        className="object-cover"
                        src={mainLogo}
                        alt="Logo"
                        style={{ height: "3rem" }}
                    />
                </Link>

                <div id="nav-menu" className="flex hidden lg:flex lg:gap-6 xl:gap-12">
                    <Link to='/restaurent' className={`headers-title font-semibold hover:text-[#FF6802] xl:text-lg cursor-pointer ${isActive('/restaurent')}`}>Restaurant</Link>
                    <Link to='/e-commerce' className={`headers-title font-semibold hover:text-[#FF6802] xl:text-lg cursor-pointer ${isActive('/e-commerce')}`}>E-Commerce</Link>
                    <Link to='/whyTryzen' className={`headers-title font-semibold hover:text-[#FF6802] xl:text-lg cursor-pointer ${isActive('/whyTryzen')}`}>Why This Solution?</Link>
                    {/* <Link to='/blogs' className={`headers-title font-semibold hover:text-[#FF6802] xl:text-lg cursor-pointer ${isActive('/blogs')}`}>Blogs</Link> */}
                </div>

                <div className="flex flex-1 justify-end">
                    <button onClick={handleButtonClick} className="flex gap-2 items-center bg-black text-white font-bold border border-2 border-black px-1 md:px-4 py-1 md:py-2 rounded-lg hover:border-gray-600 free-design-btn">
                        <img
                            src={require('../../assets/freeDesign.png')}
                            alt="free"
                            style={{ height: "1rem" }}
                        />
                        FREE DESIGN
                    </button>
                    <FreeDesignPopup onClose={handlePopupClose} isPopupOpen={isPopupOpen} />
                </div>
                {/* <div className="flex flex-1 justify-end">
                    <button className="flex gap-2 items-center bg-black text-white font-bold border border-2 border-black px-1 md:px-4 py-1 md:py-2 rounded-lg hover:border-gray-600">
                        <Link to="/whyTryzen" className="flex items-center gap-2">
                            <img
                                src={require('../../assets/freeDesign.png')}
                                alt="free"
                                style={{ height: "1rem" }}
                            />
                            FREE DESIGN
                        </Link>
                    </button>
                </div> */}
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
                            <Link to="/restaurent" className={`headers-title font-semibold hover:text-[#FF6802] xl:text-lg cursor-pointer ${isActive('/restaurent')}`} onClick={toggleSidebar}>
                                Restaurant
                            </Link>
                            <Link to="/e-commerce" className={`headers-title font-semibold hover:text-[#FF6802] xl:text-lg cursor-pointer ${isActive('/e-commerce')}`} onClick={toggleSidebar}>
                                E-Commerce
                            </Link>
                            <Link to='/whyTryzen' className={`headers-title font-semibold hover:text-[#FF6802] xl:text-lg cursor-pointer ${isActive('/whyTryzen')}`} onClick={toggleSidebar}>
                                Why This Solution?
                            </Link>
                            {/* <a className="headers-title font-semibold hover:text-[#FF6802]" onClick={toggleSidebar}>
                                    Blogs
                                </a>
                                <a className="headers-title font-semibold hover:text-[#FF6802]" onClick={toggleSidebar}>
                                    Portfolio
                                </a>
                                <a className="headers-title font-medium hover:text-[#FF6802]" onClick={toggleSidebar}>
                                    Calculate Loss
                                </a> */}
                        </nav>
                    </div>
                )}
                {sidebarOpen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                        onClick={toggleSidebar}
                    >
                    </div>
                )}
            </div>
        </div>
    )
}
