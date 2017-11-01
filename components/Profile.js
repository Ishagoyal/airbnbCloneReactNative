import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Profile extends Component{

  constructor(props){
    super(props);
    this.state = {
      displayProfileName:'',
      displayPrrofilePic:'',
    }
  }

  componentDidMount(){
    this.setState({
      displayProfileName:'Isha',
      displayPrrofilePic: 'https://uzateka.com/images/profil.png',
    });
  }

	render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>{'My Profile'}</Text>
        <View style={styles.image}>
          <Text style={styles.name}>{this.state.displayProfileName}</Text>
          <Image source={{uri:this.state.displayPrrofilePic}} style={styles.profilePic}/>
        </View>
        <Text style={styles.editProfile} onPress={this.onPressEditProfile.bind(this)}>{'View and Edit Profile'}</Text>
        <TouchableHighlight onPress={this.onPressNotifications} style={styles.button}>
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressCreditsAndCoupons} style={styles.button}>
          <Text style={styles.buttonText}>Credits & Coupons</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressInviteFriends} style={styles.button}>
          <Text style={styles.buttonText}>Invite Friends</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressPayments} style={styles.button}>
          <Text style={styles.buttonText}>Payments</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressListYourSpace} style={styles.button}>
          <Text style={styles.buttonText}>List Your Space</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressSettings} style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressGetHelp} style={styles.button}>
          <Text style={styles.buttonText}>Get Help</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressGiveFeedback} style={styles.giveFeedbackButton}>
          <Text style={styles.buttonText}>Give us Feedback</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }

  onPressEditProfile(){
    Actions.editProfile(); 
  }

  onPressNotifications(){
    Actions.notifications();
  }

  onPressCreditsAndCoupons(){
    Actions.creditsAndCoupons();
  }

  onPressInviteFriends(){
    Actions.inviteFriends();
  }

  onPressPayments(){
    Actions.payments();
  }

  onPressSettings(){
    Actions.settings();
  }

  onPressGetHelp(){
    Actions.getHelp();
  }

  onPressGiveFeedback(){
    Actions.giveFeedback();
  }  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 10,
    marginBottom:30,
  },
  item: {
    padding: 5,
    fontSize: 14,
    height: 44,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom:10
  },
  name:{
    fontSize:28,
    fontWeight:'bold',
    marginLeft:20,
    marginRight:100,

  },
  profilePic:{
    height: 60,
    width:60,
    marginLeft:100,
  },
  editProfile:{
    fontSize:18,
    marginLeft:20,
    fontWeight:'bold',
  },
  image:{
    flexDirection:'row', 
    flexWrap:'wrap',
  },
  button:{
    borderTopWidth: 1,
    padding: 10,
    borderColor: 'grey',
    marginTop:20,
    marginLeft:10,
    marginRight:10,
  },
  giveFeedbackButton:{
    borderTopWidth: 1,
    borderBottomWidth:1,
    padding: 10,
    borderColor: 'grey',
    marginTop:20,
    marginLeft:10,
    marginRight:10,
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:16
  }
})