import * as actionType from '../actions/ActionTypes';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const initialState = {
  isLoggedIn: false,
  userName:'',
  password:'',
  firstName: '',
  lastName: '',
};


export default function userReducer(state = initialState, action){
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      return Object.assign({},state,{
        isLoggedIn: true,
        userName:action.userName,
        password:action.password,
      });
    case actionType.LOGIN_FAILURE:
      return Object.assign({},state,{
        isLoggedIn: false,
        userName:'',
        password:'',
      }); 
    case actionType.LOGOUT:
      return Object.assign({},state,{
        isLoggedIn: false,
        userName:'',
        password:''
      });
    case actionType.EDIT_PROFILE:
      return Object.assign({},state,{
        firstName: action.firstName,
        lastName: action.lastName,
      });   
    default:
      return state; 
  }
};


