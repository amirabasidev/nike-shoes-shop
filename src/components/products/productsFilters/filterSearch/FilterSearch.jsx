import { useDispatch, useSelector } from "react-redux";
import { FilterSearch as FilterSearchIcon } from "iconsax-react";

import { filterSearch } from "../../../../redux/filters/filtersActions";
import Accordion from "../../../UI/accordion/Accordion";

import classes from "./filterSearch.module.css";

const FilterSearch = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.filters.search);

  const onChangeHandler = (e) => dispatch(filterSearch(e.target.value));

  return (
    <Accordion title="search" icon={FilterSearchIcon}>
      <div className="form-control">
        <input
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="Please Enter Name Product"
          className={classes.filter__search_input}
        />
      </div>
    </Accordion>
  );
};

export default FilterSearch;
