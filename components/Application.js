import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import Login from './Login';
import Home from './Home';


class Application extends Component {
	
	constructor(props) {
  	super(props);
  }

	render(){
    if (this.props.isLoggedIn){
      return <Home />;  
    }  
    else{ 
    	return <Login />;  	
    }
	}
}	

const mapStateToProps = (state, ownProps ) => {
	return {
		isLoggedIn: state.authReducer.isLoggedIn
	};
}

export default connect(mapStateToProps)(Application);

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30
  },
})  