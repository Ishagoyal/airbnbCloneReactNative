import * as actionType from '../actions/ActionTypes';
import storage from 'redux-persist/lib/storage';


const initialState = {
  firstName: '',
  lastName: '',
};

export default function profileReducer(state = initialState, action){
  switch (action.type) {    
    case actionType.EDIT_PROFILE:
      return Object.assign({},state,{
        firstName: action.firstName,
        lastName: action.lastName,
      });   
    default:
      return state; 
  }
};

