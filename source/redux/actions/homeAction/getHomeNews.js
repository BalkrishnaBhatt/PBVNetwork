import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';
// import {premiumLoginSuccess} from '../premiumLogin/premiumLogin';

export const getHomeNews = navigation => {
  let url = 'wp/v2/posts';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LnBidm5ldHdvcmsuY29tIiwiaWF0IjoxNjMzMzYyMTM4LCJuYmYiOjE2MzMzNjIxMzgsImV4cCI6MTYzMzk2NjkzOCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.JBpBLyOwIr1zI4nPZ7-gZDl2IoGJSruYQm-6zGzn30Y',
    },
  };

  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url, config)
      .then(function (response) {
        // console.log(
        //   'getHomeNews response: ',
        //   JSON.stringify(response.data, null, 2),
        // );
        // handle success

        dispatch(get_home_news(response.data));

        // if(response.data.toLowerCase().includes('success')){
        //     dispatch(premiumRegisterSuccess(response.data))
        //     dispatch(premiumLoginSuccess(email))
        // }
      })
      .catch(function (error) {
        // handle error
        // if (error.response) {
        //     console.log('Error in premium register', error.response.data)
        //     dispatch(displayErrorModalFewSecs('Error while registering your account : ', error.response.data))
        //     dispatch(premiumRegisterFailed(error.response.data))
        // }
        console.log(error);
        // console.log('Error of config', error.config);
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
    type: actionTypes.SET_HOME_LOADING,
    loaderState: loaderState,
  };
};
export const get_home_news = list => {
  return {
    type: actionTypes.GET_HOME_NEWS,
    list,
  };
};
