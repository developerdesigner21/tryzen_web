import React, { useState } from 'react';
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
    ];

    const [currentSection, setCurrentSection] = useState(sections[0]);
    const [lastActiveSection, setLastActiveSection] = useState(sections[0]);

    const toggleSection = (section) => {
        if (currentSection.title === section.title) {
            setCurrentSection({});
        } else {
            setCurrentSection(section);
            setLastActiveSection(section);
        }
    };

    return (
        <div id="uberDirect" className="story-container gap-5 rounded-xl">
            <div className="left-section p-3 xl:p-16">
                <h2 className='uber-service text-lg md:text-xl'>UBER DIRECT SERVICE</h2>
                <h3 className='success-story text-lg md:text-xl md:mb-5'>SUCCESS STORY</h3>
                {sections.map((section, index) => (
                    <div key={index} className="dropdown">
                        <div
                            className={`dropdown-header xl:text-lg ${currentSection.title === section.title ? "active mb-2" : "text-[#038851]"
                                }`}
                            onClick={() => toggleSection(section)}
                        >
                            {section.title}
                            <span className="arrow" style={{ transform: `rotate(${currentSection.title === section.title ? 0 : 180}deg)` }}></span>
                        </div>
                        {currentSection.title === section.title && (
                            <div className="dropdown-content pb-2">
                                <p className='xl:text-lg'>{section.description}</p>
                                <p className="author font-bold">{section.author}</p>
                                <div className="dropdown-image">
                                    <img src={section.image} alt={section.title} className="section-image" />
                                </div>
                            </div>
                        )}
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
                ) : (
                    <img
                        src={lastActiveSection.image}
                        alt={lastActiveSection.title}
                        className="section-image"
                    />
                )}
            </div>
        </div>
    )
}
