import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/products/productActions";

import Error from "../../components/error/Error";
import Spinner from "../../components/UI/spinner/Spinner";
import ProductBreadcrumb from "../../components/product/productBreadcrumb/ProductBreadcrumb";
import ProductImages from "../../components/product/productImages/ProductImages";

import classes from "./product.module.css";

const Product = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(name));
  }, []);

  return (
    <section className={classes.product}>
      {loading ? (
        <Spinner minHeight="88vh" />
      ) : error !== null ? (
        <Error error={error} retry={() => dispatch(getProduct(name))} />
      ) : (
        product !== null && (
          <>
            <ProductBreadcrumb />
            <section className={classes.product__content}>
              <ProductImages />
            </section>
          </>
        )
      )}
    </section>
  );
};

export default Product;
