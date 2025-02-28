import React,{ useState, useEffect } from 'react';
import './Restaurant.css';
import FoodDelivery from './foodDelivery/FoodDelivery';
import BentoGrid from './bento/BentoGrid';
import UberDirect from './uberDirect/UberDirect';
import SuccessStory from './successStory/SuccessStory';
import ImageScroller from './ImageScroll/ImageScroller';
import Header from '../header/Header';
import Redesign from '../redesign/Redesign';
import Footer from '../footer/Footer';
import usePageMeta from '../../usePageMeta';

export default function Restaurant() {
  usePageMeta('Food Ordering', 'Maximize revenue with custom online ordering system, offering interactive features and personalized recommendations to enhance customer engagement','Restaurant online ordering systems, Increase restaurant sales, Customer engagement, Personalized recommendations, Digital presence for restaurants');

  return (
    <div>
      <Header />
      <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pt-16 responsive-container`}>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><FoodDelivery /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><ImageScroller /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><BentoGrid /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><Redesign /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><SuccessStory /></div>
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20"><UberDirect /></div>
      </div>
      <Footer />
    </div>
  )
};
