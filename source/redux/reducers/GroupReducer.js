import * as actionTypes from '../actionTypes';

const initialState = {
  allGroups: [],
  myGroups: [],
  isLoading: true,
};

const GroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_GROUPS:
      // console.log('all group called', initialState.allGroups);
      return {
        ...state,
        allGroups: action.list,
        isLoading: false,
      };
    case actionTypes.GET_MY_GROUPS:
      // console.log('all my called', initialState.myGroups);
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
