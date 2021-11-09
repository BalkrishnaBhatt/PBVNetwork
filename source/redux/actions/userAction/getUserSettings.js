import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {console_log} from '../../../utils/loggers';
import {NAVIGATION} from '../../../constant';
export const getUserSettings = navigation => {
  let url = 'pbvnetwork/v1/usersettings/';
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
        console_log(
          'getUserSettings response: ',
          JSON.stringify(data, null, 2),
        );
        let data_to_set = {
          activity_new_mention:
            data.activity_new_mention == 'yes' ? true : false,
          activity_new_reply: data.activity_new_reply == 'yes' ? true : false,
          groups_invite: data.groups_invite == 'yes' ? true : false,
          groups_group_updated:
            data.groups_group_updated == 'yes' ? true : false,
          groups_admin_promotion:
            data.groups_admin_promotion == 'yes' ? true : false,
          groups_membership_request:
            data.groups_membership_request == 'yes' ? true : false,
          membership_request_completed:
            data.membership_request_completed == 'yes' ? true : false,
        };
        // handle success
        console.log('data_to_set: ', data_to_set);
        dispatch(get_user_settings(data_to_set));
      })
      .catch(function (error) {
        // handle error

        console_log(
          'getUserSettings error:',
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
export const get_user_settings = list => {
  return {
    type: actionTypes.GET_USER_SETTINGS,
    list,
  };
};
