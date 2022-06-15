import {  ArrowRight, BagHappy } from "iconsax-react";
import { Link } from "react-router-dom";

import classes from "./cartEmpty.module.css";

const CartEmpty = () => {
  return (
    <div className={classes.cart__empty}>
      <span className={`icon ${classes.cart__empty_icon}`}>
        <BagHappy size="100%" />
      </span>
      <p className={classes.cart__empty_title}>Cart is empty!</p>
      <Link to="/products" className="btn-icon btn-primary">
        Go To Products
        <span className="icon-white">
          <ArrowRight size="100%" />
        </span>
      </Link>
    </div>
  );
};

export default CartEmpty;
