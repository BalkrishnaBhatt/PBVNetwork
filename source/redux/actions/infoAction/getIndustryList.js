import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {NAVIGATION} from '../../../constant';
import {console_log} from '../../../utils/loggers';
export const getIndustryList = navigation => {
  let url = 'pbv/v1/industry';
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
        console_log(
          'getIndustryList response: ',
          JSON.stringify(response, null, 2),
        );
        let raw_data = response.data.data;
        let data_set = [];
        raw_data.map((element, index) => {
          let obj = {
            label: element.nome_tbl_industry,
            value: element.ID_tbl_industry,
          };
          data_set[index] = obj;
        });
        // handle success
        dispatch(get_jurisdiction(data_set));
      })
      .catch(function (error) {
        // handle error
        console_log('getIndustryList error: ', JSON.stringify(error, null, 2));
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
    type: actionTypes.SET_INFO_LOADING,
    loaderState: loaderState,
  };
};
export const get_jurisdiction = list => {
  return {
    type: actionTypes.GET_INDUSTRY_LIST,
    list,
  };
};
