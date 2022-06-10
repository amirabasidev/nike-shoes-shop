import { SET_LOADING,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAILED } from "./productTypes";

const initialState = {
  product: null,
  loading: false,
  error: null,
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, product: action.payload, loading: false, error: null };
    case GET_PRODUCT_FAILED:
        return {...state, error: action.payload,loading:false}
    default:
      return state;
  }
};

export default productReducers;
