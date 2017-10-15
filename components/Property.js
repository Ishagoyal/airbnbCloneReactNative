import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, DatePickerAndroid } from 'react-native'; 
import propertyDetailsData from '../utils/propertyDetailsData.json';
//import Calendar from 'react-native-calendar-select';

export default class Property extends Component{
	constructor(props){
		super(props);
    this.state = {
      displayName: '',
      displayPrice: '',
      displayAddress: '',
      displayImage: '',
      //startDate: new Date(2017, 9, 13),
      //endDate: new Date(2017, 11, 31)
    }; 
    //this.confirmDate = this.confirmDate.bind(this);
    //this.openCalendar = this.openCalendar.bind(this);
	}
  
  componentDidMount(){
    this.setState({
      displayName: propertyDetailsData[0].name,
      displayPrice: propertyDetailsData[0].price,
      displayAddress: propertyDetailsData[0].address,
      displayImage: propertyDetailsData[0].image
    });
  } 

  renderPropertyDetails(){
    return(
      <View style={styles.container} >
        <Text style={styles.heading} > Property Details </Text>
        <Image source = {{uri:this.state.displayImage}} style={{width: 300, height: 200, marginLeft: 5,}} />
        <Text style={styles.item} >{this.state.displayName} </Text>
        <Text style={styles.item} >{this.state.displayPrice} </Text>
        <Text style={styles.item} >{this.state.displayAddress} </Text>
      </View> 
    );
  }
/*
  confirmDate({startDate, endDate}){
    this.setState({
      startDate,
      endDate
    });
  }

  openCalendar(){
    this.calendar && this.calendar.open();
  }*/


  /*renderCalendar(){
    let calendarStructure = {
      'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'text': {
        'start': 'Check in',
        'end':'Check out',
        'date':'Date',
        'save':'Confirm',
        'clear':'Reset'
      },
      'date' : 'DD / MM'
    };
    let color = {
      subColor: '#f0f0f0'
    };
    return(
      <View>
        <Button
          title="Check Availability" 
          onPress={this.openCalendar}
        />
        <Calendar
          i18n="en"
          ref={(calendar) => {this.calendar = calendar;}}
          customI18n={calendarStructure}
          color={color}
          format="YYYYMMDD"
          minDate="20171013"
          maxDate="20180915"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onConfirm={this.confirmDate}   
        />
      </View>
    )
  }*/

  async openCalendar(){
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2017, 9, 15)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  renderCalendar(){
    return(
      <View>
        <Button
          title="Check Availability" 
          onPress={this.openCalendar}
        />
      </View>
    );    
  }

	render() {
    return(
      <View>
        {this.renderPropertyDetails()}
        {this.renderCalendar()}
      </View>
    )
  }
}  

const styles = StyleSheet.create({
  container: {
   paddingTop: 30
  },
  item: {
    padding: 5,
    fontSize: 14,
    height: 44,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
