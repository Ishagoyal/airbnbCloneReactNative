import * as actionType from './actionTypes';

export const login = (userName, password) => ({
	type: actionType.LOGIN,
	username: username,
  password: password
});

export const logout = () => ({
	type: actionType.LOGOUT,
});

/*export const signup = (userName, password) => ({
	type: actionType.SIGNUP,
});*/