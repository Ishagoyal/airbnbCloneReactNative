import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 
import propertyDetailsData from '../utils/propertyDetailsData.json';

export default class Property extends Component{
	constructor(props){
		super(props);
    this.state = {
      displayName: '',
      displayPrice: '',
      displayAddress: '',
      displayImage: ''
    }; 
	}
  
  componentDidMount(){
    this.setState({
      displayName: propertyDetailsData[0].name,
      displayPrice: propertyDetailsData[0].price,
      displayAddress: propertyDetailsData[0].address,
      displayImage: propertyDetailsData[0].image
    });
  } 

	render() {
		return(
			<View style={styles.container} >
        <Text style={styles.heading} > Property Details </Text>
        <Text style={styles.item} >{this.state.displayName} </Text>
        <Text style={styles.item} >{this.state.displayPrice} </Text>
        <Text style={styles.item} >{this.state.displayAddress} </Text>
        <Image source = {{uri:this.state.displayImage}} style={{width: 300, height: 200, marginLeft: 5,}} />
      </View> 
		)
	}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 30
  },
  item: {
    padding: 5,
    fontSize: 14,
    height: 44,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
