import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet, Text, TextInput,TouchableHighlight } from 'react-native';
import { login } from '../actions';
import { bindActionCreators } from 'redux';

class Login extends Component{
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
				<Text style={styles.heading}>{'Please login first!'}</Text>
				<Text style={styles.loginHeading} >{'Login'}</Text>
				<TextInput
					style={styles.username}
					underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          autoFocus={true} 
          keyboardType='email-address'
          value={this.state.username}
          onChangeText={(text) => this.setState({username:text})}
				>	
				</TextInput>
				<TextInput
					style={styles.password}
					underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true} 
          value={this.state.password}
          onChangeText={(text) => this.setState({password:text})}
				>	
				</TextInput>
				<TouchableHighlight
					style = {styles.login}
					onPress={this.onPressLoginButton.bind(this)}
				>
					<Text style={styles.loginText}>{'Login'}</Text>
				</TouchableHighlight>
			</ScrollView>
		);
	}


	onPressLoginButton(){
		this.props.login(this.state.username, this.state.password);
	}
}

const mapStateToProps = (state, ownProps ) => {
	return {
		isLoggedIn: state.userReducer.isLoggedIn
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		login:(username,password)=>{ dispatch(login(username, password));}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30
  },
  loginHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10 ,
  },
  heading:{
  	fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  username:{
    height:50,
    borderBottomWidth:1,
    borderColor:'white',
    padding:10,
    margin:5,
    marginTop:30,
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    backgroundColor:'#20b2aa',
  },
  password:{
    height:50,
    borderBottomWidth:1,
    borderColor:'white',
    padding:10,
    margin:5,
    marginTop:5,
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    backgroundColor:'#20b2aa',
  },
  login:{
    marginTop:30,
    width:300,
    margin:20,
    borderWidth:1,
    borderColor:'red',
    padding:15,
    alignItems:'center',
    marginLeft:30,
    marginRight:25,
    backgroundColor:'red',
    borderRadius:5,
  },
  loginText:{
    fontSize:18,
    color:'white',
  },
  
})  