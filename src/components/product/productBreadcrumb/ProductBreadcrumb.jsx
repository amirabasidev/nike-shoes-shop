import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowRight2 } from "iconsax-react";

import classes from "./productBreadcrumb.module.css";

const ProductBreadcrumb = () => {
  const { name, category } = useSelector((state) => state.product.product);

  return (
    <section className={classes.product__breadcrumb_container}>
      <div className={classes.product__breadcrumb}>
        <Link to="/" className={classes.product__breadcrumb_link}>
          Home
          <ArrowRight2 size="16" />
        </Link>
        <Link
          to={`/category/${category.categoryName}`}
          className={classes.product__breadcrumb_link}
        >
          {category.categoryName}
          <ArrowRight2 size="16" />
        </Link>
        <h6 className={classes.product__breadcrumb_name}>{name}</h6>
      </div>
    </section>
  );
};

export default ProductBreadcrumb;
