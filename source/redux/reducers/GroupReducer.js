import * as actionTypes from '../actionTypes';

const initialState = {
  allGroups: [],
  myGroups: [],
  isLoading: true,
};

const GroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_GROUPS:
      return {
        ...state,
        allGroups: action.list,
        isLoading: false,
      };
    case actionTypes.GET_MY_GROUPS:
      return {
        ...state,
        myGroups: action.list,
        isLoading: false,
      };
    case actionTypes.SET_GROUP_LOADING:
      return {
        ...state,
        isLoading: action.loaderState,
      };
    default:
      return state;
  }
};

export default GroupReducer;
