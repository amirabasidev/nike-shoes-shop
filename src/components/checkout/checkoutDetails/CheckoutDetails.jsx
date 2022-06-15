import { Card } from "iconsax-react";

import classes from "./checkoutDetails.module.css";

const CheckoutDetails = ({
  productsPriceTotal,
  pricePost,
  priceTotal,
  paymentHandler,
  disabled,
}) => {
  return (
    <div className={classes.checkout__details}>
      <h2 className={classes.checkout__details_title}>Details</h2>
      <h3 className={classes.checkout__details_item}>
        ProductsPriceTotoal : {productsPriceTotal}
      </h3>
      {pricePost && (
        <h3 className={classes.checkout__details_item}>
          PostPrice : {pricePost}
        </h3>
      )}
      <h3 className={classes.checkout__details_item}>
        PriceTotoal : {priceTotal}
      </h3>
      <button
        disabled={disabled}
        onClick={paymentHandler}
        className={`btn-icon btn-primary ${classes.checkout__details_payment}`}
      >
        <span className="icon-white">
          <Card size="100%" />
        </span>
        Payment
      </button>
    </div>
  );
};

export default CheckoutDetails;
