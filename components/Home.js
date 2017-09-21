import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import propertyListData from './data.json';



function onPressPropertyName(item,e) {
	e.preventDefault();
	Actions.property({text: item.name});
	console.log(item.name, 'was clicked');
	
}

export default class Home extends Component{
	render() {
		return (
			<View>
				<FlatList
					data={propertyListData}
					renderItem={({item}) => renderPropertyListRow(item)}
					//keyExtractor={(item, index) => index}
				/>
			</View>
		);
	}
}

function renderPropertyListRow(item){
	return(
		<View >
			<Text style={styles.item} key="a" onPress={onPressPropertyName.bind(this,item)}>{item.name} </Text>
			<Text style={styles.item} key="b" > {item.price} </Text>
			<Text style={styles.item} key="c" > {item.address} </Text>
			<Image source={{uri:item.image}} key="d" style={{width: 32, height: 32}} />
		</View>
	);	 
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