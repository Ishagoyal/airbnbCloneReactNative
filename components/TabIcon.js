import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TabIcon extends Component{

  render(){
    return(
      <View>
         <Text>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'red',
    color: 'white'
  }
})