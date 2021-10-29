import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {console_log} from '../../../utils/loggers';
export const getUserNews = navigation => {
  let url = 'pbvnetwork/v1/usernews/';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };
  let user_id = Store.getState().AuthenticationReducer.userId;
  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url + user_id, config)
      .then(function (response) {
        let data = response.data;
        console_log('getUserNews response: ', JSON.stringify(data, null, 2));
        // handle success
        dispatch(get_user_news(response.data));
      })
      .catch(function (error) {
        // handle error

        let error_code = error.response.data.code;
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.navigate(NAVIGATION.LOGIN);
        }
        console_log(JSON.stringify(error.response.data, null, 2));
      });
  };
};

export const set_loader = loaderState => {
  return {
    type: actionTypes.SET_USER_LOADING,
    loaderState: loaderState,
  };
};
export const get_user_news = list => {
  return {
    type: actionTypes.GET_USER_NEWS,
    list,
  };
};
