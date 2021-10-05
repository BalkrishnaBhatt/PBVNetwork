import * as actionTypes from '../actionTypes';

const initialState = {
  email: '',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LnBidm5ldHdvcmsuY29tIiwiaWF0IjoxNjMzMzYyMTM4LCJuYmYiOjE2MzMzNjIxMzgsImV4cCI6MTYzMzk2NjkzOCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.JBpBLyOwIr1zI4nPZ7-gZDl2IoGJSruYQm-6zGzn30Y',
};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        email: action.emaii,
        // token: action.message,
      };
    default:
      return state;
  }
};

export default AuthenticationReducer;
