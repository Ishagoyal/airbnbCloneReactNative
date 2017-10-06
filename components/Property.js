import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import propertyDetailsData from '../utils/propertyDetailsData.json';

console.log(propertyDetailsData.name);

export default class Property extends Component{
	constructor(props){
		super(props);
    this.state = {
      displayText: ''
    }; 
	}
  
  componentDidMount(){
    this.setState({
      displayText: this.props.text
    });
  } 

	render() {
		return(
			<View style={{margin: 128}}>
				<Text>{this.state.displayText}</Text>
			</View>
		)
	}
}
