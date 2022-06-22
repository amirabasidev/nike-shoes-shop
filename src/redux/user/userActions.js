import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOGOUT_USER,
} from "./userTypes";

export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token != undefined) {
    dispatch({ type: GET_USER });
    try {
      const response = await fetch(
        "https://amirabasinasab.ir/nike/user/index.php",
        {
          method: "GET",
          headers: {
            "x-auth-token": token,
          },
        },
      );

      if (response.ok) {
        const user = await response.json();
        dispatch({ type: GET_USER_SUCCESS, payload: user });
      }
    } catch (error) {
      dispatch({ type: GET_USER_FAILED, payload: error });
    }
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT_USER });
};
