import * as actionType from '../actions/ActionTypes';
import storage from 'redux-persist/lib/storage';

const initialState = {
  isLoggedIn: false,
  userName:'',
  password:'',
};

export default function userReducer(state = initialState, action){
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      return Object.assign({},state,{
        isLoggedIn: true,
        userName:action.userName,
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
    default:
      return state; 
  }
};


