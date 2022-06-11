import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddSquare } from "iconsax-react";

import classes from "./productDetails.module.css";
import ProductSize from "./productSize/ProductSize";

const ProductDetails = () => {
  const { name, categoryName, description, price } = useSelector(
    (state) => state.product.product,
  );

  return (
    <section className={classes.product__details}>
      <h1 className={classes.product__details_name}>{name}</h1>
      <h3 className="head__lg">
        category :{" "}
        <Link
          className={classes.product__details_category_link}
          to={`/category/${categoryName}`}
        >
          {categoryName}
        </Link>
      </h3>
      <p className={classes.product__details_desc}>{description}</p>
      <ProductSize />
      <h6 className="head__lg">
        price :{" "}
        <span className={classes.product__details_price}>{price} $</span>
      </h6>
      <button
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
