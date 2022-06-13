import { useState } from "react";

import TabTitle from "./tabTitle/TabTitle";

import classes from "./tabs.module.css";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={classes.tabs}>
      <div className={classes.tabs__items_container}>
        <ul className={classes.tabs__items}>
          {children.map(({ props }, index) => (
            <TabTitle
              key={index}
              index={index}
              icon={props.icon}
              title={props.title}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
        <span
          style={{ transform: `translateX(${activeTab * 150}px)` }}
          className={classes.border}
        ></span>
      </div>
      {children[activeTab]}
    </section>
  );
};

export default Tabs;
