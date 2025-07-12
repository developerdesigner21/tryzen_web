import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import LoadingIcon from "./LoadingIcon";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

// ScrollToTop Component to reset scroll position on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the location changes
  }, [location]);

  return null;
}

function LoadingScreen() {
  const calcWidth =() =>{
    if (window.innerWidth < 640) {
      return window.innerWidth
    } else if (window.innerWidth < 1024) {
      return window.innerWidth * 0.5
    } else {
      return window.innerWidth * 0.25
    }
  }
  
  return (
    <div className="loading-screen">
      <div className="img-dots-container h-auto" style={{width:calcWidth()+'px', padding:"32px", marginBottom:"64px"}} >
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
const Blogs = React.lazy(() => import("./component/blog/Blogs"));
const BlogPost  = React.lazy(() => import("./component/blog/BlogPost"));
const Admin = React.lazy(() => import("./component/admin/Admin"));
// const ContactUs = React.lazy(() => import("./component/contact-us/ContactUs"));
// const Services = React.lazy(() => import("./component/services/Services"));

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let timeoutId;
    let retryCount = 0;
    const maxRetries = 50; // 5 seconds max (50 * 100ms)

    const checkFontsLoaded = () => {
      const testElement = document.createElement('div');
      testElement.style.fontFamily = '"LarkenDEMO-Black", "DupincelSmallTest-SemiBoldItalic", "CraftRounded-Regular", monospace';
      testElement.style.position = 'absolute';
      testElement.style.visibility = 'hidden';
      testElement.style.fontSize = '72px';
      testElement.textContent = 'Test';
      document.body.appendChild(testElement);

      const computedFont = window.getComputedStyle(testElement).fontFamily;
      document.body.removeChild(testElement);
      const isLoaded = computedFont.includes('LarkenDEMO') || computedFont.includes('Dupincel') || computedFont.includes('CraftRounded');
      
      if (isLoaded || retryCount >= maxRetries) {
        setFontsLoaded(true);
        if (timeoutId) clearTimeout(timeoutId);
      } else {
        retryCount++;
        timeoutId = setTimeout(checkFontsLoaded, 100);
      }
    };
    checkFontsLoaded();

    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('1em "LarkenDEMO-Black"'),
        document.fonts.load('1em "DupincelSmallTest-SemiBoldItalic"'),
        document.fonts.load('1em "CraftRounded-Regular"')
      ]).then(() => {
        setFontsLoaded(true);
        if (timeoutId) clearTimeout(timeoutId);
      }).catch(() => {
        checkFontsLoaded();
      });
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Image loading detection
  useEffect(() => {
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

    let loadedImages = 0;

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === imagePaths.length) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          loadedImages++;
          if (loadedImages === imagePaths.length) {
            setImagesLoaded(true);
          }
          resolve();
        };
      });
    };

    Promise.all(imagePaths.map(loadImage)).then(() => setImagesLoaded(true));
  }, []);

  // Set page as loaded when both fonts and images are loaded
  useEffect(() => {
    if (fontsLoaded && imagesLoaded) {
      setIsPageLoaded(true);
    }
  }, [fontsLoaded, imagesLoaded]);

  return (
    <>
      <div style={{display:isPageLoaded?'none':''}}>
        <LoadingScreen />
      </div>
      <div style={{display:!isPageLoaded?'none':'block'}}>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<LoadingScreen />}>
            <Header />
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
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="/ts-admin" element={<Admin />} />
              {/* <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services" element={<Services />} /> */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
