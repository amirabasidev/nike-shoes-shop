import {
  SET_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} from "./productTypes";

export const getProduct = (productName) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await fetch(
      `https://amirabasinasab.ir/nike/index.php/products?name='${productName}'`,
    );
    const product = await response.json();

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: product });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAILED, payload: error });
  }
};
