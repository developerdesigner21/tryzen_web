import React from "react";
import './Home.css';
import Features from "./features/Features";
import IntroSection from "./introSection/IntroSection";
import Benifits from "./benifit/Benifits";
import Pricing from "./pricing/Pricing";
import Header from "../header/Header";
import Redesign from "../redesign/Redesign";
import Footer from "../footer/Footer";

function Home() {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16">
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><IntroSection /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Features /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Redesign /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Benifits /></div>
                <div><Pricing /></div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;