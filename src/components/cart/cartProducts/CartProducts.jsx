import { useSelector } from "react-redux";

import CartProduct from "./cartProduct/CartProduct";

import classes from "./cartProducts.module.css";

const CartProducts = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <section className={classes.cart__products}>
      {cart.map((product, index) => (
        <CartProduct key={product.id} product={product} index={index} />
      ))}
    </section>
  );
};

export default CartProducts;
