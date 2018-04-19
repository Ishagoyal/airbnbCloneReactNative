import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class Trips extends Component{

	constructor(props){
		super(props);
	}
	
  render(){
  	if (this.props.isLoggedIn){ 
	    return(
	      <View>
	        <Text>{'You have not done any trips yet'}</Text>
	        <Text style={{color:'#00bfff'}} onPress={Actions.explore}>{'Start Exploring'}</Text>
	      </View>
	    )
	  }
	  else{
	  	return(
	  		<View>
	        <Text>{'You are not logged in'}</Text>
	        <Text>{'Please login to see your trips'}</Text>
	        <Text style={{color:'#00bfff',marginTop:10}} onPress={this.onPressLogin}>{'Login'}</Text>
	      </View>
	  	)
	  }  
  }

  onPressLogin(){
		Actions.loginId();
	}
}



const mapStateToProps = (state, ownProps ) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  };
}

export default connect(mapStateToProps)(Trips);