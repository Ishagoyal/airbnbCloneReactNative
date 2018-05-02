import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { logout } from '../actions';

class Profile extends Component{

  constructor(props){
    super(props);
    this.state = {
      displayProfileName:'',
      displayProfilePic:'',
    }
  }

  componentDidMount(){
    this.setState({
      displayProfilePic: 'https://uzateka.com/images/profil.png',
    });
  }
  
  render(){ 
    if (this.props.isLoggedIn){ 
      return(
        <ScrollView style={styles.container}>
          <Text style={styles.heading}>{'My Profile'}</Text>
          <Text style={styles.email}>{this.props.username}</Text>
          <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
          <Image source={{uri:this.state.displayProfilePic}} style={{width:40,height:40,marginLeft:290}}/>
          <Text style={styles.editProfile} onPress={this.onPressEditProfile.bind(this)}>{'Edit Profile'}</Text>
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
          <TouchableHighlight
          style = {styles.logout}
          onPress={this.onPressLogoutButton.bind(this)}
          >
          <Text style={styles.logoutText}>{'Logout'}</Text>
        </TouchableHighlight>
        </ScrollView>
      )
    }
    else{
      return(
       <Login />
      )
    }  
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

  onPressLogoutButton(){
    this.props.logout();
  }
}

const mapStateToProps = (state, ownProps ) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    username: state.userReducer.username,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout:() =>{ dispatch(logout());}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


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
    fontSize:18,
    fontWeight:'bold',
    marginLeft:20,
    marginRight:100,
    marginBottom:10,
  },
  email:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:20,
    marginRight:100,
    marginTop:20,
  },
  editProfile:{
    fontSize:16,
    marginLeft:20,
    fontWeight:'bold',
    color:'blue'
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
    padding: 15,
    borderColor: 'grey',
    marginTop:20,
    marginLeft:10,
    marginRight:10,
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:16,
    color:'blue'
  },
  logout:{
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
  logoutText:{
    fontSize:18,
    color:'white',
  },
})