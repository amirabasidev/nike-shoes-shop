import { useSelector } from "react-redux";

import classes from "./productColors.module.css";

const ProductColors = ({ onChangeHandler, productColors, value }) => {
  const colors =
    productColors ?? useSelector((state) => state.product.product.colors);

  return (
    <div className={classes.product__colors}>
      <h6 className="head__lg">colors : </h6>
      <div className={classes.product__colors_items}>
        {colors.map((color, index) => {
          const check = value ? value.name === color.name : false;
          
          return (
            <label key={index} className={classes.product__color}>
              <input
                value={color.price}
                type="radio"
                name="color"
                checked={check}
                onChange={(e) => onChangeHandler(e, color)}
                className={classes.product__color_input}
              />
              <span style={{ backgroundColor: color.color }}></span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColors;
