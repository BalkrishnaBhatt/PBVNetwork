import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: true,
  homeActivities: [],
  // isLoadingHomeActivities: '',
  homeNews: [],
  homeLatestNews: [],
  homeOpportunity: [],
  // homePBVGroupProfile: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_ACTIVITIES:
      return {
        ...state,
        homeActivities: action.list,
        isLoading: false,
      };
    case actionTypes.GET_HOME_NEWS:
      return {
        ...state,
        homeNews: action.list,
        isLoading: false,
      };
    case actionTypes.GET_HOME_LATEST_NEWS:
      return {
        ...state,
        homeLatestNews: action.list,
        isLoading: false,
      };
    case actionTypes.GET_HOME_OPPOTUNITY:
      return {
        ...state,
        homeOpportunity: action.list,
        isLoading: false,
      };
    // case actionTypes.GET_HOME_PBV_GROUP_PROGILE:
    //   return {
    //     ...state,
    //     homePBVGroupProfile: action.list,
    //     isLoading: false,
    //   };
    case actionTypes.SET_HOME_LOADING:
      return {
        ...state,
        isLoading: action.loaderState,
      };
    default:
      return state;
  }
};

export default HomeReducer;
