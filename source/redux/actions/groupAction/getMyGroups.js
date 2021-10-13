import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getMyGroups = navigation => {
  let url = 'buddypress/v1/groups/?user_id=';
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
        console_log(
          'getMyGroups response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_my_groups(response.data));
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
export const get_my_groups = list => {
  return {
    type: actionTypes.GET_MY_GROUPS,
    list,
  };
};
