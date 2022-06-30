import { useSelector } from "react-redux";

import classes from "./productFeatrues.module.css";

const ProductFeatrues = ({ productFeatrues }) => {
  const featrues =
    productFeatrues ?? useSelector((state) => state.product.product.featrues);

  const featrueItems = Object.keys(featrues);

  const classItemFeatrues = productFeatrues
    ? classes.product__featrues_item_compare
    : classes.product__featrues_item;

  return (
    <section className={classes.product__featrues}>
      <ul className={classes.product__featrues_ul}>
        {featrueItems.map((title,index) => (
          <li key={index} className={classItemFeatrues}>
            <span className={classes.product__featrues_item_title}>
              {title}
            </span>
            <span className={classes.product__featrues_item_value}>
              {featrues[title]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductFeatrues;
