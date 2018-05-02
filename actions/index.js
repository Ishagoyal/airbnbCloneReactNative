import * as actionType from './actionTypes';
import loginData from '../utils/userData.json';


function login(username, password):Action{
  if((loginData[0].username == username) && (loginData[0].password == password)){
    return {
      type: actionType.LOGIN_SUCCESS,
      username: username,
      password: password,
    }
  } 
  else{
    return{
      type:actionType.LOGIN_FAILURE,
      username: '',
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