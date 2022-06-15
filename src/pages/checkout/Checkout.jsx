import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import cartPriceTotal from "../../utils/cartPriceTotal/cartPriceTotal";

import CheckoutForm from "../../components/checkout/checkoutForm/CheckoutForm";

import classes from "./checkout.module.css";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  const nvigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
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

  const onChangeHandler = (e) => {
    setOrder((prevOrder) => ({ ...prevOrder, [e.target.id]: e.target.value }));

    if (e.target.id === "pricePost") {
      setOrder((prevOrder) => ({
        ...prevOrder,
        priceTotal: +e.target.value + cartPriceTotal(cart),
      }));
    }
  };

  useEffect(() => {
    cart.length === 0 && nvigate("/cart");
  }, []);

  return (
    <section className={classes.checkout}>
      <CheckoutForm
        onChangeHandler={onChangeHandler}
        values={order}
        disabled={disabled}
      />
    </section>
  );
};

export default Checkout;
