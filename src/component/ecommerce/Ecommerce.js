import React from 'react';
import './Ecommerce.css';
import CmsWeb from './CmsWeb/CmsWeb';
import ImageScroller from './ImageScroll/ImageScroller';
import EcomBentoGrid from './bento/EcomBentoGrid';
import Header from '../header/Header';
import Redesign from '../redesign/Redesign';
import Footer from '../footer/Footer';

export default function Ecommerce() {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16">
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><CmsWeb /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><ImageScroller /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><EcomBentoGrid /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Redesign /></div>
            </div>
            <Footer />
        </div>
    )
}
