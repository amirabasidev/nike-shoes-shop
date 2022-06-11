import { useSelector } from "react-redux";

import classes from "./productColors.module.css";

const ProductColors = () => {
  const { colors } = useSelector((state) => state.product.product);

  return (
    <div className={classes.product__colors}>
      <h6 className="head__lg">colors : </h6>
      <div className={classes.product__colors_items}>
        {colors.map((color, index) => (
          <label key={index} className={classes.product__color}>
            <input
              value={color.price}
              type="radio"
              name="color"
              className={classes.product__color_input}
            />
            <span style={{ backgroundColor: color.color }}></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
