import React from 'react';
import './Restaurent.css';
import FoodDelivery from './foodDelivery/FoodDelivery';
import BentoGrid from './bento/BentoGrid';
import UberDirect from './uberDirect/UberDirect';
import SuccessStory from './successStory/SuccessStory';
import ImageScroller from './ImageScroll/ImageScroller';
import Header from '../header/Header';
import Redesign from '../redesign/Redesign';
import Footer from '../footer/Footer';

export default function Restaurent() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16">
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><FoodDelivery /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><ImageScroller /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><BentoGrid /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Redesign /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><SuccessStory /></div>
        <div><UberDirect /></div>
      </div>
      <Footer />
    </div>
  )
};
