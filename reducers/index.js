import { combineReducers } from 'redux';
import  userReducer  from './UserReducer';
import  profileReducer  from './ProfileReducer';

const reducers =  combineReducers({
  userReducer,
  profileReducer
});

export default reducers;