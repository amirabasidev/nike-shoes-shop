import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOGOUT_USER,
} from "./userTypes";

const initialState = {
  user: null,
  isLogin: false,
  loading: false,
  error: null,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLogin: true,
        loading: false,
        error: null,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOGOUT_USER:
      return { ...state, user: null, isLogin: false };
    default:
      return state;
  }
};

export default userReducers;
