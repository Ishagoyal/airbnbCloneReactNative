import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableHighlight  } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SearchCity extends Component{

  constructor(props){
    super(props);
    this.state = {
      searchCityName:'',
    }
  }

  componentDidMount(){
    this.setState({
      
    });
  }

	render(){
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.city}
          onChangeText={(text) => this.setState({searchCityName:text})}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Where To?"
          onSubmitEditing={this.onPressSearchButton}
        >  
        </TextInput>
        <View style={{alignItems:'center'}}>
          <TouchableHighlight style={styles.searchButton} onPress={()=>this.onPressSearchButton(this.state.searchCityName)}>
            <Text style={styles.searchText}>{'Search'}</Text>
          </TouchableHighlight>
        </View>  
      </View>
    )
  }

  onPressSearchButton(cityName){
    Actions.explore({cityNameObtained:cityName});
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30,
    backgroundColor:'#20b2aa',
  },
  city:{
    height:40,
    borderBottomWidth:1,
    borderColor:'white',
    padding:10,
    margin:5,
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  },
  searchButton:{
    borderWidth:1,
    borderColor:'white',
    padding:10,
    margin:5,
    marginTop:20,
    borderRadius:5,
    width:140,
    alignItems:'center',
  },
  searchText:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  }
}) 