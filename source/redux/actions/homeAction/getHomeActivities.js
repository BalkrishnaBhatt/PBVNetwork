import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';
// import {premiumLoginSuccess} from '../premiumLogin/premiumLogin';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {console_log} from '../../../utils/loggers';
import {NAVIGATION} from '../../../constant';
export const getHomeActivities = navigation => {
  // let AuthenticationReducer = useSelector(state => state.AuthenticationReducer);
  let url = 'buddypress/v1/activity';
  console.log(
    'Store.getState().AuthenticationReducer.token: ',
    Store.getState().AuthenticationReducer.token,
  );
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,

      // Authorization:
      //   'Bearer ' +
      //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LnBidm5ldHdvcmsuY29tIiwiaWF0IjoxNjMzMDcyNzU1LCJuYmYiOjE2MzMwNzI3NTUsImV4cCI6MTYzMzY3NzU1NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.UrDkEhv-0y_rk0aDZme64BeN1oSyAL3P0i8OyK0PMq4',
    },
  };

  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url + '?display_comments=stream', config)
      .then(function (response) {
        console_log(
          'getHomeActivities response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_home_activities(response.data));
        // navigation.navigate('login');
        // if(response.data.toLowerCase().includes('success')){
        //     dispatch(premiumRegisterSuccess(response.data))
        //     dispatch(premiumLoginSuccess(email))
        // }
      })
      .catch(function (error) {
        dispatch(set_loader(false));
        // handle error
        console_log(
          'getHomeActivities error: ',
          JSON.stringify(error.response.data, null, 2),
        );
        let error_code = error.response.data.code;
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.replace(NAVIGATION.LOGIN);
        }
        // console.log('Error of config', error.config);
      });
  };
};

// export const premiumRegisterStart = () => {
//   return {
//     type: actionTypes.REGISTER_START,
//   };
// };

// export const premiumRegisterSuccess = data => {
//   return {
//     type: actionTypes.REGISTER_SUCCESS,
//   };
// };

// export const premiumRegisterFailed = error => {
//   return {
//     type: actionTypes.GET_ALL_BUDGETS_FAILED,
//     error,
//   };
// };
// import * as actionTypes from '../../actionTypes';

export const set_loader = loaderState => {
  return {
    type: actionTypes.SET_HOME_LOADING,
    loaderState: loaderState,
  };
};
export const get_home_activities = list => {
  return {
    type: actionTypes.GET_HOME_ACTIVITIES,
    list,
  };
};
