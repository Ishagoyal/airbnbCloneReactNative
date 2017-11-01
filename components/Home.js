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
			<View style={styles.container}>
        <Image source = {{uri:item.images.image1}} style={{width:400,height: 200,padding:5}} />
				<Text style={styles.name} onPress={this.onPressPropertyName.bind(this,item)}>{item.name} </Text>
				<Text style={styles.item} >{item.price} </Text>
				<Text style={styles.item} >{item.address} </Text>
			</View> 
		);   
	}
}


const styles = StyleSheet.create({
	container: {
    flexDirection:'row',
    flexWrap:'wrap',
    flex: 1,
    paddingTop: 22
	},
	item: {
		padding: 5,
		fontSize: 12,
		height: 30,
    fontWeight:'bold',
	},
  name:{
    fontSize:14,
    fontWeight:'bold',
    color:'#3A5FCD',
    paddingTop:5,
    paddingLeft:5
  }
})