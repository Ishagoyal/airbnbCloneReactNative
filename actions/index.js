import * as actionType from './actionTypes';
import loginData from '../utils/userData.json';


function login(username, password):Action{
	if((loginData[0].username == username) && (loginData[0].password == password)){
  	return (dispatch)=> {
			type: actionType.LOGIN;
			username: username;
  		password: password;
		}
	}   
}

function logout(username, password):Action{
	return (dispatch)=> {
		type: actionType.LOGOUT;
	}
}	


module.exports = {login,logout};


/*export const signup = (userName, password) => ({
	type: actionType.SIGNUP,
});*/