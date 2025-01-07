import React, { useState, useEffect} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BlogsSection from './BlogsSection';
import './Blogs.css'

export default function Blogs() {
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
            <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16 ${isWideScreen ? 'responsive-container' : ''}`}>
                <BlogsSection />
            </div>
            <Footer />
        </div>
    )
}
