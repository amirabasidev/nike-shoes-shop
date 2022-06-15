import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddSquare } from "iconsax-react";

import { addToCart } from "../../../redux/cart/cartActions";
import formValidProductToCart from "../../../utils/formValidate/formValidProductToCart";
import productPriceTotal from "../../../utils/productPriceTotal/productPriceTotal";

import ProductSize from "./productSize/ProductSize";
import ProductColors from "./productColors/ProductColors";

import classes from "./productDetails.module.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product.product);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    color: null,
    size: null,
    price: product.price,
    priceTotal: product.price,
    quantity: 1,
  });

  const onChangeHandler = (e, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: value,
    }));

    if (e.target.name === "color") {
      setValues((values) => ({
        ...values,
        priceTotal: productPriceTotal(values),
      }));
    }
  };

  const addToCartHandler = () => {
    if (formValidProductToCart(values)) {
      const productToCart = { ...product, ...values };
      delete productToCart.about;

      dispatch(addToCart(productToCart));

      toast.success("Add To Cart successfully !");
    }
  };

  return (
    <section className={classes.product__details}>
      <h1 className={classes.product__details_name}>{product.name}</h1>
      <h3 className="head__lg">
        category :{" "}
        <Link
          className={classes.product__details_category_link}
          to={`/category/${product.categoryName}`}
        >
          {product.categoryName}
        </Link>
      </h3>
      <p className={classes.product__details_desc}>{product.description}</p>
      <ProductSize onChangeHandler={onChangeHandler} value={values.size} />
      <ProductColors onChangeHandler={onChangeHandler} value={values.color} />
      <h6 className="head__lg">
        price :{" "}
        <span className={classes.product__details_price}>
          {values.priceTotal} $
        </span>
      </h6>
      <button
        onClick={addToCartHandler}
        className={`btn-icon btn-primary ${classes.product__add_to_cart}`}
      >
        <span className="icon">
          <AddSquare size="100%" />
        </span>
        add to cart
      </button>
    </section>
  );
};

export default ProductDetails;
