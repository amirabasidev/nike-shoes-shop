import { Link } from "react-router-dom";

import classes from "./productsItem.module.css";

const ProductsItem = ({ product }) => {
  const { name, image, price, colors } = product;

  return (
    <Link className={classes.products__item} to={`/product/${name}`}>
      <div className={classes.products__item_img}>
        <img src={image} alt={name} />
      </div>
      <h3 className={classes.products__item_name}>{name}</h3>
      <h6 className={classes.products__item_price}>{price} $ </h6>
      <div className={classes.products__item_colors}>
        {colors.map((color, index) => (
          <span
            key={index}
            className={classes.products__item_color}
            style={{ background: color }}
          ></span>
        ))}
      </div>
    </Link>
  );
};

export default ProductsItem;
