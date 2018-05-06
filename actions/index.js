import * as actionType from './ActionTypes';
import loginData from '../utils/UserData.json';


function login(userData, errorCallback):Action{
  //console.log(userData);
  //console.log(userData.userName);
  /*if((loginData[0].userName == userData.userName) && (loginData[0].password == userData.password)){
    return {
      type: actionType.LOGIN_SUCCESS,
      userName: userData.userName,
      password: userData.password,
    }
  } 
  else{
    return (dispatch)=>{ 
      type: actionType.LOGIN_FAILURE,
      alert("Wrong username and password");
    }  
  }  */
  //console.log(errorCallback());
  return(dispatch)=>{
    if((loginData[0].userName == userData.userName) && (loginData[0].password == userData.password)){
      return{
        type: actionType.LOGIN_SUCCESS,
        userName: userData.userName,
        password: userData.password,
      }
    }
    else{
      return(dispatch)=>{
        type:  actionType.LOGIN_FAILURE,
        errorCallback();
      }
    }
  }
}

function logout():Action{
  return{
    type: actionType.LOGOUT,
  }
} 

function editProfile(userData):Action{
  //console.log(userData);
  //console.log(userData.firstName);
  return {
    type:actionType.EDIT_PROFILE,
    firstName: userData.firstName,
    lastName: userData.lastName,
  }
}


module.exports = {login,logout, editProfile};


/*export const signup = (userName, password) => ({
  type: actionType.SIGNUP,
});*/