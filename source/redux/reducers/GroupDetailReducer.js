import {console_log} from '../../utils/loggers';
import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  groupDetails: {},
  groupActivities: [],
  groupNews: [],
  groupLatestNews: [],
  groupOpportunity: [],
  groupMembers: [],
};

const GroupDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GROUP_ACTIVITIES:
      return {
        ...state,
        groupActivities: action.list,
        isLoading: false,
      };
    case actionTypes.GET_GROUP_NEWS:
      return {
        ...state,
        groupNews: action.list,
        isLoading: false,
      };
    case actionTypes.GET_GROUP_LATEST_NEWS:
      return {
        ...state,
        groupLatestNews: action.list,
        isLoading: false,
      };
    case actionTypes.GET_GROUP_OPPORTUNITY:
      return {
        ...state,
        groupOpportunity: action.list,
        isLoading: false,
      };
    case actionTypes.GET_GROUP_MEMBERS:
      return {
        ...state,
        groupMembers: action.list,
        isLoading: false,
      };
    case actionTypes.GET_GROUP_DETAILS:
      // console_log('get group details called');
      return {
        ...state,
        groupDetails: action.group_info,
        // isLoading: false,
      };
    case actionTypes.SET_GROUP_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.loaderState,
      };
    default:
      return state;
  }
};

export default GroupDetailReducer;
