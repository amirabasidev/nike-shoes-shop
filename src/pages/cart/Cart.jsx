import { useSelector } from "react-redux";

import CartProducts from "../../components/cart/cartProducts/CartProducts";
import CartDetails from "../../components/cart/cartDetails/CartDetails";
import CartEmpty from "../../components/cart/cartEmpty/CartEmpty";

import classes from "./cart.module.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <section className={classes.cart}>
      {cart.length > 0 ? (
        <>
          <CartProducts />
          <CartDetails />
        </>
      ) : (
        <CartEmpty />
      )}
    </section>
  );
};

export default Cart;
