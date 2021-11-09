import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {console_log} from '../../../utils/loggers';
import {NAVIGATION} from '../../../constant';
export const getGroupMembers = navigation => {
  let url = 'buddypress/v1/groups/';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };
  let group_id = Store.getState().GroupDetailReducer.groupDetails.id;
  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url + group_id + '/members', config)
      .then(function (response) {
        console_log(
          'getGroupMembers response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_group_members(response.data));
      })
      .catch(function (error) {
        // handle error
        console_log(
          'getGroupMembers error: ',
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
    type: actionTypes.SET_GROUP_DETAILS_LOADING,
    loaderState: loaderState,
  };
};
export const get_group_members = list => {
  return {
    type: actionTypes.GET_GROUP_MEMBERS,
    list,
  };
};
