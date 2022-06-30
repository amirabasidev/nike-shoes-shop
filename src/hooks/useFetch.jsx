import { useEffect, useReducer } from "react";

const useFetch = (defaultValue, url) => {
  const FETCH_REQUEST = "FETCH_REQUEST";
  const FETCH_REQUEST_SUCCESS = "FETCH_USER_SUCCESS";
  const FETCH_REQUEST_FAIURE = "FETCH_USER_FAIURE";

  const initialState = {
    data: defaultValue,
    error: null,
    loading: false,
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case FETCH_REQUEST:
        return { ...state, loading: true };
      case FETCH_REQUEST_SUCCESS:
        return { ...state, data: action.payload, error: null, loading: false };
      case FETCH_REQUEST_FAIURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const getRequest = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      return Promise.resolve(error);
    }
  };

  const getData = async () => {
    dispatch({ type: FETCH_REQUEST });
    try {
      const data = await getRequest(url);

      dispatch({ type: FETCH_REQUEST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_REQUEST_FAIURE, payload: error });
    }
  };

  useEffect(() => {
    url !== "" && getData();
  }, [url]);

  return { ...state, getData };
};

export default useFetch;
