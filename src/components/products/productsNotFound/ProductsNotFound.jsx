import { useParams } from "react-router-dom";
import { Alarm } from "iconsax-react";

import classes from "./productsNotFound.module.css";

const ProductsNotFound = () => {
  const { categoryName } = useParams();
  return (
    <section className={classes.products_not_found}>
      <span className={`icon ${classes.products_not_found_icon}`}>
        <Alarm size="100%" />
      </span>
      <p className={classes.products_not_found_text}>
        There are no products in this category {categoryName}
      </p>
    </section>
  );
};

export default ProductsNotFound;
