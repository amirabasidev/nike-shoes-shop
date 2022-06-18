import { createElement, useRef } from "react";
import { ArrowDown3 } from "iconsax-react";

import classes from "./accordion.module.css";

const Accordion = ({ title, icon, children }) => {
  const accordion__Ref = useRef(null);

  const toggleAccordion = () => {
    accordion__Ref.current &&
      accordion__Ref.current.classList.toggle(classes.show);
  };
  
  return (
    <div className={classes.accordion} ref={accordion__Ref}>
      <div className={classes.accordion__head} onClick={toggleAccordion}>
        <span className={`icon ${classes.accordion__head_icon}`}>
          {createElement(icon, { size: "100%" })}
        </span>
        <h6 className={classes.accordion__head_title}>{title}</h6>
        <span className={`icon ${classes.accordion__trigger}`}>
          <ArrowDown3 size="100%" />
        </span>
      </div>
      <div className={classes.accordion__content}>
      {children}
      </div>
    </div>
  );
};

export default Accordion;
