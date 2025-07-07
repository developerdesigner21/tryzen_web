import React, { useState, useEffect, useRef } from 'react';
import "./SuccessStory.css";

export default function SuccessStory() {
    const sections = [
        {
            title: "Joseph’s Dream Burger",
            description: "We're crazy about our rivers and it's difficult to attract new riders were stuck! Uber Direct really help us a cost-effective way to help deliver orders very quickly! we receive on our website, apps and over the phone.",
            author: "Zack Yarmak",
            image: require('../../../assets/success1.webp')
        },
        {
            title: "White Castle delivers",
            description: "White-label delivery with Uber for orders received on our website or app reduces our costs compared to orders we get from third-party apps, yet it still maintains the same level of convenience that our loyal customers expect.",
            author: "Steve Foreman",
            image: require('../../../assets/success2.webp'),
        },
        {
            title: "Burger King (Germany)",
            description: "With Uber Direct, our orders go out quickly. The delivery time is really good due to Uber’s third-party logistics. As a result, customer satisfaction is high and it also help us to save 25+ percentages profit batter services.",
            author: "Melina Rönpagel",
            image: require('../../../assets/success3.webp'),
        },
        {
            title: "Salad House",
            description: "Uber Direct are a winning combo. Uber Direct helps bring Salad House to audiences that may have never known about us. Uber Direct makes it easier to deliver to our loyal customers who order directly from our website or app.",
            author: "Jarrod Bravo",
            image: require('../../../assets/success4.webp'),
        },
        {
            title: "EB Games",
            description: "Around 25% of our online customers are happy to pay for the immediate gratification – for the guarantee that they can receive their order today within two hours UberDirect is really helpful game changer for us.",
            author: "Adrian McKenzie",
            image: require('../../../assets/success5.webp'),
        },
        {
            title: "Harris Farm",
            description: "We chose Uber Direct to improve the customer experience and reduce order delivery costs. Right off the bat, we went from same-day delivery to delivery in just 2 hours, and we reduced our average cost per delivery significantly.",
            author: "Mitch Grave",
            image: require('../../../assets/success6.webp'),
        },
    ];

    const [currentSection, setCurrentSection] = useState(sections[0]);
    const [isMobile, setIsMobile] = useState(false);

    const sectionRefs = useRef([]);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const sectionElement = sectionRefs.current[currentSection.title];
            if (sectionElement) {
                window.scrollTo({
                    top: sectionElement.offsetTop - 80, // Adjust scroll by 80px for fixed header
                    behavior: 'smooth'
                });
            }
        }
    }, [currentSection.title])

    const toggleSection = (section) => {
        if (currentSection.title === section.title) {
            setCurrentSection({});
        } else {
            setCurrentSection(section);
        }
    };

    return (
        <div id="uberDirect">
            <div className='text-center'>
                <h1 className='uber-service text-md md:text-2xl xl:text-3xl mb-1 md:mb-2'>SUCCESS STORIES OF</h1>
                <h1 className='success-story text-2xl md:text-4xl lg:text-6xl mb-8 md:mb-10'>Uber Direct Service</h1>
            </div>
            <div className="story-container gap-5 rounded-xl">
                <div className="left-section p-3 xl:p-16">
                    {sections.map((section, index) => (
                        <div key={index} className="dropdown">
                            <div
                                ref={(el) => (sectionRefs.current[section.title] = el)}
                                id={section.title}
                                className={`dropdown-header xl:text-lg ${currentSection.title === section.title ? "active mb-2" : "text-[#038851]"} `}
                                onClick={() => toggleSection(section)}
                            >
                                {section.title}
                                <span className="arrow" style={{ transform: `rotate(${currentSection.title === section.title ? 0 : 180}deg)` }}></span>
                            </div>
                            <div className="dropdown-content pb-2" style={{ display: currentSection.title === section.title ? "block" : "none" }}>
                                <p className='story-content xl:text-lg'>{section.description}</p>
                                <p className="story-content author font-bold">{section.author}</p>
                                <div className="dropdown-image">
                                    <img src={section.image} alt={section.title} className="section-image" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="right-section hidden md:block">
                    {currentSection.image ? (
                        <img
                            src={currentSection.image}
                            alt={currentSection.title}
                            className="section-image"
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
