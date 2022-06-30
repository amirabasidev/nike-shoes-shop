import { Layer } from "iconsax-react";

import classes from "./productActions.module.css";

const ProductActions = () => {
  return (
    <section className={classes.product__actions}>
      <button className={`icon ${classes.product__actions_icon}`}>
        <Layer size="100%" />
      </button>
    </section>
  );
};

export default ProductActions;
