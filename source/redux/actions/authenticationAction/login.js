import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';
// import {premiumLoginSuccess} from '../premiumLogin/premiumLogin';

export const loginSave = (email, password, navigation) => {
  // const {email, password} = data;

  // const formData = new FormData();
  //   formData.append('email', email);
  //   formData.append('password', password);
  //   formData.append('membership', membership);
  //   formData.append('token', 'c408ff25730e3c4d3e171b099263a625');
  const data_to_pass = {
    email: email,
    password: password,
  };
  // let url = 'jwt-auth/v1/token';
  // + '?username=' + email + '&password=' + password;
  let url = 'wp/v2/posts';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LnBidm5ldHdvcmsuY29tIiwiaWF0IjoxNjMzMjgwNDg5LCJuYmYiOjE2MzMyODA0ODksImV4cCI6MTYzMzg4NTI4OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.SB0lxUYusSaSVxI3AewSjYWmT3pf0RpVfBMW5EqJIUg',
    },
  };

  return async dispatch => {
    // await axios
    //   .post(url, data_to_pass, config)
    //   .then(response => {
    //     console.log('response: ', JSON.stringify(response, null, 2));
    //     //     // handle success

    //     dispatch(loginSuccess(email));
    //   })
    //   .catch(error => {
    //     // const errorJson = error.response;
    //     // return {body: errorJson};
    //     console.log(error);
    //   });
    // dispatch(premiumRegisterStart());
    console.log('email: ', email);
    axiosInstance
      .get(url, config)
      .then(function (response) {
        console.log(
          'response: ',
          JSON.stringify(response.data.length, null, 2),
        );
        // handle success

        dispatch(loginSuccess(email));

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
        // else if (error.message) {
        //     console.log(' error or message premiumRegister', error.message)
        //     dispatch(displayErrorModalFewSecs('Error while registering your account : ', error.message))
        //     dispatch(premiumRegisterFailed({
        //         message: error.message
        //     }))
        // } else {
        //     dispatch(displayErrorModalFewSecs('Error while registering your account '))
        //     dispatch(premiumRegisterFailed({
        //         message: "Error Regsitering premium"
        //     }))
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

export const loginSuccess = emaii => {
  return {
    type: actionTypes.LOGIN,
    emaii: emaii,
  };
};
