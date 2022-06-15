import {
  ADD_TO_CART,
  DELETE_IN_CART,
  EDIT_IN_CART,
  CLEAR_ALL_CART,
} from "./cartTypes";

import {
  getItems,
  addItem,
  editItem,
  deleteItem,
} from "../../services/LocalStorage";

const initialState = {
  cart: getItems("cart"),
};

const productReducers = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: addItem("cart", payload) };
    case EDIT_IN_CART:
      return {
        ...state,
        cart: editItem("cart", payload.newProduct, payload.index),
      };
    case DELETE_IN_CART:
      return { ...state, cart: deleteItem("cart", action.payload) };
    case CLEAR_ALL_CART:
      localStorage.removeItem("cart");
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default productReducers;
