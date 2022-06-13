import { MessageCircle } from "iconsax-react";

import classes from "./productCommentsEmpty.module.css";

const ProductCommentsEmpty = () => {
  return (
    <section className={classes.product__comments_empty}>
      <span className={`icon ${classes.product__comments_empty_icon}`}>
        <MessageCircle size="100%" />
      </span>
      <p className={classes.product__comments_empty_text}>you the first to comment</p>
    </section>
  );
};

export default ProductCommentsEmpty;
