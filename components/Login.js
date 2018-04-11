import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { login } from '../actions';

export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:''
		};
	}

	render(){
		return(
			<View style={styles.container}>
        {this.renderLogin()}
      </View>
		);
	}

	renderLogin(){
		return(
			<ScrollView>
				<Text style={styles.heading} >{'Login'}</Text>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})  