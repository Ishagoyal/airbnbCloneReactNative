import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Page1 extends Component{
	render() {
		const goToPage2 = () => Actions.page2({text: 'Hello World!'});
		return (
			<View style={{margin:128}}>
				<Text onPress={goToPage2}>This is Page1!</Text>
			</View>
		)
	}
}
