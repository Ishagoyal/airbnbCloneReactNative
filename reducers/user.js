import * as actionType from '../actions/actionTypes';


const initialState = {
	isLoggedIn: false,
	username:'',
	password:'',
	isIncorrectCredentials: false,
  firstName: '',
  lastName: '',
};

export default function userReducer (state = initialState, action){
	switch (action.type) {
		case actionType.LOGIN_SUCCESS:
			return Object.assign({},state,{
				isLoggedIn: true,
				username:action.username,
				password:action.password,
			});
		case actionType.LOGIN_FAILURE:
			return Object.assign({},state,{
				isLoggedIn: false,
				username:'',
				password:'',
				isIncorrectCredentials: true 
			});	
		case actionType.LOGOUT:
			return Object.assign({},state,{
				isLoggedIn: false,
				username:'',
				password:''
			});
		case actionType.EDIT_PROFILE:
			return Object.assign({},state,{
				firstName: action.firstName,
				lastName: action.lastName,
			});		
		default:
			return state;	
	}
}