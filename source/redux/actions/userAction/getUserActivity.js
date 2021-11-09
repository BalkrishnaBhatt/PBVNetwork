import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {console_log} from '../../../utils/loggers';
import {NAVIGATION} from '../../../constant';
export const getUserActivity = (navigation, selected_value) => {
  let url = 'buddypress/v1/activity/?user_id=';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };
  let user_id = Store.getState().AuthenticationReducer.userId;
  return async dispatch => {
    dispatch(set_loader(true));
    let selected_value_to_pass =
      '&type=' +
      (selected_value == 'Updates'
        ? 'activity_update'
        : selected_value == 'Group Memberships'
        ? 'joined_group'
        : selected_value == 'Group Updates'
        ? 'group_details_updated'
        : '');
    // console.log('url: ', url + user_id + selected_value_to_pass);
    axiosInstance
      .get(
        url + user_id + selected_value_to_pass + '&display_comments=stream',
        config,
      )
      .then(function (response) {
        let data = response.data;
        console_log(
          'getUserActivity response: ',
          JSON.stringify(data.length, null, 2),
        );
        // handle success
        dispatch(get_user_activities(response.data));
      })
      .catch(function (error) {
        // handle error

        console_log(
          'getUserActivity error: ',
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
export const get_user_activities = list => {
  return {
    type: actionTypes.GET_USER_ACTIVITIES,
    list,
  };
};
