import { combineReducers } from "redux";

import productsReducers from "./products/productsReducers";
import productReducers from "./product/productReducers";
import cartReducers from "./cart/cartReducers";
import filtersReducers from "./filters/filtersReducers";

const rootReducers = combineReducers({
  products: productsReducers,
  product: productReducers,
  cart: cartReducers,
  filters: filtersReducers,
});

export default rootReducers;
