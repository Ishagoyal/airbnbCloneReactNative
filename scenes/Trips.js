import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Login from '../components/Login';

class Trips extends Component{

  constructor(props){
    super(props);
  }
  
  render(){
    if (this.props.isLoggedIn){ 
      return(
        <View>
          <Text>{'You have not done any trips yet'}</Text>
          <Text style={{color:'#00bfff'}} onPress={Actions.explore}>{'Start Exploring'}</Text>
        </View>
      )
    }
    else{
      return(
        <Login/>
      )
    }  
  }
}



const mapStateToProps = (state, ownProps ) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  };
}

export default connect(mapStateToProps)(Trips);