import { Link } from "react-router-dom";

import classes from "./orderProduct.module.css";

const OrderProduct = ({ product }) => {
  const image = Object.values(product.images)[0][0];

  return (
    <div className={classes.order__product}>
      <div className={classes.order__product_img}>
        <img src={image} alt={product.name} />
      </div>
      <div className={classes.order__product_details}>
        <h3 className={classes.order__product_details_name}>{product.name}</h3>
        <h4 className={classes.order__product_details_item}>
          size : <span>{product.size}</span>
        </h4>
        <h4 className={classes.order__product_details_item}>
          quantity : <span>{product.quantity}</span>
        </h4>
        <h4 className={classes.order__product_details_item}>
          priceTotal : <span>{product.priceTotal} $</span>
        </h4>
        <Link target="_blank" className="btn btn-warning" to={`/product/${product.name}`}>
          View Product
        </Link>
      </div>
    </div>
  );
};

export default OrderProduct;
