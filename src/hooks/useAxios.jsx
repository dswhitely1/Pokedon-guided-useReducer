import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = initialUrl => {
  const [url, setUrl] = useState(initialUrl);
  const FETCH_START = 'FETCH_START';
  const FETCH_SUCCESS = 'FETCH_SUCCESS';
  const FETCH_FAILURE = 'FETCH_FAILURE';

  const initialState = {
    data: {},
    isLoading: false,
    error: null,
  };

  const axiosReducer = (state, action) => {
    switch (action.type) {
      case FETCH_START:
        return { ...state, data: {}, isLoading: true, error: null };
      case FETCH_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: null,
        };
      case FETCH_FAILURE:
        return { ...state, data: {}, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(axiosReducer, initialState);

  useEffect(() => {
    dispatch({type: FETCH_START})
    axios.get(url)
      .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
      .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}) );
  }, [url]);

  return [state, setUrl];
};
