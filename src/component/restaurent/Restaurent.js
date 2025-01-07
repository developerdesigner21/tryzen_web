import React,{ useState, useEffect } from 'react';
import './Restaurent.css';
import FoodDelivery from './foodDelivery/FoodDelivery';
import BentoGrid from './bento/BentoGrid';
import UberDirect from './uberDirect/UberDirect';
import SuccessStory from './successStory/SuccessStory';
import ImageScroller from './ImageScroll/ImageScroller';
import Header from '../header/Header';
import Redesign from '../redesign/Redesign';
import Footer from '../footer/Footer';
import usePageMeta from '../../usePageMeta';

export default function Restaurent() {
  usePageMeta('Custom Online Food Ordering', 'Increase your restaurant online sales with Tryzen Solution custom online ordering systems, offering interactive features and personalized recommendations to enhance customer engagement','Restaurant online ordering systems, Increase restaurant sales, Customer engagement, Personalized recommendations, Digital presence for restaurants');
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
