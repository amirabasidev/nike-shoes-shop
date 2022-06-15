import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearAllCart } from "../../redux/cart/cartActions";
import cartPriceTotal from "../../utils/cartPriceTotal/cartPriceTotal";
import fromValidCheckout from "../../utils/formValidate/fromValidCheckout";

import CheckoutDetails from "../../components/checkout/checkoutDetails/CheckoutDetails";
import CheckoutForm from "../../components/checkout/checkoutForm/CheckoutForm";

import classes from "./checkout.module.css";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

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

  const createOrder = async () => {
    setDisabled(true);
    try {
      const response = await fetch(
        "https://amirabasinasab.ir/nike/index.php/orders",
        {
          method: "POST",
          body: JSON.stringify(order),
          headers: {
            "Content-type": "Application/json",
          },
        },
      );

      if (response.ok) {
        toast.success("Order Registered Successfully !");
        dispatch(clearAllCart());
        nvigate("/panel/orders");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setDisabled(false);
    }
  };

  const paymentHandler = () => {
    if (fromValidCheckout(order)) {
      createOrder();
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
      <CheckoutDetails
        productsPriceTotal={order.productsPriceTotal}
        pricePost={order.pricePost}
        priceTotal={order.priceTotal}
        paymentHandler={paymentHandler}
        disabled={disabled}
      />
    </section>
  );
};

export default Checkout;
