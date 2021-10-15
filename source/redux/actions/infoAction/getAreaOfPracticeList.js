import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getAreaOfPracticeList = navigation => {
  let url = 'pbvnetwork/v1/groupbytype/areapractice';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };

  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url, config)
      .then(function (response) {
        let raw_data = response.data;
        let data_set = [];
        raw_data.map((element, index) => {
          let obj = {label: element.name, value: element.name};
          data_set[index] = obj;
        });
        console_log(
          'getAreaOfPracticeList response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_jurisdiction(data_set));
      })
      .catch(function (error) {
        // handle error
        let error_code = error.response.data.code;
        // handle error
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.navigate(NAVIGATION.LOGIN);
        }
        console_log(JSON.stringify(error.response.data, null, 2));
        // console_log('Error of config', error.config);
      });
  };
};

export const set_loader = loaderState => {
  return {
    type: actionTypes.SET_INFO_LOADING,
    loaderState: loaderState,
  };
};
export const get_jurisdiction = list => {
  return {
    type: actionTypes.GET_AREA_OF_PRACTICE_LIST,
    list,
  };
};
