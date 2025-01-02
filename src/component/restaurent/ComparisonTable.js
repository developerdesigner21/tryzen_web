import React from "react";
import "./ComparisonTable.css";
import OrangeCheckIcon from "../../assets/check-icon.png";
import GrayCheckIcon from "../../assets/whiteCheck.png";
import CrossIcon from "../../assets/cross-icon.png";

const ComparisonTable = () => {
  const platforms = [
    { name: "TryzenSolution", features: [true, true, true, false, false] },
    { name: "Wordpress", features: [false, false, false, true, true] },
    { name: "Wix.com", features: [false, false, false, true, true] },
    { name: "Shopify", features: [false, false, false, true, true] },
    { name: "Squarespace", features: [false, false, false, true, true] },
  ];

  const features = [
    "Rebuilds your website to drive more online sales with SEO",
    "Gives you control over your customer data, even if you decide to leave the platform",
    "Better fit for restaurants that want to build their own direct order channel",
    "Lists your restaurant on a marketplace along with other competitors in your area",
    "Cheap Monthly Cost",
  ];

  return (
    <div className="comparison-table">
      <h2 className='plateform font-bold text-md md:text-xl lg:text-2xl mb-2 lg:mb-5'>CHOOSE THE RIGHT PLATEFORM</h2>
      <h3 className='business font-semibold text-3xl md:text-4xl lg:text-5xl mb-10'>FOR YOUR BUSINESS</h3>
      <div>
        <table className="table-container">
          <thead>
            <tr>
              <th className="p-2 md:p-3 lg:p-5 xl:p-6"></th>
              {platforms.map((platform, index) => (
                <th key={index} className={platform.name === "TryzenSolution" ? "highlight-header p-2 md:p-3 lg:p-5 xl:p-6" : "p-2 md:p-3 lg:p-5 xl:p-6"}>
                  {platform.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, rowIndex) => (
              <tr key={rowIndex}>
                <td className="feature p-2 md:p-3 lg:p-5 xl:p-6">{feature}</td>
                {platforms.map((platform, colIndex) => (
                  <td
                    key={colIndex}
                    className={platform.name === "TryzenSolution" ? "highlight-column p-2 md:p-2 lg:p-5 xl:p-6" : "p-2 md:p-3 lg:p-5 xl:p-6"}
                  >
                    {platform.features[rowIndex] ? (
                      <img
                        src={platform.name === "TryzenSolution" ? GrayCheckIcon : OrangeCheckIcon}
                        alt="Check"
                        className="icon"
                      />
                    ) : (
                      <img src={CrossIcon} alt="Cross" className="icon" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;