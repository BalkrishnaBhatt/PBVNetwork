import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
export const getGroupActivity = navigation => {
  let url = 'buddypress/v1/activity/?group_id=';
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
      .get(url + group_id, config)
      .then(function (response) {
        console.log(
          'getGroupActivity response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_group_activities(response.data));
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
    type: actionTypes.SET_GROUP_LOADING,
    loaderState: loaderState,
  };
};
export const get_group_activities = list => {
  return {
    type: actionTypes.GET_GROUP_ACTIVITIES,
    list,
  };
};
