import * as actionType from './ActionTypes';
import loginData from '../utils/UserData.json';


function login(userData, errorCallback):Action{
  //console.log(userData);
  //console.log(userData.userName);
  if((loginData[0].userName == userData.userName) && (loginData[0].password == userData.password)){
    return dispatch =>
      dispatch(loginSucess(userData)); 
  }
  else{
    return dispatch =>xd2rr
    errorCallback("Invalid Credentials");
  } 
}

function logout():Action{
  return{
    type: actionType.LOGOUT,
  }
} 

function loginSucess(userData):Action{
  //console.log(userData);
  return{
    type: actionType.LOGIN_SUCCESS,
    userName: userData.userName,
  }
}


module.exports = {login,logout, loginSucess};
