import { useEffect, useReducer } from "react";

const useFetch = (defaultValue, url, items) => {
  const FETCH_REQUEST = "FETCH_REQUEST";
  const FETCH_REQUEST_SUCCESS = "FETCH_USER_SUCCESS";
  const FETCH_REQUEST_FAIURE = "FETCH_USER_FAIURE";
  const DELETE_DATA_ITEM = "DELETE_DATA_ITEM";

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
      case DELETE_DATA_ITEM:
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.payload),
        };
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

  const getDataItems = () => {
    dispatch({ type: FETCH_REQUEST });

    const getItems = items.map((item) => getRequest(url + item));

    Promise.all(getItems)
      .then((data) => {
        dispatch({ type: FETCH_REQUEST_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_REQUEST_FAIURE, payload: error });
      });
  };

  const deleteDataItem = (id) => {
    dispatch({ type: DELETE_DATA_ITEM, payload: id });
  };

  useEffect(() => {
    if (items !== undefined && items.length > 0) {
      getDataItems();
    } else if (items === undefined && url !== "") {
      getData();
    }
  }, [url]);

  return { ...state, getData, getDataItems, deleteDataItem };
};

export default useFetch;
