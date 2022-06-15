import { Add, Minus } from "iconsax-react";

import classes from "./cartProductQuantity.module.css";

const CartProductQuantity = ({ quantity, setQuantity }) => {
  const increaseProductQuantity = (e) => {
    const newQuantity = quantity + 1;
    setQuantity(e, newQuantity);
  };

  const decreaseProductQuantity = (e) => {
    if (quantity !== 1) {
      const newQuantity = quantity - 1;
      setQuantity(e, newQuantity);
    }
  };

  return (
    <div className={classes.cart__Product_quantity}>
      <h6 className="head__lg">quantity : </h6>
      <span className="icon" onClick={decreaseProductQuantity}>
        <Minus size="100%" name="quantity" />
      </span>
      <h6 className={classes.cart__Product_quantity_count}>{quantity}</h6>
      <span className="icon" onClick={increaseProductQuantity}>
        <Add size="100%" name="quantity" />
      </span>
    </div>
  );
};

export default CartProductQuantity;
