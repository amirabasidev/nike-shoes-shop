import { useSelector } from "react-redux";

import classes from "./productSize.module.css";

const ProductSize = ({ onChangeHandler, productSizes, value }) => {
  const sizes =
    productSizes ?? useSelector((state) => state.product.product.sizes);

  const sizeItems = Object.keys(sizes);

  return (
    <div className={classes.product__size}>
      <h6 className="head__lg">size :</h6>
      <div className={classes.product__size_items}>
        {sizeItems.map((item) => {
          const className = sizes[item]
            ? classes.product__size_item
            : classes.product__size_item_disabled;

          return (
            <label key={+item} className={className}>
              <input
                value={item}
                type="radio"
                name="size"
                onChange={(e) => onChangeHandler(e, +item)}
                checked={+item === value}
                disabled={!sizes[item]}
                className={classes.product__size_input}
              />
              <span className={classes.product__size_value}>{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSize;
