import { Link } from "react-router-dom";
import classes from "./searchBarProduct.module.css";

const SearchBarProduct = ({ product, closeSearchBar }) => {
  return (
    <Link
      className={classes.search__bar_product}
      to={`/product/${product.name}`}
      onClick={closeSearchBar}
    >
      <div className={classes.search__bar_product_img}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={classes.search__bar_product_details}>
        <h6 className={classes.search__bar_product_name}>{product.name}</h6>
        <span className={classes.search__bar_product_price}>
          {product.price}
        </span>
      </div>
    </Link>
  );
};

export default SearchBarProduct;
