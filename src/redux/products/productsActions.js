import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
} from "./productsTypes";

export const getProducts = (categoryName) => async (dispatch) => {
  categoryName = categoryName ? `categoryName='${categoryName}'` : "";

  dispatch({ type: GET_PRODUCTS });
  try {
    const response = await fetch(
      `https://amirabasinasab.ir/nike/index.php/productitems?${categoryName}`,
    );
    const product = await response.json();

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: product });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILED, payload: error });
  }
};
