import React, { useState } from 'react';
import './TryzenTable.css';
import GreenCheckIcon from "../../../assets/greenCheck.png";
import CrossIcon from "../../../assets/redCross.png";
import TryzenLogo from "../../../assets/trzenTableLogo.png";
import TryzenSmallLogo from "../../../assets/tryzenSmallLogo.png";
import FreeDesignPopup from '../freeDesignPopup/FreeDesignPopup';

export default function TryzenTable() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const isSmallScreen = window.innerWidth < 540;
    const columns = [
        {
            // name: "Tryzen Solution",
            logo: isSmallScreen ? TryzenSmallLogo : TryzenLogo,
            features: [
                "Expert team ready to deliver <br> immediate results.",
                "Flexibility with no traps or long <br> term contracts pay monthly.",
                "Custom strategies tailored to grow <br> your business.",
                "Clear reporting and weekly updates <br> without follow-up.",
                "Premium designs that resonate <br> with your target audience.",
                "Launch-ready services tailored <br> to your needs.",
            ],
            checks: [true, true, true, true, true, true],
        },
        {
            name: isSmallScreen ? "Typical Agencies" : "Typical Agencies <br> or Big Company",
            features: [
                "Long onboarding process with <br> junior members with low authority.",
                "3-12+ month contracts with no <br> personalized design.",
                "Most of the time you have to follow <br>  up for ideas and updates.",
                "You have to follow up with low <br> authority person who is dependent on <br> other team members.",
                "90% of companies provide generic <br> designs with limited focus on branding.",
                "Delayed timelines with multiple <br> approvals with teams.",
            ],
            checks: [false, false, false, false, false, false],
        },
        {
            name: isSmallScreen ? "Hiring In-House" : "Hiring <br> In-House",
            features: [
                "Time-consuming hiring and <br> training.",
                "Stuck with staff even if <br> underperforming.",
                "Employees may lack <br> market-tested expertise.",
                "Employee bias and <br> limited accountability.",
                "Quality varies depending on <br> team skill.",
                "Takes weeks or months to <br> onboard and train.",
            ],
            checks: [false, false, false, false, false, false],
        },
    ];

    const featureDescriptions = [
        "Plug & Play Performance Team",
        "No Lock in Contracts",
        "Proactive Growth Strategies",
        "Full Transparency of Results",
        "Focus on Quality and Branding",
        "Time to Start Growing Business",
    ];

    return (
        <div className="comparison-table-container bg-[#112747] py-5 md:p-6 rounded-lg">
            <h2 className="tryzen-title font-extrabold text-xl md:text-2xl xl:text-3xl mb-1 md:mb-2">WHY TRYZEN SOLUTION</h2>
            <h3 className="subtitle text-2xl md:text-4xl lg:text-6xl mb-10">Is Better Choice To Grow</h3>
            <div>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th></th>
                            {columns.map((col, index) => (
                                <th key={index} className={col.logo === TryzenLogo || col.logo === TryzenSmallLogo ? "highlight-header" : ""}>
                                    <div className="platform-header">
                                        {col.logo && (
                                            <img src={col.logo} alt={col.name} className="logo object-contain" />
                                        )}
                                        <div dangerouslySetInnerHTML={{ __html: col.name }} />
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {featureDescriptions.map((feature, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className="feature table-content">{feature}</td>
                                {columns.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={col.logo === TryzenLogo || col.logo === TryzenSmallLogo ? "highlight-column" : ""}
                                    >
                                        {col.checks[rowIndex] ? (
                                            <img src={GreenCheckIcon} alt="Check" className="icon" />
                                        ) : (
                                            <img src={CrossIcon} alt="Cross" className="icon" />
                                        )}
                                        <div className='table-content hidden md:block text-white text-xs md:text-sm' dangerouslySetInnerHTML={{ __html: col.features[rowIndex] }} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="apply-button-container mt-8">
                <button onClick={handleButtonClick} className="table-content apply-button px-2 py-2 md:px-6 md:py-3 text-lg md:text-2xl lg:text-3xl">APPLY FOR YOUR FREE WEBSITE DESIGN</button>
                <FreeDesignPopup onClose={handlePopupClose} isPopupOpen={isPopupOpen} />
            </div>
        </div>
    );
}
