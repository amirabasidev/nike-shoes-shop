import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FilterSquare } from "iconsax-react";

import useToggle from "../../../hooks/useToggle";
import FilterCategory from "./filterCategory/FilterCategory";

import FilterSearch from "./filterSearch/FilterSearch";

import classes from "./productsFilters.module.css";
import FilterPrice from "./filterPrice/FilterPrice";

const ProductsFilters = () => {
  const { categoryName } = useParams();

  const products = useSelector((state) => state.products.products);

  const [
    productsFiltes__Ref,
    openProductsFiltes,
    closeProductsFiltes,
    ContainerToggle,
  ] = useToggle(classes.products__filtes_show);

  return (
    <ContainerToggle>
      <button
        onClick={openProductsFiltes}
        className={`${classes.products__filtes_open} btn-icon btn-white`}
      >
        <span className="icon">
          <FilterSquare size="100%" />
        </span>
        Filters
      </button>
      <section ref={productsFiltes__Ref} className={classes.products__filtes}>
        <FilterSearch />
        {!categoryName && <FilterCategory />}
        {products.length > 3 && <FilterPrice />}
      </section>
    </ContainerToggle>
  );
};

export default ProductsFilters;
