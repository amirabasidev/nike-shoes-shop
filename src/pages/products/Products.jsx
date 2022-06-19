import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../redux/products/productsActions";
import { clearAllFilter } from "../../redux/filters/filtersActions";

import Error from "../../components/error/Error";
import Spinner from "../../components/UI/spinner/Spinner";

import classes from "./products.module.css";

const Products = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      dispatch(clearAllFilter());
    }

    dispatch(getProducts(categoryName));
  }, [categoryName]);

  return (
    <section className={classes.products}>
      {loading ? (
        <Spinner minHeight="88vh" />
      ) : error !== null ? (
        <Error error={error} retry={getProducts} />
      ) : products.length > 0 ? (
        <>
          {/* Products Filter */}
          {/* Products Items */}
        </>
      ) : (
        "Not Found Products"
      )}
    </section>
  );
};

export default Products;
