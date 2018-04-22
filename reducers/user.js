import * as actionType from '../actions/actionTypes';


const initialState = {
	isLoggedIn: false,
	userName:'',
	password:'',
};

export default function userReducer (state = initialState, action){
	switch (action.type) {
		case actionType.LOGIN:
			return Object.assign({},state,{
				isLoggedIn: true,
				userName:action.userName,
				password:action.password
			});
		case actionType.LOGOUT:
			return Object.assign({},state,{
				isLoggedIn: false,
				userName:'',
				password:''
			})	
		default:
			return state;	
	}
}