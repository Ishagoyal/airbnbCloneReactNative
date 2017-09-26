import React, { Component } from 'react';
import { View, Text } from 'react-native'; 

export default class Property extends Component{
	constructor(props){
		super(props);
	}
	render() {
		return(
			<View style={{margin: 128}}>
				<Text>{this.props.text}</Text>
			</View>
		)
	}
}
