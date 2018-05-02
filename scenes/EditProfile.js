import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { editProfile } from '../actions';

class EditProfile extends Component{

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };  
  }

  render(){
    return(
      <View style={styles.container}>
        {this.renderEditProfile()}
      </View>
    )
  }

  renderEditProfile(){
    return(
      <ScrollView
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.editHeading} >{'Edit'}</Text>
        <TextInput
          style={styles.firstName}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="First Name"
          autoFocus={true} 
          value={this.state.firstName}
          onChangeText={(text) => this.setState({firstName:text})}
        > 
        </TextInput>
        <TextInput
          style={styles.lastName}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Last Name"
          value={this.state.lastName}
          onChangeText={(text) => this.setState({lastName:text})}
        > 
        </TextInput>
        <TouchableOpacity
          style = {styles.save}
          onPress= {this.onPressSaveButton.bind(this)}
        >
          <Text style={styles.saveText}>{'Save'}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  onPressSaveButton(){
    //console.log(this.state.firstName);
    this.props.editProfile(this.state.firstName, this.state.lastName);
    Actions.pop();
  }
}

const mapStateToProps = (state, ownProps ) => {
  return {
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile:(firstName,lastName)=>{ dispatch(editProfile({firstName:firstName, lastName:lastName}));}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30
  },
  editHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10 ,
  },
  firstName:{
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
  lastName:{
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
  save:{
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
  saveText:{
    fontSize:18,
    color:'white',
  }, 
}) 