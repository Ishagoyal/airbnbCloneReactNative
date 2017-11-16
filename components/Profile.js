import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableHighlight} from 'react-native';
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
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.buttonText}>Notifications</Text>
            <Image source={{uri: "https://www.materialui.co/materialIcons/social/notifications_grey_192x192.png"}} style={{width:30,height:30,marginLeft:185}}/>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressCreditsAndCoupons} style={styles.button}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.buttonText}>Credits & Coupons</Text>
            <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/medicine-9/512/discount_labels-512.png"}} style={{width:30,height:30,marginLeft:140}}/>
          </View> 
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressInviteFriends} style={styles.button}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.buttonText}>Invite Friends</Text>
            <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/e-commerce-4/256/Gift-256.png"}} style={{width:25,height:25,marginLeft:180}}/>
          </View>  
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressPayments} style={styles.button}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.buttonText}>Payments</Text>
            <Image source={{uri: "https://cdn4.iconfinder.com/data/icons/money/512/21-512.png"}} style={{width:30,height:30,marginLeft:205}}/>
          </View>  
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressListYourSpace} style={styles.button}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.buttonText}>List Your Space</Text>
            <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/real-estate-19/24/real-estate-add-512.png"}} style={{width:30,height:30,marginLeft:165}}/>
          </View>  
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressSettings} style={styles.button}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.buttonText}>Settings</Text>
            <Image source={{uri: "https://cdn3.iconfinder.com/data/icons/fez/512/FEZ-04-512.png"}} style={{width:25,height:25,marginLeft:220}}/>
          </View>  
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressGetHelp} style={styles.button}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.buttonText}>Get Help</Text>
            <Image source={{uri: "https://www.newsrx.com/Butter/images/icon-help-dark.png"}} style={{width:25,height:25,marginLeft:220}}/>
          </View>  
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressGiveFeedback} style={styles.giveFeedbackButton}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.buttonText}>Give us Feedback</Text>
            <Image source={{uri: "https://www.prodpad.com/wp-content/uploads/2014/05/icon-comments1.png"}} style={{width:25,height:25,marginLeft:155}}/>
          </View>  
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
    fontSize:16,
  }
})