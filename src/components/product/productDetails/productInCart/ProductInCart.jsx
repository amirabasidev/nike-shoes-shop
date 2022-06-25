import { Link } from "react-router-dom";
import { BagHappy,ArrowRight } from "iconsax-react";

import classes from "./productInCart.module.css";

const ProductInCart = () => {
  return (
    <div className={classes.product__in_cart}>
      <span className={`icon ${classes.product__in_cart_icon}`}>
        <BagHappy size="100%" />
      </span>
      <p className={classes.product__in_cart_title}>
        This product is in the cart
      </p>
      <Link className="btn-icon btn-primary" to="/cart">
        Go To Cart
        <span className="icon-white">
          <ArrowRight size="100%" />
        </span>
      </Link>
    </div>
  );
};

export default ProductInCart;
