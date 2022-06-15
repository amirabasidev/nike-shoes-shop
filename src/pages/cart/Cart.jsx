import { useSelector } from "react-redux";

import classes from "./cart.module.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  
  return (
    <section className={classes.cart}>
      {cart.length > 0 ? (
        <div>
          Cart
        </div>
      ) : (
        <div>
          Cart Empty
        </div>
      )}
    </section>
  );
};

export default Cart;
