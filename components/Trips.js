import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Trips extends Component{
	render(){
    return(
      <View>
        <Text>{'You have not done any trips yet'}</Text>
        <Text style={{color:'#00bfff'}} onPress={Actions.explore}>{'Start Exploring'}</Text>
      </View>
    )
  }
}