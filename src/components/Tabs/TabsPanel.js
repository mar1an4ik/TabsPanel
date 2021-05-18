import React, { useState } from 'react';

import "./style.css";
import Tab from "./Tab";

const TabsPanel = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);

  const tabNames = [
    "Job Focus", "Soft Skills", "Technical Skills", "Functional Expertise",
    "Domain Expertise", "Patent Expertise", "Personal Expertise",
    "Job Focus2", "Soft Skills2", "Technical Skills2", "Functional Expertise2"
  ];

  const getShadowPosition = () => {
    return `${showLeftShadow && showRightShadow && "left-and-right-shadow"} 
        ${showLeftShadow && "left-shadow"} 
        ${showRightShadow && "right-shadow"}`;
  };

  const scrollTabsPanel = e => {
    let scrolledFromLeft = e.target.scrollLeft;
    let scrollFullSize = e.target.scrollWidth - e.target.clientWidth - 1;

    scrolledFromLeft !== 0 ? setShowLeftShadow(true) : setShowLeftShadow(false);
    scrolledFromLeft >= scrollFullSize ? setShowRightShadow(false) : setShowRightShadow(true);
  };

  return (
    <ul
      onScroll={scrollTabsPanel}
      className={"nav " + getShadowPosition()}
    >
      {
        tabNames.map((name) =>
          <Tab
            key={name}
            text={name}
            isActive={activeTab === name}
            setActiveTab={setActiveTab}
          />)
      }
    </ul>
  );
};

export default TabsPanel;
