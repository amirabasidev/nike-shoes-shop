import classes from "./productColors.module.css";

const ProductColors = ({ colors }) => {
  return (
    <div className={classes.product__colors}>
      <h5 className="head__lg">colors : </h5>
      <div className={classes.product__colors_items}>
        {colors.map(({ color }, index) => (
          <span
            key={index}
            className={classes.product__colors_item}
            style={{ background: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
