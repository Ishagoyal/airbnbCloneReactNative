import React, { Component } from 'react';
import { View, Text } from 'react-native'; 

export default class Property extends Component{
	constructor(props){
		super(props);
    this.displayText = '';
    
	}
  
  componentDidMount(){
    displayText = this.props.text;
  } 

	render() {
		return(
			<View style={{margin: 128}}>
				<Text>{displayText}</Text>
			</View>
		)
	}
}
