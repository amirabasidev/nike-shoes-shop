import {
  FILTER_SEARCH,
  FILTER_CATEGORY,
  FILTER_PRICE,
  CLEAR_ALL_FILTER,
} from "./filtersTypes";

const initialState = {
  search: "",
  categories: [],
  price: [0, 0],
};

const filterCategory = (categories, categoryId) => {
  const indexCategoryId = categories.indexOf(categoryId);

  if (indexCategoryId === -1) {
    return [...categories, categoryId];
  } else {
    categories.splice(indexCategoryId, 1);
    return categories;
  }
};

const productReducers = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case FILTER_SEARCH:
      return { ...state, search: payload };
    case FILTER_CATEGORY:
      return {
        ...state,
        categories: filterCategory(state.categories, payload),
      };
    case FILTER_PRICE:
      return { ...state, price: payload };
    case CLEAR_ALL_FILTER:
      return initialState;
    default:
      return state;
  }
};

export default productReducers;
