import { useCallback, useState } from "react";

import useToggle from "../../../../hooks/useToggle";
import useFetch from "../../../../hooks/useFetch";
import debounce from "../../../../utils/debounce/debounce";

import Error from "../../../error/Error";
import Spinner from "../../../UI/spinner/Spinner";
import SearchBarProduct from "./searchBarProduct/SearchBarProduct";

import classes from "./searchBar.module.css";

const SearchBar = ({ searchBar__Ref, closeSearchBar, SearchBarContainer }) => {
  const [url, setUrl] = useState("");

  const {
    data: products,
    loading,
    error,
    fetchData: getProducts,
  } = useFetch([], url);

  const [
    searchBarProducts__Ref,
    openSearchBarProducts,
    closeSearchBarProducts,
  ] = useToggle(classes.show);

  const onChangeDebounce = useCallback(
    debounce((e) => {
      const { value } = e.target;

      if (value !== "") {
        const newUrl = `https://amirabasinasab.ir/nike/index.php/productitems?q=${value}`;
        setUrl(newUrl);

        openSearchBarProducts();
      } else {
        closeSearchBarProducts();
      }
    }, 1000),
    [],
  );

  return (
    <SearchBarContainer>
      <section ref={searchBar__Ref} className={classes.search__bar}>
        <div className="form-control">
          <input
            onChange={onChangeDebounce}
            type="text"
            placeholder="Enter Name Product ..."
          />
        </div>
        <section
          ref={searchBarProducts__Ref}
          className={classes.search__bar_products}
        >
          {loading ? (
            <Spinner minHeight="280px" />
          ) : error !== null ? (
            <Error error={error} retry={getProducts} />
          ) : (
            products.map((product) => (
              <SearchBarProduct
                key={product.id}
                product={product}
                closeSearchBar={closeSearchBar}
              />
            ))
          )}
        </section>
      </section>
    </SearchBarContainer>
  );
};

export default SearchBar;
