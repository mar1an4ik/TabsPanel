import React from "react";

const Tab = props => {
  const {
    text,
    isActive,
    setActiveTab
  } = props;

  const clickTab = event => {
    event.target.scrollIntoView();
    setActiveTab(text);
  }

  return (
    <li
      className={`nav-item ${isActive && "active-tab"} ${text === "Domain Expertise" && "disabled-tab"}`}
      onClick={clickTab}
    >
      {text}
    </li>
  );
};

export default Tab;
