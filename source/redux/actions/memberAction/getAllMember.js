import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getAllMember = (
  navigation,
  selected_value,
  search_value,
  jurisdiction_value,
  town_value,
) => {
  let url = 'buddypress/v1/members?type=';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };
  let selected_value_to_pass =
    selected_value == 'Last Active'
      ? 'active'
      : selected_value == 'Alphabetical'
      ? 'alphabetical'
      : 'newest';
  let jurisdiction_to_pass =
    jurisdiction_value == null ? '' : jurisdiction_value;
  let town_to_pass = town_value == null ? '' : town_value;
  url =
    url +
    selected_value_to_pass +
    '&search=' +
    search_value +
    '&xprofile_jurisdiction=' +
    jurisdiction_to_pass +
    '&xprofile_town=' +
    town_to_pass;
  return async dispatch => {
    dispatch(set_loader(true));
    console.log('selected_value_to_pass: ', url);
    axiosInstance
      .get(url, config)
      .then(function (response) {
        console_log(
          'getAllMember response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_all_members(response.data));
      })
      .catch(function (error) {
        // handle error
        console_log(
          'getAllMember error:',
          JSON.stringify(error.response.data, null, 2),
        );
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

export const set_loader = loaderState => {
  return {
    type: actionTypes.SET_MEMBER_LOADING,
    loaderState: loaderState,
  };
};
export const get_all_members = list => {
  return {
    type: actionTypes.GET_ALL_MEMBERS,
    list,
  };
};
