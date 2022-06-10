import { combineReducers } from "redux";

import productReducers from "./products/productReducers";

const rootReducers = combineReducers({
  product: productReducers,
});

export default rootReducers;
