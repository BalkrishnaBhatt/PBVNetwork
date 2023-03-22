import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: true,
  faqList: [],
  termList: [],
  privacyPolicy: {},
  userAgreement: {},
  ///////////////
  jurisdictionList: [],
  townList: [],
  areaPracticeList: [],
  industryList: [],
  //////////////////
  lawyerList: [],
  lawyerRoleList: [],
  // serviceLineList: [],
  // industrySegmentList: [],
  clientDimensionList: [],
  dealCaseDimensionList: [],
};

const InfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FAQ:
      return {
        ...state,
        faqList: action.list,
      };
    case actionTypes.GET_TERM_CONDITION:
      return {
        ...state,
        termList: action.list,
      };
    case actionTypes.GET_AREA_OF_PRACTICE_LIST:
      return {
        ...state,
        areaPracticeList: action.list,
      };
    case actionTypes.GET_JURISDICTION_LIST:
      return {
        ...state,
        jurisdictionList: action.list,
      };
    case actionTypes.GET_TOWN_LIST:
      return {
        ...state,
        townList: action.list,
      };
    case actionTypes.GET_INDUSTRY_LIST:
      return {
        ...state,
        industryList: action.list,
      };
    ////////////////////////////////////
    case actionTypes.GET_LAWYER_ROLE_LIST:
      return {
        ...state,
        lawyerRoleList: action.list,
      };
    case actionTypes.GET_LAWYER_LIST:
      return {
        ...state,
        lawyerList: action.list,
      };
    // case actionTypes.GET_SERVICE_LINE_LIST:
    //   return {
    //     ...state,
    //     serviceLineList: action.list,
    //   };
    // case actionTypes.GET_INDUSTRY_SEGMENT_LIST:
    //   return {
    //     ...state,
    //     industrySegmentList: action.list,
    //   };
    case actionTypes.GET_CLIENT_DIMENSION_LIST:
      return {
        ...state,
        clientDimensionList: action.list,
      };
    case actionTypes.GET_DEAL_CASE_DIMENSION_LIST:
      return {
        ...state,
        dealCaseDimensionList: action.list,
      };
    ////////////////////////////////////
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
