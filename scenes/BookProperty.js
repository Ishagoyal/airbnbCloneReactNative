import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'; 
import { Actions } from 'react-native-router-flux';

export default class BookProperty extends Component{
  constructor(props){
    super(props);
    this.state = {
      displayStartDate:'',
      displayEndDate:'',
      guestNumberValue: 1,
      displayBookingPrice:'',
      infantNumber:0,
    };
    this.onPressNumberOfGuests = this.onPressNumberOfGuests.bind(this);
  }

  componentDidMount(){
    this.setState({
      displayStartDate : this.props.startDate,
      displayEndDate : this.props.endDate,
      guestNumberValue : this.props.guestNumber,
      displayBookingPrice: this.props.displayPrice,
      infantNumber: this.props.infantNumberCount,
    });
   /* console.log(typeof this.props.startDate);
    console.log(typeof this.props.endDate);*/
  }

  render(){
    return(
      <View style={styles.container}>
        {this.reviewYourTripDetails()}
      </View>
    )
  }

  reviewYourTripDetails(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.item}>{'Step 1 of 5'}</Text>
          <Text style={styles.heading}> {'Review your Trip Details'}</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.dateText}> {'Dates'}</Text>
            <Text style={styles.dates}>{this.state.displayStartDate} {'TO'} {this.state.displayEndDate}</Text>
            <Text style={styles.border}></Text>
          </View>  
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.guests}> {'Guests'}</Text>
            <Text 
              style={styles.guestsNumber} 
              onPress={this.onPressNumberOfGuests.bind(this,this.state.displayStartDate,this.state.displayEndDate,this.state.displayBookingPrice)}>
              {this.state.guestNumberValue} {'Guests'}
            </Text>
          </View>
          <Text style={styles.infants}>{this.state.infantNumber} Infants</Text>
          <Text style={styles.border}></Text>
        </ScrollView>  
        <View style={styles.price}>
          <Text style={styles.priceText}>{this.state.displayBookingPrice} per night</Text> 
          <TouchableHighlight style={styles.next} onPress={this.onPressNextButton.bind()}>
            <Text style={styles.nextText}>{'Next'}</Text>
          </TouchableHighlight>
        </View>
      </View>  
    )
  }

  onPressNumberOfGuests(startDateDisplay : String,  endDateDisplay : String, bookingPriceDisplay:String){
    Actions.guests({startDate: startDateDisplay,endDate:endDateDisplay, displayPrice:bookingPriceDisplay});
  } 

  onPressNextButton(){
    Actions.phoneDetails()
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateText:{
    fontSize:16,
    marginLeft:20,
    marginTop:30,
    fontWeight:'bold'
  },
  dates:{
    fontSize:16,
    marginLeft:80,
    marginTop:30,
    fontWeight:'bold',
    color:'#20b2aa',
  },
  guests:{
    fontSize:16,
    marginLeft:20,
    marginTop:10,
    fontWeight:'bold'
  },
  guestsNumber:{
    fontSize:16,
    marginLeft:170,
    marginTop:10,
    fontWeight:'bold',
    color:'white',
    borderWidth:1,
    borderColor:'#20b2aa',
    padding:10,
    alignItems:'center',
    backgroundColor:'#20b2aa',
    borderRadius:5,
  },
  next:{
    width:100,
    borderWidth:1,
    borderColor:'red',
    padding:15,
    alignItems:'center',
    marginLeft:100,
    backgroundColor:'red',
    borderRadius:5,
  },
  nextText:{
    fontSize:18,
    color:'white',
  },
  priceText:{
    fontSize:18,
  },
  price:{
    margin:20,
    flexDirection:'row', 
  },
  infants:{
    fontSize:16,
    marginLeft:250,
    marginTop:10,
    fontWeight:'bold',
    color:'#20b2aa',
  },
  border:{
    borderTopWidth: 1,
    borderColor: 'grey',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    width:310,
  }
})