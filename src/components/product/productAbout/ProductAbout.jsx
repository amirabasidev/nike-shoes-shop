import DOMPurify from "dompurify";
import { useSelector } from "react-redux";

import classes from './productAbout.module.css'

const ProductAbout = () => {
  const { about } = useSelector((state) => state.product.product);

  const cleanHTML = DOMPurify.sanitize(about, {
    USE_PROFILES: { html: true },
  });

  return <article className={classes.product__about} dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
};

export default ProductAbout;
