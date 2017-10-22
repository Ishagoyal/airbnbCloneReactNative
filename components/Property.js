import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Button, 
  ScrollView, 
  DatePickerAndroid,
  TouchableOpacity,
  TouchableHighlight 
} from 'react-native'; 
import propertyDetailsData from '../utils/propertyDetailsData.json';
import { Actions } from 'react-native-router-flux';

var isStartDate = true;
export default class Property extends Component{
	constructor(props){
		super(props);
    this.state = {
      displayName: '',
      displayPrice: '',
      displayAddress: '',
      displayImage: '',
      startDate:'',
      endDate:'',
      isStartDateConfirmed:false,
      isEndDateConfirmed:false,
    }; 
    this.openCalendarForCheckIn = this.openCalendarForCheckIn.bind(this);
    this.openCalendarForCheckOut = this.openCalendarForCheckOut.bind(this);
    this.displayConfirmButton = this.displayConfirmButton.bind(this);
	}
  
  componentDidMount(){
    this.setState({
      displayName: propertyDetailsData[0].name,
      displayPrice: propertyDetailsData[0].price,
      displayAddress: propertyDetailsData[0].address,
      displayImage: propertyDetailsData[0].image
    });
  } 

  render() {
    return(
      <View style = {styles.container}>
        {this.renderPropertyDetails()}
        <View style={{flexDirection:'row'}}>
          {this.displayCheckInDate()}
          {this.displayCheckOutDate()} 
        </View> 
        {this.displayConfirmButton()}  
      </View>  
    );       
  }

  renderPropertyDetails(){
    return(
      <View>
        <ScrollView>
          <Text style={styles.heading} >{'Property Details'}</Text>
          <Image source = {{uri:this.state.displayImage}} style={{ height: 200, marginLeft: 5,}} />
          <Text style={styles.item} >{this.state.displayName} </Text>
          <Text style={styles.item} >{this.state.displayPrice} </Text>
          <Text style={styles.item} >{this.state.displayAddress} </Text>
        </ScrollView>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <TouchableOpacity style={styles.button} onPress={this.openCalendarForCheckIn}>
            <Text>CheckIn</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.openCalendarForCheckOut}>
            <Text>CheckOut</Text> 
          </TouchableOpacity>
        </View> 
      </View>  
    );
  }

  displayCheckInDate(){
    if(this.state.isStartDateConfirmed){
      return(
        <View style={{marginLeft:50,marginRight:50,paddingTop:10}}>
          <Text>{this.state.startDate}</Text>  
        </View> 
      )
    }
  }

  displayCheckOutDate(){
    if(this.state.isEndDateConfirmed){
      return(
        <View style={{marginLeft:60,marginRight:50,paddingTop:10}}>
          <Text>{this.state.endDate}</Text>  
        </View> 
      )
    }
  }

  displayConfirmButton(){
    if(this.state.isEndDateConfirmed && this.state.isEndDateConfirmed){
      return(
        <View style={{paddingTop:10}}>
          <Button
            title="Confirm"
            onPress={()=>this.onPressConfirmButton(this.state.startDate,this.state.endDate)}
          /> 
        </View> 
      )
    }
  }


  onPressConfirmButton(startDateDisplay, endDateDisplay){
    Actions.bookProperty({startDate: startDateDisplay,endDate:endDateDisplay}); 
  }

  async openCalendarForCheckIn(){
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
      date: new Date(),
      minDate:new Date()
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      // Selected year, month (0-11), day
      this.setState({
       startDate : day+"-"+(month+1)+"-"+year,
       isStartDateConfirmed : true
      });
    }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  async openCalendarForCheckOut(){
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
      date: new Date(),
      minDate:new Date()
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      // Selected year, month (0-11), day
      this.setState({
        endDate : day+"-"+(month+1)+"-"+year,
        isEndDateConfirmed : true
      });
    }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
}  

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30
  },
  item: {
    padding: 5,
    fontSize: 14,
    height: 44,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  button: {
    backgroundColor: '#00bfff',
    height: 30,
    width:80,
    marginTop: 10,
    marginLeft:50,
    marginRight:50,
    alignItems:'center',
  }
})
