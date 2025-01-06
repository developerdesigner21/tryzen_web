import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/mainlogo.png';
import DesignMySite from './designMySite/DesignMySite';
import Plans from './plan/Plans';
import BeforeAfter from './beforeAfter/BeforeAfter';
import TryzenTable from './tryzenTable/TryzenTable';
import Header from '../header/Header';
import Footer from "../footer/Footer";
import usePageMeta from '../../usePageMeta';

export default function WhyTryzen() {
    usePageMeta('FREE DESGIN', 'Discover the benefits of partnering with Tryzen Solution. Schedule a free design consultation to see how our services can fill bater to your customers.','Free website demo, FREE Custom Website design');
    return (
        <div>
            <Header />
            <div className="container mx-auto px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16">
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><DesignMySite /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><BeforeAfter /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><TryzenTable /></div>
                <div><Plans /></div>
            </div>
            <Footer />
        </div>
    )
}
