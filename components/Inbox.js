import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Inbox extends Component{
  render(){
    return(
      <View>
        <Text>{'No messgaes yet!'}</Text>
        <Text style={{color:'#00bfff'}} onPress={Actions.explore}>{'Start Exploring'}</Text>
      </View>
    )
  }
}