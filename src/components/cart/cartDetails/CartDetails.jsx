import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Category, DollarCircle, ReceiptItem } from "iconsax-react";

import cartPriceTotal from "../../../utils/cartPriceTotal/cartPriceTotal";

import classes from "./cartDetails.module.css";

const CartDetails = () => {
  const { cart } = useSelector((state) => state.cart);

  const priceTotalCart = cartPriceTotal(cart);

  return (
    <section className={classes.cart__details}>
      <h2 className={classes.cart__details_title}>Cart Details</h2>
      <h3 className={classes.cart__details_sub_title}>
        <span className="icon">
          <Category size="100%" />
        </span>
        Count Products : {cart.length}
      </h3>
      <h3 className={classes.cart__details_sub_title}>
        <span className="icon">
          <DollarCircle size="100%" />
        </span>
        Count Products : {priceTotalCart} $
      </h3>
      <Link
        to="/checkout"
        className={`btn-icon btn-success ${classes.cart__details_checkout_btn}`}
      >
        <span className="icon">
          <ReceiptItem size="100%" />
        </span>
        Check Out
      </Link>
    </section>
  );
};

export default CartDetails;
