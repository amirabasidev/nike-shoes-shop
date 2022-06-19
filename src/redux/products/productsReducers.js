import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from "./productsTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case GET_PRODUCTS_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default productReducers;
