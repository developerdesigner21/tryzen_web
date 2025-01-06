import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BlogsSection from './BlogsSection';

export default function Blogs() {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16">
                <BlogsSection />
            </div>
            {/* <Footer /> */}
        </div>
    )
}
