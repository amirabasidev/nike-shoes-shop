import { Link } from "react-router-dom";
import { CloseSquare, ArrowCircleRight } from "iconsax-react";
import { deleteItem } from "../../../services/LocalStorage";

import ProductSizes from "./productSizes/ProductSizes";
import ProductColors from "./productColors/ProductColors";
import ProductFeatrues from "../../product/productFeatrues/ProductFeatrues";

import classes from "./compareProduct.module.css";

const CompareProduct = ({ product, index, deleteDataItem }) => {
  const deleteProduct = () => {
    deleteItem("compare", index);
    deleteDataItem(product.id);
  };
  return (
    <div className={classes.compare__product}>
      <div className={classes.compare__product_img}>
        <img src={product.image} alt={product.name} />
      </div>
      <h5 className={classes.compare__product_name}>{product.name}</h5>
      <ProductSizes sizes={product.sizes} />
      <ProductColors colors={product.colors} />
      <ProductFeatrues productFeatrues={product.features} />
      <button
        onClick={deleteProduct}
        className={`icon ${classes.compare__product_delete}`}
      >
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
