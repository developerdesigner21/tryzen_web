import React,{ useState, useEffect } from "react";
import './Home.css';
import Features from "./features/Features";
import IntroSection from "./introSection/IntroSection";
import Benifits from "./benifit/Benifits";
import Pricing from "./pricing/Pricing";
import Header from "../header/Header";
import Redesign from "../redesign/Redesign";
import Footer from "../footer/Footer";
import usePageMeta from "../../usePageMeta";
import HomeWhyTryzen from "./homeWhyTryzen/HomeWhyTryzen";
import HomeBenifit from "./homeBenifit/HomeBenifit";

function Home() {
    usePageMeta('Tryzen Solution', 'Boost your sales with custom Solution, Create a custom e-commerce or food-ordering website to manage multiple outlets and online orders nationwide—without paying commissions to third-party apps. Get a free website demo today! Keywords: restaurant website design, online order management, food delivery website, custom restaurant websites, commission-free food ordering, multi-outlet management, multi-location store, multi-vendor e-commerce platform, restaurant website by Tryzen Solution.');

    return (
        <div>
            <Header />
            <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pt-16 responsive-container`}>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><IntroSection /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Features /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Redesign /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Benifits /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><HomeBenifit /></div>
                {/* <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Pricing /></div> */}
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><HomeWhyTryzen /></div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;