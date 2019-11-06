import { useReducer } from 'react';

export const useForm = (initialState, callback) => {
  const FORM_CHANGE = 'FORM_CHANGE';
  const FORM_SUBMIT = 'FORM_SUBMIT';

  const formReducer = (state, action) => {
    switch (action.type) {
      case FORM_CHANGE:
        return { ...state, [action.payload.name]: action.payload.value };
      case FORM_SUBMIT:
        return initialState;
      default:
        return state;
    }

  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = ({target: {name, value}}) => dispatch({type: FORM_CHANGE, payload: {name, value}});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(callback);
    callback();
    dispatch({type: FORM_SUBMIT})
  }

  return [state, handleChange, handleSubmit]
};
