import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import filterProducts from "../../../utils/filtersProducts/filtersProducts";

import Pagination from "../../pagination/Pagination";
import ProductsItem from "../../productsSlider/productsItem/ProductsItem";

import classes from "./productItems.module.css";

const ProductItems = () => {
  const range = 6;

  const [currentPage, setCurrentPage] = useState(range);

  const filters = useSelector((state) => state.filters);

  const products = useSelector((state) => state.products.products);

  const onChangePage = (page) => {
    setCurrentPage(page * range);
  };

  const productsFilters = filterProducts(products, filters);

  const productsToShow = productsFilters.slice(
    currentPage - range,
    currentPage,
  );

  useEffect(() => {
    if (currentPage !== range) {
      setCurrentPage(range);
    }
  }, [filters]);

  return (
    <section className={classes.products__items_container}>
      {productsFilters.length > 0 ? (
        <>
          <section className={classes.products__items}>
            {productsToShow.map((product) => (
              <ProductsItem key={product.id} product={product} />
            ))}
          </section>
          <Pagination
            totalItem={productsFilters.length}
            range={range}
            onChangePage={onChangePage}
            currentPage={currentPage}
          />
        </>
      ) : (
        "FiltersNotFound"
      )}
    </section>
  );
};

export default ProductItems;
