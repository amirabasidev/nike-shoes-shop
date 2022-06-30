import { Link } from "react-router-dom";
import { Arrow, ArrowRight } from "iconsax-react";

import classes from "./compareEmpty.module.css";

const CompareEmpty = () => {
  return (
    <div className={classes.compare__empty}>
      <span className={`icon ${classes.compare__empty_icon}`}>
        <Arrow size="100%" />
      </span>
      <p className={classes.compare__empty_text}>There Are No Products To Compare !</p>
      <Link className="btn-icon btn-primary" to="/products">
        Go To Products
        <span className="icon-white">
          <ArrowRight size="100%" />
        </span>
      </Link>
    </div>
  );
};

export default CompareEmpty;
