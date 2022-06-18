import { combineReducers } from "redux";

import productReducers from "./product/productReducers";
import cartReducers from "./cart/cartReducers";
import filtersReducers from './filters/filtersReducers'

const rootReducers = combineReducers({
  product: productReducers,
  cart: cartReducers,
  filters: filtersReducers
});

export default rootReducers;
