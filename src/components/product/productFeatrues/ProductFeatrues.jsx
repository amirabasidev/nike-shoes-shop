import { useSelector } from "react-redux";

import classes from "./productFeatrues.module.css";

const ProductFeatrues = () => {
  const { featrues } = useSelector((state) => state.product.product);

  const featrueItems = Object.keys(featrues);

  return (
    <section className={classes.product__featrues}>
      <ul className={classes.product__featrues_ul}>
        {featrueItems.map((title) => (
          <li className={classes.product__featrues_item}>
            <span className={classes.product__featrues_item_title}>{title}</span>
            <span className={classes.product__featrues_item_value}>{featrues[title]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductFeatrues;
