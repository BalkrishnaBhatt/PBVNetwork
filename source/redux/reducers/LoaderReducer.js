import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: '',
};

const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADER:
      // console.log('loaderState: ', action.loaderState);
      return {
        ...state,
        isLoading: action.loaderState,
      };
    default:
      return state;
  }
};

export default LoaderReducer;
