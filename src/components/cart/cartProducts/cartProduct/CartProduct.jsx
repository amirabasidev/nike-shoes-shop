import { Trash } from "iconsax-react";
import { useDispatch } from "react-redux";

import { deleteCart, editCart } from "../../../../redux/cart/cartActions";
import productPriceTotal from "../../../../utils/productPriceTotal/productPriceTotal";

import ProductSize from "../../../product/productDetails/productSize/ProductSize";
import ProductColors from "../../../product/productDetails/productColors/ProductColors";

import classes from "./cartProduct.module.css";
import CartProductQuantity from "./cartProductQuantity/CartProductQuantity";

const CartProduct = ({ product, index }) => {
  const { name, images, colors, color, sizes, size, quantity, priceTotal } =
    product;

  const dispatch = useDispatch();

  const image = Object.values(images)[0][0];

  const onChangeHandler = (e, value) => {
    const propety = e.target.getAttribute("name");

    const newProduct = { ...product, [propety]: value };
    newProduct.priceTotal = productPriceTotal(newProduct);

    dispatch(editCart(newProduct, index));
  };

  const deleteProductHandler = () => dispatch(deleteCart(index));

  return (
    <section className={classes.cart__product}>
      <div className={classes.cart__product_img}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.cart__product_details}>
        <h5 className={classes.cart__product_name}>{name}</h5>
        <form className={classes.cart__product_form}>
          <ProductSize
            productSizes={sizes}
            onChangeHandler={onChangeHandler}
            value={size}
          />
          <ProductColors
            productColors={colors}
            onChangeHandler={onChangeHandler}
            value={color}
          />
          <CartProductQuantity
            quantity={quantity}
            setQuantity={onChangeHandler}
          />
        </form>
        <div className={classes.cart__product_actions}>
          <span
            onClick={deleteProductHandler}
            className={`icon ${classes.cart__product_trash}`}
          >
            <Trash size="100%" />
          </span>
          <h5 className={classes.cart__product_price_total}>{priceTotal}$</h5>
        </div>
      </div>
    </section>
  );
};

export default CartProduct;
