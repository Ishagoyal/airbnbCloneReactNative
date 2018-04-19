import * as actionType from './actionTypes';
import loginData from '../utils/userData.json';


function login(username, password):Action{
	console.log(username);
	console.log(password);
	console.log((loginData[0].username == username) && (loginData[0].password == password));
	if((loginData[0].username == username) && (loginData[0].password == password)){
  	return {
			type: actionType.LOGIN,
			username: username,
  		password: password,
		}
	} 
	else{
		
	}  
}


function logout(username, password):Action{
	return{
		type: actionType.LOGOUT,
	}
}	


module.exports = {login,logout};


/*export const signup = (userName, password) => ({
	type: actionType.SIGNUP,
});*/