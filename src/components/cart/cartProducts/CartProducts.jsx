import { useSelector } from "react-redux";

import classes from "./cartProducts.module.css";

const CartProducts = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <section className={classes.cart__products}>
      {cart.map((product, index) => (
        <div>product</div>
      ))}
    </section>
  );
};

export default CartProducts;
