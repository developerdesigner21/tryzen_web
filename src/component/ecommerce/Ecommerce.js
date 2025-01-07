import React,{ useState, useEffect } from 'react';
import './Ecommerce.css';
import CmsWeb from './CmsWeb/CmsWeb';
import ImageScroller from './ImageScroll/ImageScroller';
import EcomBentoGrid from './bento/EcomBentoGrid';
import Header from '../header/Header';
import Redesign from '../redesign/Redesign';
import Footer from '../footer/Footer';
import usePageMeta from '../../usePageMeta';

export default function Ecommerce() {
    usePageMeta('Custom E-commerce Website', 'Create a custom e-commerce website with Tryzen Solution and manage multiple outlets and online orders nationwide without paying commissions to third-party apps. Get a free website demo now','Custom e-commerce development, Online store creation, Commission-free e-commerce platforms, Manage multiple outlets, E-commerce solutions');
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
            <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pt-16 ${isWideScreen ? 'responsive-container' : ''}`}>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><CmsWeb /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><ImageScroller /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><EcomBentoGrid /></div>
                <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Redesign /></div>
            </div>
            <Footer />
        </div>
    )
}
