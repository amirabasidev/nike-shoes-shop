import { useSelector } from "react-redux";

import CartProducts from "../../components/cart/cartProducts/CartProducts";
import CartDetails from "../../components/cart/cartDetails/CartDetails";

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
        <div>Cart Empty</div>
      )}
    </section>
  );
};

export default Cart;
