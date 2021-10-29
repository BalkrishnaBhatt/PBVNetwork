import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: true,
  faqList: [],
  termList: [],
  jurisdictionList: [],
  townList: [],
  areaPractice: [],
  industryList: [],
  privacyPolicy: {},
  userAgreement: {},
};

const InfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FAQ:
      return {
        ...state,
        faqList: action.list,
        isLoading: false,
      };
    case actionTypes.GET_TERM_CONDITION:
      return {
        ...state,
        termList: action.list,
        isLoading: false,
      };
    case actionTypes.GET_AREA_OF_PRACTICE_LIST:
      return {
        ...state,
        areaPractice: action.list,
        isLoading: false,
      };
    case actionTypes.GET_JURISDICTION_LIST:
      return {
        ...state,
        jurisdictionList: action.list,
        isLoading: false,
      };
    case actionTypes.GET_TOWN_LIST:
      return {
        ...state,
        townList: action.list,
        isLoading: false,
      };
    case actionTypes.GET_INDUSTRY_LIST:
      return {
        ...state,
        industryList: action.list,
        isLoading: false,
      };
    case actionTypes.GET_PRIVACY_POLICY:
      return {
        ...state,
        privacyPolicy: action.list,
        isLoading: false,
      };
    case actionTypes.GET_USER_AGREEMENT:
      return {
        ...state,
        userAgreement: action.list,
        isLoading: false,
      };
    // case actionTypes.GET_HOME_LATEST_NEWS:
    //   return {
    //     ...state,
    //     homeLatestNews: action.list,
    //     isLoading: false,
    //   };
    case actionTypes.SET_INFO_LOADING:
      return {
        ...state,
        isLoading: action.loaderState,
      };
    default:
      return state;
  }
};

export default InfoReducer;
