import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'; 

export default class BookProperty extends Component{
  constructor(props){
    super(props);
    this.state = {
      displayStartDate:'',
      displayEndDate:''
    }
  }

  componentDidMount(){
    this.setState({
      displayStartDate : this.props.startDate,
      displayEndDate : this.props.endDate
    });
  }

  reviewYourTripDetails(){
    return(
      <View>
        <Text style={styles.heading}> {'Review your Trip Details'}</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={styles.dateText}> {'Dates'}</Text>
          <Text style={styles.dates}>{this.state.displayStartDate} TO {this.state.displayEndDate}</Text>
        </View>  
      </View>
    )
  }

	render(){
		return(
      <ScrollView style={styles.container}>
        <Text style={styles.item}>{'Step 1 of 5'}</Text>
        {this.reviewYourTripDetails()}
      </ScrollView>
    )
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
  }
})