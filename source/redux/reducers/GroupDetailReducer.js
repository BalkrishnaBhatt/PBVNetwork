import * as actionTypes from '../actionTypes';

const initialState = {
  email: '',
  token: '',
};

const GroupDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        email: action.email,
        token: action.message,
      };
    default:
      return state;
  }
};

export default GroupDetailReducer;
