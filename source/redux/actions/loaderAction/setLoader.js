import * as actionTypes from '../../actionTypes';

export const setLoader = loaderState => {
  return {
    type: actionTypes.SET_LOADER,
    loaderState: loaderState,
  };
};
