import React, { useState, useEffect} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BlogsSection from './BlogsSection';
import './Blogs.css'

export default function Blogs() {
    return (
        <div>
            <Header />
            <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16 responsive-container`}>
                <BlogsSection />
            </div>
            <Footer />
        </div>
    )
}
