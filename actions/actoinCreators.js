import * as actionType from './ActionType';

export const login = (userName, password) => ({
	type: actionType.LOGIN,
});

export const logout = () => ({
	type: actionType.LOGOUT,
});

/*export const signup = (userName, password) => ({
	type: actionType.SIGNUP,
});*/