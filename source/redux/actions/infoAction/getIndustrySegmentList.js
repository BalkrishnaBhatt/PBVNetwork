import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getIndustrySegmentList = (navigation, industry_id) => {
  let url = 'pbv/v1/industry_segment?industry=' + industry_id;
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };

  return async dispatch => {
    axiosInstance
      .get(url, config)
      .then(function (response) {
        console_log(
          'getIndustrySegmentList response: ',
          JSON.stringify(response.data, null, 2),
        );
        let raw_data = response.data.data;
        let partners_list = Object.keys(raw_data);
        let data_set = [];
        partners_list.map((element, index) => {
          let obj = {label: raw_data[element], value: element};
          data_set[index] = obj;
        });
        // handle success
        dispatch(get_lawyer_role(data_set));
      })
      .catch(function (error) {
        // handle error
        console_log(
          'getIndustrySegmentList error: ',
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

export const get_lawyer_role = list => {
  return {
    type: actionTypes.GET_LAWYER_ROLE_LIST,
    list,
  };
};
