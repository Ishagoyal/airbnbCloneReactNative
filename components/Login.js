import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet, Text, TextInput,TouchableOpacity } from 'react-native';
import { login } from '../actions';

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
        {this.renderIfIncorrectCredentials()}
      </View>
		);
	}

	renderLogin(){
		return(
			<ScrollView
				keyboardShouldPersistTaps={true}
			>
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
				<TouchableOpacity
					style = {styles.login}
					onPress= {this.onPressLoginButton.bind(this)}
				>
					<Text style={styles.loginText}>{'Login'}</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}

	renderIfIncorrectCredentials(){
		if(this.props.isIncorrectCredentials){
			return(
				<View style={styles.container}>
					<Text style ={styles.incorrectCredentials}>{"Username or Password is incorrect!"}</Text>
				</View>
			)
		}
	}

	onPressLoginButton(){
		this.props.login(this.state.username, this.state.password);
	}
}

const mapStateToProps = (state, ownProps ) => {
	return {
		isLoggedIn: state.userReducer.isLoggedIn,
		isIncorrectCredentials: state.userReducer.isIncorrectCredentials,
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
    margin:10,
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
  incorrectCredentials:{
  	fontSize:18,
  	marginLeft:30,
  	marginTop:5
  }
})  