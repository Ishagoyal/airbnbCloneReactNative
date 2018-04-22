import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from './Login';

class Inbox extends Component{
  render(){
    if (this.props.isLoggedIn){ 
      return(
        <View>
          <Text>{'No messgaes yet!'}</Text>
          <Text style={{color:'#00bfff'}} onPress={Actions.explore}>{'Start Exploring'}</Text>
        </View>
      )
    }  
    else{
      return(
        <Login />
      )
    }  
  }
}

const mapStateToProps = (state, ownProps ) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  };
}

export default connect(mapStateToProps)(Inbox);
