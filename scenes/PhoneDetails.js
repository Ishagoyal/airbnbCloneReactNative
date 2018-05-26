import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight } from 'react-native'; 
import { Actions } from 'react-native-router-flux';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

export default class PhoneDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      cca2: 'US',
      isPhoneValid : ""
    };
    //this.onPressFlag = this.onPressFlag.bind(this);
    //this.selectCountry = this.selectCountry.bind(this);
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData(),
    });
  }


  render(){
    return(
      <View style={styles.container}>
        {this.renderPhoneDetails()}
      </View>
    )
  }

  renderPhoneDetails(){
    return(
       <View style={styles.container}>
        <ScrollView>
          <Text style={styles.item}>{'Step 2 of 5'}</Text>
          <Text style={styles.heading}> {'Confirm your phone number'}</Text>
          <Text style={styles.content}> 
            {'This is so your host can contact you during your trip, and Airbnb knows how to reach you'}
          </Text>
          <Text style = {styles.phoneText}>{'PHONE'}</Text>
          <PhoneInput
            ref={(ref) => { this.phone = ref; }}
            textProps = {{onSubmitEditing: () => {this.updateInfo()}}}
            textStyle = {{fontSize: 16}}
            style ={{marginLeft: 10, borderBottomWidth:1, borderColor:'grey', padding:5, marginRight:10,}}
            flagStyle = {{width: 50, height: 30, borderWidth:0}}
            onPressFlag={()=> this.onPressFlag()}
          />
          <CountryPicker
            ref={(ref) => {this.countryPicker = ref;}}
            onChange={(value) => this.selectCountry(value)} 
            translation='eng'
            cca2={this.state.cca2} 
          >
            <View></View>
          </CountryPicker>
        </ScrollView>
        {this.renderNextButton()}
       </View>
    )
  }


  renderNextButton(){
    if(this.state.isPhoneValid){
      return(
        <View>
          <TouchableHighlight style={styles.next} >
            <Text style={styles.nextText}>{'Next'}</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }

  updateInfo(){
    this.setState({
      isPhoneValid : this.phone.isValidNumber()
    })
  }

  onPressFlag(){
    this.countryPicker.openModal();
  }

  selectCountry(country){
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2 });
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 20
  },
  item: {
    padding: 5,
    fontSize: 14,
    height: 44,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content:{
    fontSize:18,
    margin:10
  },
  phoneText:{
    fontSize:18,
    margin:10
  },
  next:{
    width:100,
    borderWidth:1,
    borderColor:'red',
    padding:15,
    alignItems:'center',
    marginLeft: 240,
    marginBottom : 20,
    backgroundColor:'red',
    borderRadius:5,
  },
  nextText:{
    fontSize:18,
    color:'white',
  },
  phoneInput:{
    marginLeft: 10,
    borderBottomWidth:1,
    borderColor:'grey',
    padding:5,
    marginRight:10,
  }
})