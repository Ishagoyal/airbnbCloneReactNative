import React, { Component } from 'react';
import { View, Text } from 'react-native'; 

export default class Property extends Component{
	constructor(props){
		super(props);
    this.setState({
      displayText:''
    }); 
	}
  
  componentDidMount(){
    this.setState({
      displayText: 'xyz'
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
