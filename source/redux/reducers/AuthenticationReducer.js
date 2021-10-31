import * as actionTypes from '../actionTypes';

const initialState = {
  email: '',
  userId: '',
  userImage: '',
  token:
    // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LnBidm5ldHdvcmsuY29tIiwiaWF0IjoxNjMzMDcyNzU1LCJuYmYiOjE2MzMwNzI3NTUsImV4cCI6MTYzMzY3NzU1NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.UrDkEhv-0y_rk0aDZme64BeN1oSyAL3P0i8OyK0PMq4',
    // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LnBidm5ldHdvcmsuY29tIiwiaWF0IjoxNjM1MDkzNzgyLCJuYmYiOjE2MzUwOTM3ODIsImV4cCI6MTYzNTY5ODU4MiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.tqJFJ0y3s4ERKxCUUTxzBAmrBCDOkOPV_6VFTQsTj8c',
    '',
};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        email: action.user_info.user_email,
        userId: action.user_info.user_id,
        userImage: action.user_info.photo,
        token: action.user_info.token,
      };
    default:
      return state;
  }
};

export default AuthenticationReducer;
