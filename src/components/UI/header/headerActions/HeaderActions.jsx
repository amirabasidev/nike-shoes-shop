import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ArrowSwapVertical,
  SearchNormal1,
  ShoppingCart,
  User,
} from "iconsax-react";

import classes from "./headerActions.module.css";

const HeaderActions = () => {
  const { cart } = useSelector((state) => state.cart);
  
  return (
    <section className={classes.header__actions}>
      <span className="icon">
        <SearchNormal1 size="100%" />
      </span>
      <Link to="/login" className="icon">
        <User size="100%" />
      </Link>
      <Link to="/cart" className={`icon ${classes.cart__icon}`}>
        <ShoppingCart size="100%" />
        <span className={classes.cart__icon_count}>{cart.length}</span>
      </Link>
      <Link to="/compare" className="icon">
        <ArrowSwapVertical size="100%" />
      </Link>
    </section>
  );
};

export default HeaderActions;
