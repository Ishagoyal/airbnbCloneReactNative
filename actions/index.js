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


module.exports = {login,logout};


/*export const signup = (userName, password) => ({
	type: actionType.SIGNUP,
});*/