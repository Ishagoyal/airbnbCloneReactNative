import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class GuestNumber extends Component{

  constructor(props){
    super(props);
    this.state = {
      adultNumber: 1,
      isDeleteAdultDisabled:true,
      childrenNumber: 0,
      isDeleteChildrenDisabled:true,
      infantNumber: 0,
      isDeleteInfantDisabled:true,
      startDate:'',
      endDate:'',
    };
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
  }  

  componentDidMount(){
    this.setState({
      startDate : this.props.startDate,
      endDate : this.props.endDate
    });
  }

  render(){
    return(
      <View style={styles.container}>
        {this.renderGuestList()}
      </View>
    )
  }

  renderGuestList(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>{'How many guests?'}</Text>
          <Text style={styles.subHeading}>{'This home allows a maximum of 4 guests,excluding infants.'}</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.adults}>{'Adults'}</Text>
            {((this.state.isDeleteAdultDisabled) && (this.state.adultNumber < 2)) ? (
              <TouchableHighlight key="deleteAdultsDisabled" onPress={this.onPressDeleteAdults.bind(this)} underlayColor='transparent'>
                <Text style={styles.deleteDisabled}>{"  -"}</Text>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight key="deleteAdultsEnabled" onPress={this.onPressDeleteAdults.bind(this)} underlayColor='transparent'>
                <Text style={styles.delete}>{"  -"}</Text>
              </TouchableHighlight>
            )}  
            <Text style={styles.adultNumber}>{this.state.adultNumber}</Text> 
            <TouchableHighlight onPress={this.onPressAddAdults.bind(this)} underlayColor='transparent'>
              <Text style={styles.add}>{"  +"}</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.border}></Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.guests}>{'Children'}</Text>
            {((this.state.isDeleteChildrenDisabled) && (this.state.childrenNumber < 1)) ? (
              <TouchableHighlight key="deleteChildrenDisabled" onPress={this.onPressDeleteChildren.bind(this)} underlayColor='transparent'>
                <Text style={styles.deleteChildrenDisabled}>{"  -"}</Text>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight key="deleteChildrenEnabled" onPress={this.onPressDeleteChildren.bind(this)} underlayColor='transparent'>
                <Text style={styles.deleteChildren}>{"  -"}</Text>
              </TouchableHighlight>
            )}  
            <Text style={styles.number}>{this.state.childrenNumber}</Text> 
            <TouchableHighlight onPress={this.onPressAddChildren.bind(this)} underlayColor='transparent'>
              <Text style={styles.addChildren}>{"  +"}</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.description}>{'2-12 Years Old'}</Text>
          <Text style={styles.border}></Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.guests}>{'Infants'}</Text>
              {((this.state.isDeleteInfantDisabled) && (this.state.infantNumber < 1)) ? (
              <TouchableHighlight key="deleteInfantsDisabled" onPress={this.onPressDeleteInfants.bind(this)} underlayColor='transparent'>
                <Text style={styles.deleteInfantsDisabled}>{"  -"}</Text>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight key="deleteInfantsEnabled" onPress={this.onPressDeleteInfants.bind(this)} underlayColor='transparent'>
                <Text style={styles.deleteInfants}>{"  -"}</Text>
              </TouchableHighlight>
            )}  
            <Text style={styles.number}>{this.state.infantNumber}</Text> 
            <TouchableHighlight onPress={this.onPressAddInfants.bind(this)} underlayColor='transparent'>
              <Text style={styles.addInfants}>{"  +"}</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.description}>{'Under 2 Years Old'}</Text>
          <Text style={styles.border}></Text>
        </ScrollView>
        <View>
          <TouchableHighlight style={styles.save} onPress={this.onPressSaveButton.bind(this.state.startDate,this.state.endDate)}>
            <Text style={styles.saveText}>{'Save'}</Text>
          </TouchableHighlight>
        </View>  
      </View>
    )
  }

  onPressAddAdults(){
    this.setState((prevState) => ({
      adultNumber: prevState.adultNumber + 1 
    }));
  }

  onPressDeleteAdults(){
    if(this.state.adultNumber > 1 ){
      this.setState((prevState) => ({
        adultNumber: prevState.adultNumber - 1,
        isDeleteAdultDisabled:false
      }));
    } 
    if(this.state.adultNumber == 2){
      this.setState({
        isDeleteAdultDisabled:true,
      })
    }
  }

  onPressAddChildren(){
    this.setState((prevState) => ({
      childrenNumber: prevState.childrenNumber + 1 
    }));
  }

  onPressDeleteChildren(){
    if(this.state.childrenNumber > 0 ){
      this.setState((prevState) => ({
        childrenNumber: prevState.childrenNumber - 1,
        isDeleteChildrenDisabled:false
      }));
    } 
    if(this.state.childrenNumber == 1){
      this.setState({
        isDeleteChildrenDisabled:true,
      })
    }
  }

  onPressAddInfants(){
    this.setState((prevState) => ({
      infantNumber: prevState.infantNumber + 1 
    }));
  }

  onPressDeleteInfants(){
    if(this.state.infantNumber > 0 ){
      this.setState((prevState) => ({
        infantNumber: prevState.infantNumber - 1,
        isDeleteInfantDisabled:false
      }));
    } 
    if(this.state.infantNumber == 1){
      this.setState({
        isDeleteInfantDisabled:true,
      })
    }
  }

  onPressSaveButton(startDateDisplay, endDateDisplay){
    Actions.bookProperty({startDate: startDateDisplay,endDate:endDateDisplay});
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading:{
    fontSize:14,
    textAlign: 'center',
    marginTop:5,
  },
  adults:{
    fontSize:16,
    marginTop:30,
    margin:10,
  },
  guests:{
    fontSize:16,
    marginTop:5,
    margin:10,
  },
  adultNumber:{
    fontSize:16,
    marginTop:30,
    margin:10,
    marginLeft:25,
    fontWeight:'bold',
  },
  number:{
    fontSize:16,
    marginTop:5,
    margin:10,
    marginLeft:25,
    fontWeight:'bold',
  },
  add:{
    borderWidth:2,
    borderColor:'green',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'green',
    marginTop:30,
    margin:10,
    marginLeft:30, 
    fontWeight:'bold', 
  },
  addChildren:{
    borderWidth:2,
    borderColor:'green',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'green',
    marginTop:5,
    margin:10,
    marginLeft:30, 
    fontWeight:'bold', 
  },
  addInfants:{
    borderWidth:2,
    borderColor:'green',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'green',
    marginTop:5,
    margin:10,
    marginLeft:30, 
    fontWeight:'bold', 
  },
  delete:{
    borderWidth:2,
    borderColor:'green',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'green',
    marginTop:30,
    margin:10,
    marginLeft:130,
    fontWeight:'bold',   
  },
  deleteChildren:{
    borderWidth:2,
    borderColor:'green',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'green',
    marginTop:5,
    margin:10,
    marginLeft:116,
    fontWeight:'bold',   
  },
   deleteInfants:{
    borderWidth:2,
    borderColor:'green',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'green',
    marginTop:5,
    margin:10,
    marginLeft:125,
    fontWeight:'bold',   
  },
  deleteDisabled:{
    borderWidth:2,
    borderColor:'grey',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'grey',
    marginTop:30,
    margin:10,
    marginLeft:130,
    fontWeight:'bold',   
  },
  deleteChildrenDisabled:{
    borderWidth:2,
    borderColor:'grey',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'grey',
    marginTop:5,
    margin:10,
    marginLeft:116,
    fontWeight:'bold',   
  },
  deleteInfantsDisabled:{
    borderWidth:2,
    borderColor:'grey',
    borderRadius:15,
    width:30,
    height:30,
    fontSize:20,
    color:'grey',
    marginTop:5,
    margin:10,
    marginLeft:125,
    fontWeight:'bold',   
  },
  border:{
    borderTopWidth: 1,
    padding: 10,
    borderColor: 'grey',
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    width:340,
  },
  save:{
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
  saveText:{
    fontSize:18,
    color:'white',
  },
  description:{
    fontSize:14,
    margin:5,
    marginTop:0,
    marginLeft:10,
  }
}) 