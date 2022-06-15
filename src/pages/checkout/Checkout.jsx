import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import cartPriceTotal from "../../utils/cartPriceTotal/cartPriceTotal";

import classes from "./checkout.module.css";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  const nvigate = useNavigate();

  const [order, setOrder] = useState({
    products: cart,
    name: "",
    family: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    zipCode: "",
    date: new Date(),
    productsPriceTotal: cartPriceTotal(cart),
    pricePost: null,
    priceTotal: cartPriceTotal(cart),
  });

  useEffect(() => {
    cart.length === 0 && nvigate("/cart");
  }, []);

  return <section className={classes.checkout}>checkout</section>;
};

export default Checkout;
