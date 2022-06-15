import posts from "../../../../config/posts";

import classes from "./checkoutPosts.module.css";

const CheckoutPosts = ({ onChangeHandler, disabled }) => {
  return (
    <div className={classes.checkout__posts}>
      <h4 className="head__lg">Posts</h4>
      {posts.map(({ name, price, key }) => (
        <label key={key} className={classes.checkout__post}>
          <input
            onChange={onChangeHandler}
            id="pricePost"
            name="pricePost"
            type="radio"
            disabled={disabled}
            value={price}
          />
          <span className={classes.checkout__post_name}>{name}</span>
          <span className={classes.checkout__post_price}>{price} $</span>
        </label>
      ))}
    </div>
  );
};

export default CheckoutPosts;
