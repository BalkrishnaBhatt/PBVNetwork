import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getPrivacyPolicy = navigation => {
  let url = 'pbvnetwork/v1/privacypolicy';
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
          'getPrivacyPolicy response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_privacy_policy(response.data));
      })
      .catch(function (error) {
        // handle error
        console_log(
          'getPrivacyPolicy error: ',
          JSON.stringify(error.response.data, null, 2),
        );
        let error_code = error.response.data.code;
        // handle error
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.replace(NAVIGATION.LOGIN);
        }
        // console_log('Error of config', error.config);
      });
  };
};

export const set_loader = loaderState => {
  return {
    type: actionTypes.SET_INFO_LOADING,
    loaderState: loaderState,
  };
};
export const get_privacy_policy = list => {
  return {
    type: actionTypes.GET_PRIVACY_POLICY,
    list,
  };
};
