import { Link } from "react-router-dom";
import { CloseSquare, ArrowCircleRight } from "iconsax-react";

import ProductSizes from "./productSizes/ProductSizes";
import ProductColors from "./productColors/ProductColors";

import classes from "./compareProduct.module.css";

const CompareProduct = ({ product }) => {
  return (
    <div className={classes.compare__product}>
      <div className={classes.compare__product_img}>
        <img src={product.image} alt={product.name} />
      </div>
      <h5 className={classes.compare__product_name}>{product.name}</h5>
      <ProductSizes sizes={product.sizes} />
      <ProductColors colors={product.colors}/>
      {/* Product Featrues */}
      <button className={`icon ${classes.compare__product_delete}`}>
        <CloseSquare size="100%" />
      </button>
      <Link
        className={`btn-icon btn-primary ${classes.compare__product_view}`}
        to={`/product/${product.name}`}
      >
        View Product
        <span className="icon-white">
          <ArrowCircleRight size="100%" />
        </span>
      </Link>
    </div>
  );
};

export default CompareProduct;
