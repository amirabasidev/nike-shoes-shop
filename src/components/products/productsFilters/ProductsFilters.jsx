import { FilterSquare } from "iconsax-react";

import useToggle from "../../../hooks/useToggle";

import classes from "./productsFilters.module.css";

const ProductsFilters = () => {
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
        {/* Filters Search */}
        {/* Filters Category */}
        {/* Filters Price */}
      </section>
    </ContainerToggle>
  );
};

export default ProductsFilters;
