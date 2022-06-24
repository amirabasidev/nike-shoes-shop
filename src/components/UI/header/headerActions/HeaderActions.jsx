import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ArrowSwapVertical,
  SearchNormal1,
  ShoppingCart,
  User,
} from "iconsax-react";

import { getUser } from "../../../../redux/user/userActions";

import classes from "./headerActions.module.css";

const HeaderActions = ({ openSearchBar }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);
  const isLogin = useSelector((state) => state.user.isLogin);

  const accountUrl = isLogin ? "/panel" : "/login";

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <section className={classes.header__actions}>
      <button onClick={openSearchBar} className="icon">
        <SearchNormal1 size="100%" />
      </button>
      <Link to={accountUrl} className="icon">
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
