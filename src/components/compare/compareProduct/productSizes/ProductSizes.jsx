import classes from './productSizes.module.css'

const ProductSizes = ({ sizes }) => {
  const sizeItems = Object.keys(sizes);

  return (
    <div className={classes.product__sizes}>
      <h5 className="head__lg">sizes : </h5>
      <div className={classes.product__sizes_items}>
      {sizeItems.map((size) => {
        return (
          <div key={size} className={classes.product__sizes_item}>{size}</div>
        )
      })}
      </div>
    </div>
  );
};

export default ProductSizes;
