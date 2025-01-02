import React, { useState } from 'react';
import "./SuccessStory.css";

export default function SuccessStory() {
    const sections = [
        {
            title: "Joseph’s Dream Burger",
            description: "Estamos locos por nuestros usuarios, y Uber nos ayuda a atenderlos mejor. Uber Eats nos ayuda a atraer a nuevos usuarios, mientras que Uber Direct nos ofrece una forma rentable de ayudar a entregar los pedidos que recibimos en nuestro sitio web o por teléfono.",
            author: "Zack Yarmak",
            image: require('../../../assets/story1.webp')
        },
        {
            title: "White Castle delivers",
            description: "White-label delivery with Uber for orders received on our website or app reduces our costs compared to orders we get from third-party apps, yet it still maintains the same level of convenience that our loyal customers expect.",
            author: "Steve Foreman",
            image: require('../../../assets/story2.webp'),
        },
        {
            title: "Burger King",
            description: "With Uber Direct, our orders go out quickly. The delivery time is really good due to Uber’s third-party logistics. As a result, customer satisfaction is high.",
            author: "Melina Rönpagel",
            image: require('../../../assets/story3.webp'),
        },
        {
            title: "Salad House",
            description: "Uber Direct are a winning combo. Uber Direct helps bring Salad House to audiences that may have never known about us. Uber Direct makes it easier to deliver to our loyal customers who order directly from our website or app.",
            author: "Jarrod Bravo",
            image: require('../../../assets/story4.webp'),
        },
        {
            title: "EB Games",
            description: "Around 25% of our online customers are happy to pay for the immediate gratification – for the guarantee that they can receive their order today within two hours.",
            author: "Adrian McKenzie",
            image: require('../../../assets/story5.webp'),
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
        <div className="story-container gap-5 rounded-xl">
            <div className="left-section p-3 md:p-">
                <h2 className='uber-service text-lg md:text-xl'>UBER DIRECT SERVICE</h2>
                <h3 className='success-story text-lg md:text-xl md:mb-5'>SUCCESS STORY</h3>
                {sections.map((section, index) => (
                    <div key={index} className="dropdown">
                        <div
                            className={`dropdown-header ${currentSection.title === section.title ? "active mb-2" : "text-[#038851]"
                                }`}
                            onClick={() => toggleSection(section)}
                        >
                            {section.title}
                            <span className="arrow" style={{ transform: `rotate(${currentSection.title === section.title ? 0 : 180}deg)` }}></span>
                        </div>
                        {currentSection.title === section.title && (
                            <div className="dropdown-content pb-2">
                                <p>{section.description}</p>
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
                        className="section-image md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px]"
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
