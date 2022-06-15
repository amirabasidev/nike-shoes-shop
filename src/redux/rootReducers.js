import { combineReducers } from "redux";

import productReducers from "./products/productReducers";
import cartReducers from "./cart/cartReducers";

const rootReducers = combineReducers({
  product: productReducers,
  cart: cartReducers
});

export default rootReducers;
