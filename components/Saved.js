import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from './Login';

export default class Saved extends Component{
  
  render(){
    if (this.props.isLoggedIn){   
      return(
        <View>
          <Text>{'When you see something you like, tap on the heart to save it. If you are planning a trip with others, invite them so they can save and vote on their favorites.'}</Text>
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