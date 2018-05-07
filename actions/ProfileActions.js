import * as actionType from './ActionTypes';

function editProfile(userData):Action{
  //console.log(userData);
  //console.log(userData.firstName);
  return {
    type:actionType.EDIT_PROFILE,
    firstName: userData.firstName,
    lastName: userData.lastName,
  }
}


module.exports = {editProfile};