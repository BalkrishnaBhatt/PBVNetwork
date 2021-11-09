import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getMyGroups = (navigation, selected_value) => {
  let url = 'buddypress/v1/groups/?user_id=';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };
  // let selected_value_to_pass =
  //   selected_value == 'Last Active'
  //     ? 'last_activity'
  //     : selected_value == 'Most Members'
  //     ? 'total_member_count'
  //     : selected_value == 'Alphabetical'
  //     ? 'name'
  //     : 'date_created';
  let selected_value_to_pass =
    selected_value == 'Last Active'
      ? 'active'
      : selected_value == 'Most Members'
      ? 'popular'
      : selected_value == 'Alphabetical'
      ? 'alphabetical'
      : 'newest';
  let user_id = Store.getState().AuthenticationReducer.userId;
  // url = url + user_id + '&orderby=' + selected_value_to_pass;
  url = url + user_id + '&type=' + selected_value_to_pass;
  console.log('getMyGroupsurl: ', url);
  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url, config)
      .then(function (response) {
        console_log(
          'getMyGroups response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_my_groups(response.data));
      })
      .catch(function (error) {
        // handle error
        console_log(
          'getMyGroups error: ',
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
    type: actionTypes.SET_GROUP_LOADING,
    loaderState: loaderState,
  };
};
export const get_my_groups = list => {
  return {
    type: actionTypes.GET_MY_GROUPS,
    list,
  };
};
