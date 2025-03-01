import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import LoadingIcon from "./LoadingIcon";

// ScrollToTop Component to reset scroll position on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the location changes
  }, [location]);

  return null;
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="img-dots-container">
        <LoadingIcon />
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}

const Home = React.lazy(() => import("./component/home/Home"));
// const OrderBlog = React.lazy(() => import("./component/blog/OrderBlog"));
// const IncreaseSales = React.lazy(() => import("./component/blog/IncreaseSales"));
// const EnhanceOrder = React.lazy(() => import("./component/blog/EnhanceOrder"));
// const GrowOffline = React.lazy(() => import("./component/blog/GrowOffline"));
// const OnlineOrdering = React.lazy(() => import("./component/blog/OnlineOrdering"));
// const Plateform = React.lazy(() => import("./component/blog/Plateform"));
// const OptimizeOperation = React.lazy(() => import("./component/blog/OptimizeOperation"));
// const EnsureConsistency = React.lazy(() => import("./component/blog/EnsureConsistency"));
// const BrandExperience = React.lazy(() => import("./component/blog/BrandExperience"));
// const BrandJourney = React.lazy(() => import("./component/blog/BrandJourney"));
// const FutureShaping = React.lazy(() => import("./component/blog/FutureShaping"));
// const OnlineShift = React.lazy(() => import("./component/blog/OnlineShift"));
// const OnlineReputation = React.lazy(() => import("./component/blog/OnlineReputation"));
// const RestaurantRank = React.lazy(() => import("./component/blog/RestaurantRank"));
// const SeoMistakes = React.lazy(() => import("./component/blog/SeoMistakes"));
const Restaurant = React.lazy(() => import("./component/restaurant/Restaurant"));
const Ecommerce = React.lazy(() => import("./component/ecommerce/Ecommerce"));
const WhyTryzen = React.lazy(() => import("./component/whyTryzen/WhyTryzen"));
// const Blogs = React.lazy(() => import("./component/blog/Blogs"));

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // useEffect(() => {
  //   const loadPage = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate loading delay
  //     setIsPageLoaded(true);
  //   };

  //   loadPage();
  // }, []);

  const imagePaths = [
    require('./assets/ecommerce.webp'),
    require('./assets/restaurent.webp'),
    require('./assets/ecomFashion.webp'),
    require('./assets/ecomAppliances.webp'),
    require('./assets/ecomHomedecore.webp'),
    require('./assets/ecomSmartDeice.webp'),
    require('./assets/why1.webp'),
    require('./assets/why2.webp'),
    require('./assets/why3.webp'),
    require('./assets/why4.webp'),
    require('./assets/redesignBGStroke.webp'),
    require('./assets/resStep-1.gif'),
    require('./assets/resStep-2.gif'),
    require('./assets/resStep-3.gif'),
    require('./assets/resStep-4.gif'),
  ];

  useEffect(() => {
    let loadedImages = 0;

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === imagePaths.length) {
            setIsPageLoaded(true);
          }
          resolve();
        };
      });
    };

    Promise.all(imagePaths.map(loadImage)).then(() => setIsPageLoaded(true));
  }, []);

  return (
    <>
      <div style={{display:isPageLoaded?'none':'block'}}>
        <LoadingScreen />
      </div>
      <div style={{display:!isPageLoaded?'none':'block'}}>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/order-blog" element={<OrderBlog />} />
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
              <Route path="/seo-mistakes" element={<SeoMistakes />} /> */}
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/e-commerce" element={<Ecommerce />} />
              <Route path="/whyTryzen" element={<WhyTryzen />} />
              {/* <Route path="/blogs" element={<Blogs />} /> */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
