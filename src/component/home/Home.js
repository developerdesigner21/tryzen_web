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

function Home() {
    usePageMeta('Tryzen Solution', 'Boost your restaurants online sales with Tryzen Solution, create custom e-commerce website development and manage multiple outlet and online orders across country without paying any commissions to third-party apps. Get a free website demo now','restaurant website design, online order management, food delivery website, custom restaurant websites, commission-free food ordering, multi-outlet management, multi-location store, multi-vendor e-commerce platform, restaurant website  with Tryzen Solution');
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1800);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Header />
            <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pt-16 responsive-container`}>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><IntroSection /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Features /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Redesign /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Benifits /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Pricing /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><HomeWhyTryzen /></div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;