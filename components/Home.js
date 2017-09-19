import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import dataJson from './data.json';

console.log(dataJson);

function handleClick(item,e) {
	e.preventDefault();
	Actions.property({text: item.name});
	console.log(item.name, 'was clicked');
	
}

export default class Home extends Component{
	render() {
		return (
			<View>
				<FlatList
					key={"renderList"}
					data={dataJson}
					renderItem={({item}) => 
						<View>
							<Text style={styles.item} onPress={handleClick.bind(this,item)}>{item.name} </Text>
							<Text style={styles.item} > {item.price}</Text>
							<Text style={styles.item} > {item.address} </Text>
							<Image source={{uri:item.image}} style={{width: 32, height: 32}} />
						</View>
					}
				/>
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