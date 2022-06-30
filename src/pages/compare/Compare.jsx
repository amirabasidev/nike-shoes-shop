import { getItems } from "../../services/LocalStorage";

import useFetch from "../../hooks/useFetch";

import Error from "../../components/error/Error";
import Spinner from "../../components/UI/spinner/Spinner";
import CompareEmpty from '../../components/compare/compareEmpty/CompareEmpty'
import CompareProduct from '../../components/compare/compareProduct/CompareProduct'

import classes from "./compare.module.css";

const Compare = () => {
  const compareItems = getItems("compare");

  const {
    data: products,
    loading,
    error,
    getDataItems,
    deleteDataItem,
  } = useFetch(
    [],
    "https://amirabasinasab.ir/nike/index.php/compare?id=",
    compareItems,
  );

  return (
    <section className={classes.compare}>
      {loading ? (
        <Spinner minHeight="inherit" />
      ) : error !== null ? (
        <Error error={error} retry={getDataItems} />
      ) : products.length > 0 ? (
        <section className={classes.compare__products}>
          {products.map((product, index) => (
            <CompareProduct
              key={product.id}
              product={product}
              index={index}
              deleteDataItem={deleteDataItem}
            />
          ))}
        </section>
      ) : (
        <CompareEmpty />
      )}
    </section>
  );
};

export default Compare;
