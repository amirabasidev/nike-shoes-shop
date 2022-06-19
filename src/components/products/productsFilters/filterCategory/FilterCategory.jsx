import { Category } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";

import { filterCategory } from "../../../../redux/filters/filtersActions";
import useFetch from "../../../../hooks/useFetch";

import Error from "../../../error/Error";
import Spinner from "../../../UI/spinner/Spinner";
import Accordion from "../../../UI/accordion/Accordion";

import classes from "./filterCategory.module.css";

const FilterCategory = () => {
  const filterCategories = useSelector((state) => state.filters.categories);

  const dispatch = useDispatch();

  const {
    data: categories,
    loading,
    error,
    fetchData: getCategories,
  } = useFetch([], "https://amirabasinasab.ir/nike/index.php/categories");

  return (
    <Accordion title="category" icon={Category}>
      {loading ? (
        <Spinner minHeight="170px" />
      ) : error !== null ? (
        <Error error={error} retry={getCategories} />
      ) : (
        categories.map(({ categoryName, id }) => {
          const ischecked = filterCategories.some(
            (categoryId) => categoryId === id,
          );

          return (
            <label key={id} className={classes.category}>
              <input
                onChange={() => dispatch(filterCategory(id))}
                type="checkbox"
                defaultChecked={ischecked}
                className={classes.category__checkbox}
              />
              <span className={classes.category__name}>{categoryName}</span>
              <span className={classes.category__checked}></span>
            </label>
          );
        })
      )}
    </Accordion>
  );
};

export default FilterCategory;
