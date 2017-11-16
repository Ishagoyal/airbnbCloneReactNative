import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

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
      </View>
    )
  }

	render(){
		return(
      <View style={styles.container}>
        <Text style={styles.item}>{'Step 1 of 5'}</Text>
        {this.reviewYourTripDetails()}
        {/*<Text>{this.state.displayStartDate}</Text>
        <Text>{this.state.displayEndDate}</Text>*/}
      </View>
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

})