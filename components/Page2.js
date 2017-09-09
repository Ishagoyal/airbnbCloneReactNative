import React, { Component } from 'react';
import { View, Text } from 'react-native'; 

export default class Page2 extends Component{
	render() {
		return(
			<View style={{margin: 128}}>
				<Text>This is Page2!</Text>
				<Text>{this.props.text}</Text>
			</View>
		)
	}
}
