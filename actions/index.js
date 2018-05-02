import * as actionType from './ActionTypes';
import loginData from '../utils/UserData.json';


function login(userName, password):Action{
  if((loginData[0].userName == userName) && (loginData[0].password == password)){
    return {
      type: actionType.LOGIN_SUCCESS,
      userName: userName,
      password: password,
    }
  } 
  else{
    return{
      type:actionType.LOGIN_FAILURE,
      userName: '',
      password: '',
    }
  }  
}

function logout():Action{
  return{
    type: actionType.LOGOUT,
  }
} 

function editProfile(firstName,lastName):Action{
  return {
    type:actionType.EDIT_PROFILE,
    firstName: firstName,
    lastName: lastName,
  }
}


module.exports = {login,logout, editProfile};


/*export const signup = (userName, password) => ({
  type: actionType.SIGNUP,
});*/