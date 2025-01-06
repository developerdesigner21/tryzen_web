import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BrandExperience from './component/blog/BrandExperience';
import BrandJourney from './component/blog/BrandJourney';
import EnhanceOrder from './component/blog/EnhanceOrder';
import EnsureConsistency from './component/blog/EnsureConsistency';
import GrowOffline from './component/blog/GrowOffline';
import IncreaseSales from './component/blog/IncreaseSales';
import OnlineOrdering from './component/blog/OnlineOrdering';
import OptimizeOperation from './component/blog/OptimizeOperation';
import OrderBlog from './component/blog/OrderBlog';
import Plateform from './component/blog/Plateform';
import FutureShaping from './component/blog/FutureShaping';
import Home from './component/home/Home';
import OnlineShift from './component/blog/OnlineShift';
import OnlineReputation from "./component/blog/OnlineReputation";
import RestaurantRank from "./component/blog/RestaurantRank";
import SeoMistakes from "./component/blog/SeoMistakes";
import Restaurent from "./component/restaurent/Restaurent";
import Ecommerce from "./component/ecommerce/Ecommerce";
import WhyTryzen from "./component/whyTryzen/WhyTryzen";
import './App.css';
import Blogs from "./component/blog/Blogs";

// ScrollToTop Component to reset scroll position on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the location changes
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      {/* ScrollToTop component will reset the scroll position on each route change */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-blog" element={<OrderBlog />} />
        <Route path="/increase-sales" element={<IncreaseSales />} />
        <Route path="/enhance-order" element={<EnhanceOrder />} />
        <Route path="/grow-offline" element={<GrowOffline />} />
        <Route path="/online-ordering" element={<OnlineOrdering />} />
        <Route path="/plateform" element={<Plateform />} />
        <Route path="/optimize-operation" element={<OptimizeOperation />} />
        <Route path="/ensure-consistency" element={<EnsureConsistency />} />
        <Route path="/brand-experience" element={<BrandExperience />} />
        <Route path="/brand-journey" element={<BrandJourney />} />
        <Route path="/future-shaping" element={<FutureShaping />} />
        <Route path="/online-shift" element={<OnlineShift />} />
        <Route path="/online-reputation" element={<OnlineReputation />} />
        <Route path="/restaurant-rank" element={<RestaurantRank />} />
        <Route path="/seo-mistakes" element={<SeoMistakes />} />
        <Route path="/restaurent" element={<Restaurent />} />
        <Route path="/e-commerce" element={<Ecommerce />} />
        <Route path="/whyTryzen" element={<WhyTryzen />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
