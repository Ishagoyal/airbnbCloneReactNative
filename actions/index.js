import * as actionType from './actionTypes';
import loginData from '../utils/userData.json';

export const login = (username, password) => ({
	//if((loginData[0].username == username) && (loginData[0].password == password)){
		type: actionType.LOGIN,
		username: username,
  	password: password
  //}	
});

export const logout = () => ({
	type: actionType.LOGOUT,
});

/*export const signup = (userName, password) => ({
	type: actionType.SIGNUP,
});*/