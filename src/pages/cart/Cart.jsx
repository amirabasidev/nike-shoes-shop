import { useSelector } from "react-redux";

import CartProducts from "../../components/cart/cartProducts/CartProducts";

import classes from "./cart.module.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <section className={classes.cart}>
      {cart.length > 0 ? (
        <>
          <CartProducts />
        </>
      ) : (
        <div>Cart Empty</div>
      )}
    </section>
  );
};

export default Cart;
