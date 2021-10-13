import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
const rootReducer = combineReducers({
  GroupDetailReducer: reducers.GroupDetailReducer,
  // UserReducer: reducers.UserReducer,
  HomeReducer: reducers.HomeReducer,
  // MemberReducer: reducers.MemberReducer,
  GroupReducer: reducers.GroupReducer,
  AuthenticationReducer: reducers.AuthenticationReducer,
  LoaderReducer: reducers.LoaderReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
