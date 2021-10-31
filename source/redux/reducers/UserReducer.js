import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: true,
  userActivities: [],
  // isLoadingHomeActivities: '',
  userNews: [],
  userLatestNews: [],
  userOpportunity: [],
  userProfile: {},
  userSettings: {},
  // homePBVGroupProfile: [],
  userNotificationUnread: [],
  userNotificationRead: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_ACTIVITIES:
      return {
        ...state,
        userActivities: action.list,
        // isLoading: false,
      };
    case actionTypes.GET_USER_NEWS:
      return {
        ...state,
        userNews: action.list,
        isLoading: false,
      };
    case actionTypes.GET_USER_LATEST_NEWS:
      return {
        ...state,
        userLatestNews: action.list,
        isLoading: false,
      };
    case actionTypes.GET_USER_OPPORTUNITY:
      return {
        ...state,
        userOpportunity: action.list,
        isLoading: false,
      };
    case actionTypes.GET_USER_NOTIFICATION_READ:
      return {
        ...state,
        userNotificationRead: action.list,
        isLoading: false,
      };
    case actionTypes.GET_USER_NOTIFICATION_UNREAD:
      return {
        ...state,
        userNotificationUnread: action.list,
        isLoading: false,
      };
    case actionTypes.GET_USER_SETTINGS:
      return {
        ...state,
        userSettings: action.list,
        isLoading: false,
      };
    case actionTypes.GET_USER_PROFILE:
      // console.log('GET_USER_PROFILE: ', action.list);
      return {
        ...state,
        userProfile: action.list,
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

export default UserReducer;
