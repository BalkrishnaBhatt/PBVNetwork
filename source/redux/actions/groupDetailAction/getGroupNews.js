import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {console_log} from '../../../utils/loggers';
export const getGroupNews = navigation => {
  let url = 'pbvnetwork/v1/groupnews/';
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
        console_log(
          'getGroupNews response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_group_news(response.data));
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
export const get_group_news = list => {
  return {
    type: actionTypes.GET_GROUP_NEWS,
    list,
  };
};
