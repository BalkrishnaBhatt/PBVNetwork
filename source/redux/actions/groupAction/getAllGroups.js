import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getAllGroups = navigation => {
  let url = 'buddypress/v1/groups';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };

  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url, config)
      .then(function (response) {
        console_log(
          'getAllGroups response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_all_groups(response.data));
        // navigation.navigate('login');
        // if(response.data.toLowerCase().includes('success')){
        //     dispatch(premiumRegisterSuccess(response.data))
        //     dispatch(premiumLoginSuccess(email))
        // }
      })
      .catch(function (error) {
        // handle error
        // if (error.response) {
        //     console_log('Error in premium register', error.response.data)
        //     dispatch(displayErrorModalFewSecs('Error while registering your account : ', error.response.data))
        //     dispatch(premiumRegisterFailed(error.response.data))
        // }
        let error_code = error.response.data.code;
        // handle error
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.navigate(NAVIGATION.LOGIN);
        }
        console_log(JSON.stringify(error.response.data, null, 2));
        // console_log('Error of config', error.config);
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
    type: actionTypes.SET_GROUP_LOADING,
    loaderState: loaderState,
  };
};
export const get_all_groups = list => {
  return {
    type: actionTypes.GET_ALL_GROUPS,
    list,
  };
};
