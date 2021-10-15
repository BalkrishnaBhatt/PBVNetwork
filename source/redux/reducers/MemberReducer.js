import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: '',
  allMembers: [],
};

const MemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MEMBER_LOADING:
      // console.log('loaderState: ', action.loaderState);
      return {
        ...state,
        isLoading: action.loaderState,
      };
    case actionTypes.GET_ALL_MEMBERS:
      // console.log('loaderState: ', action.loaderState);
      return {
        ...state,
        allMembers: action.list,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default MemberReducer;
