import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/mainlogo.png';
import DesignMySite from './designMySite/DesignMySite';
import Plans from './plan/Plans';
import BeforeAfter from './beforeAfter/BeforeAfter';
import TryzenTable from './tryzenTable/TryzenTable';
import Header from '../header/Header';
import Footer from "../footer/Footer";
import './WhyTryzen.css';
import usePageMeta from '../../usePageMeta';
import BoostSales from './boostSales/BoostSales';
import WhyTryzenSection from './whyTryzenSection/WhyTryzenSection';

export default function WhyTryzen() {
    usePageMeta('FREE DESIGN', 'Discover the benefits of partnering with Tryzen Solution. Schedule a free design consultation to see how our services can fill bater to your customers.','Free website demo, FREE Custom Website design');

    return (
        <div>
            <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pt-16 responsive-container`}>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><DesignMySite /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><BeforeAfter /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><TryzenTable /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Plans /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><WhyTryzenSection /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><BoostSales /></div>
            </div>
        </div>
    )
}
