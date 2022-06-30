import { ShoppingBag } from "iconsax-react";
import { useParams } from "react-router-dom";

import useFetch from "../../../hooks/useFetch";

import Error from "../../error/Error";
import Spinner from "../../UI/spinner/Spinner";
import OrderProduct from "./orderProduct/OrderProduct";

import classes from "./order.module.css";

const Order = () => {
  const { orderId } = useParams();

  const {
    data: order,
    loading,
    error,
    getData: getOrder,
  } = useFetch(
    null,
    `https://amirabasinasab.ir/nike/index.php/orders?id=${orderId}`,
  );

  return (
    <section>
      {loading ? (
        <Spinner minHeight="220px" />
      ) : error !== null ? (
        <Error error={error} retry={getOrder} />
      ) : (
        order !== null && (
          <>
            <div className={classes.order__details}>
              <h6 className="head__lg">order Id : {orderId}</h6>
              <h6 className="head__lg">name : {order.name}</h6>
              <h6 className="head__lg">family : {order.family}</h6>
              <h6 className="head__lg">address : {order.address}</h6>
              <h6 className="head__lg">zipcode : {order.zipCode}</h6>
              {order.description && (
                <p className="head__lg">description : {order.description}</p>
              )}
              <h6 className={`head__lg ${classes.order__details_price}`}>
                products Price Total : {order.productsPriceTotal}
              </h6>
              <h6 className={`head__lg ${classes.order__details_price}`}>
                pricePost : {order.pricePost}
              </h6>
              <h6 className={`head__lg ${classes.order__details_price}`}>
                priceTotal : {order.priceTotal}
              </h6>
            </div>
            <h2 className={classes.order__products_title}>
              <span className={`icon ${classes.order__products_icon}`}>
                <ShoppingBag size="100%" />
              </span>
              Products
            </h2>
            <div className={classes.order__products}>
            {order.products.map((product) => (
              <OrderProduct product={product} />
            ))}
            </div>
          </>
        )
      )}
    </section>
  );
};

export default Order;
