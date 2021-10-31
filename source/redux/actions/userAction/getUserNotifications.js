import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getUserNotifications = (navigation, is_new) => {
  let url = 'buddypress/v1/notifications';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };
  if (is_new) {
    url = url + '?new=true';
  }
  let user_id = Store.getState().AuthenticationReducer.userId;
  // console.log('user_id: ', user_id);
  //   console.log('getUserNotificationsurl: ', url);
  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url, config)
      .then(function (response) {
        let data = response.data;
        console_log(
          'getUserNotifications response: ',
          JSON.stringify(data, null, 2),
        );
        // handle success
        if (is_new) {
          dispatch(get_user_Notification_unread(response.data));
        } else {
          dispatch(get_user_Notification_read(response.data));
        }
      })
      .catch(function (error) {
        // handle error

        console_log(
          'getUserNotifications error:',
          JSON.stringify(error.response.data, null, 2),
        );
        let error_code = error.response.data.code;
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.replace(NAVIGATION.LOGIN);
        }
      });
  };
};

export const set_loader = loaderState => {
  return {
    type: actionTypes.SET_USER_LOADING,
    loaderState: loaderState,
  };
};
export const get_user_Notification_unread = list => {
  return {
    type: actionTypes.GET_USER_NOTIFICATION_UNREAD,
    list,
  };
};
export const get_user_Notification_read = list => {
  return {
    type: actionTypes.GET_USER_NOTIFICATION_READ,
    list,
  };
};
