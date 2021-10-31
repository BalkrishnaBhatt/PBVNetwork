import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {console_log} from '../../../utils/loggers';
import {NAVIGATION} from '../../../constant';
export const getGroupDetails = (navigation, group_id) => {
  let url = 'buddypress/v1/groups/';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };
  // let group_id = Store.getState().GroupDetailReducer.groupDetails.id;
  return async dispatch => {
    dispatch(set_loader(true));
    url = url + group_id + '?context=edit';
    console_log('getGroupDetailsurl: ', url);
    axiosInstance
      .get(url, config)
      .then(function (response) {
        let data = response.data;
        console_log(
          'getGroupDetails response: ',
          JSON.stringify(data[0], null, 2),
        );
        // handle success
        dispatch(get_group_details(data[0]));
      })
      .catch(function (error) {
        // handle error

        console_log(
          'getGroupDetails error:',
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
// export const getGroupDetails = group_info => {
export const get_group_details = list => {
  return {
    type: actionTypes.GET_GROUP_DETAILS,
    list,
    // group_info: group_info,
  };
};
