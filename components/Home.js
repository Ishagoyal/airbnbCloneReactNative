import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import propertyListData from '../utils/data.json';

export default class Home extends Component{
	render() {
		return (
			<View>
				<FlatList
					data={propertyListData}
					renderItem={({item}) => this.renderPropertyListRow(item)}
				/>
			</View>
		);
	}

	onPressPropertyName(item){
		Actions.property({text: item.id});  
	}   

	renderPropertyListRow(item){
		return(
			<View>
				<Text style={styles.item} onPress={this.onPressPropertyName.bind(this,item)}>{item.name} </Text>
				<Text style={styles.item} >{item.price} </Text>
				<Text style={styles.item} >{item.address} </Text>
				<Image source = {{uri:item.images.image1}} style={{width: 32, height: 32}} />
			</View> 
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