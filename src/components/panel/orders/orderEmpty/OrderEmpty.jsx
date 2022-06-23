import { ArrowRight, BagHappy } from "iconsax-react";
import { Link } from "react-router-dom";

import classes from "./orderEmpty.module.css";

const OrderEmpty = () => {
  return (
    <section className={classes.order__empty}>
      <span className={`icon ${classes.order__empty_icon}`}>
        <BagHappy size="100%" />
      </span>
      <p className={classes.order__empty_title}>Orders Empty !</p>
      <Link className="btn-icon btn-primary" to="/products">
        Go To Products
        <span className="icon-white">
          <ArrowRight size="100%" />
        </span>
      </Link>
    </section>
  );
};

export default OrderEmpty;
