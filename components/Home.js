import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import propertyListData from './data.json';

export default class Home extends Component{
	render() {
		return (
			<View>
				<FlatList
					data={propertyListData}
					renderItem={(item) => this.renderPropertyListRow(item)}
				/>
			</View>
		);
	}

  onPressPropertyName(item){
	Actions.property({text: item.name});
	console.log(item.name, 'was clicked');	
	}	


  renderPropertyListRow(item){
		return(
			<Text style={styles.item} key="a" onPress={this.onPressPropertyName.bind(this,item)}>{item.name} </Text>
		);	 
	}
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 5,
    fontSize: 12,
    height: 44,
  },
})