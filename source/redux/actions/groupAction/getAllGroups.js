import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getAllGroups = (navigation, selected_value) => {
  // let url = 'buddypress/v1/groups?orderby=';
  let url = 'buddypress/v1/groups?type=';
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
  return async dispatch => {
    dispatch(set_loader(true));
    console.log('selected_value_to_pass: ', selected_value_to_pass);
    axiosInstance
      .get(url + selected_value_to_pass, config)
      .then(function (response) {
        console_log(
          'getAllGroups response: ',
          // selected_value,
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_all_groups(response.data));
      })
      .catch(function (error) {
        dispatch(set_loader(false));
        console_log('getAllGroups error', JSON.stringify(error, null, 2));
        // handle error
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
