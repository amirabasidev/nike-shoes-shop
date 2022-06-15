import {
  ADD_TO_CART,
  EDIT_IN_CART,
  DELETE_IN_CART,
  CLEAR_ALL_CART,
} from "./cartTypes";

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};

export const editCart = (newProduct, index) => (dispatch) => {
  const payload = { newProduct, index };
  dispatch({ type: EDIT_IN_CART, payload });
};

export const deleteCart = (index) => (dispatch) => {
  dispatch({ type: DELETE_IN_CART, payload: index });
};

export const clearAllCart = () => (dispatch) => {
  dispatch({ type: CLEAR_ALL_CART });
};
