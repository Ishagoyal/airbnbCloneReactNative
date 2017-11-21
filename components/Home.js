import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image,TouchableHighlight, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import propertyListData from '../utils/data.json';

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      propertyCityName:'',
      isSearchingCity:false,
      searchCityName:'',
    }
  }

	render(){
    const isSearchingCity = this.state.isSearchingCity;
    console.log(isSearchingCity);
		return (
			<View style={{flex:1}}>
        {this.renderSearchBar()}
        {isSearchingCity ? (
				  <FlatList
					 data={propertyListData}
					 renderItem={({item}) => this.renderPropertyOnCityBasis(item)}
				  />
        ) : (
          <FlatList
           data={propertyListData}
           renderItem={({item}) => this.renderPropertyListRow(item)}
          />
        )}  
			</View>
		);
	}

  render(){
    const isSearchingCity = this.state.isSearchingCity;
    console.log(isSearchingCity);
    return (
      <View style={{flex:1}}>
        {this.renderSearchBar()}
        {isSearchingCity ? (
          <FlatList
           data={propertyListData}
           renderItem={({item}) => this.renderPropertyOnCityBasis(item)}
          />
        ) : (
          <FlatList
           data={propertyListData}
           renderItem={({item}) => this.renderPropertyListRow(item)}
          />
        )}  
      </View>
    );
  }

  render(){
    const isSearchingCity = this.state.isSearchingCity;
    console.log(isSearchingCity);
    return (
      <View style={{flex:1}}>
        {this.renderSearchBar()}
        {isSearchingCity ? (
          <FlatList
            data={propertyListData}
            renderItem={({item}) => this.renderPropertyOnCityBasis(item)}
          />
        ) : (
          <FlatList
            data={propertyListData}
            renderItem={({item}) => this.renderPropertyListRow(item)}
          />
        )}  
      </View>
    );
  }

  renderList(){

  }

	onPressPropertyName(item){
		Actions.property({propertyId: item.id});  
	}   

	renderPropertyListRow(item){
		return(
			<View style={styles.container}>
        <Image source = {{uri:item.images.image1}} style={{width:400,height: 200,padding:5}} />
				<Text style={styles.name} onPress={this.onPressPropertyName.bind(this,item)}>{item.name} </Text>
				<Text style={styles.item} >{item.price} </Text>
				<Text style={styles.item} >{item.address} </Text>
			</View> 
		);   
	}

  renderPropertyListRow(item){
    return(
      <View style={styles.container}>
        <Image source = {{uri:item.images.image1}} style={{width:400,height: 200,padding:5}} />
        <Text style={styles.name} onPress={this.onPressPropertyName.bind(this,item)}>{item.name} </Text>
        <Text style={styles.item} >{item.price} </Text>
        <Text style={styles.item} >{item.address} </Text>
      </View> 
    );   
  }

  renderPropertyOnCityBasis(item){
    console.log(item.city==this.state.propertyCityName);
    console.log(item.city);
    if(item.city==this.state.propertyCityName){
      return(
        <View style={styles.container}>
          <Image source = {{uri:item.images.image1}} style={{width:400,height: 200,padding:5}} />
          <Text style={styles.name} onPress={this.onPressPropertyName.bind(this,item)}>{'item.name'} </Text>
          <Text style={styles.item} >{item.price} </Text>
          <Text style={styles.item} >{item.address} </Text>
        </View> 
      );
    }
  }

  renderSearchBar(){
    return( 
      <View>
        <TextInput 
          style={styles.city}
          onChangeText={(text) => this.setState({searchCityName:text})}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Where To?"
          onSubmitEditing={this.onPressSearchButton}
        >  
        </TextInput>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <TouchableHighlight style={styles.searchButton} onPress={()=>this.onPressSearchButton(this.state.searchCityName)}>
            <Text style={styles.searchText}>{'Search'}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.reset} onPress={this.onPressResetAllButton.bind(this)}>
            <Text style={styles.resetText}>Reset All</Text>
          </TouchableHighlight>
        </View>  
      </View>
    );  
  }

  onPressResetAllButton(){
    this.setState({
      isSearchingCity:false,
    });
  }

  onPressSearchButton(cityName){
    this.setState({
      isSearchingCity:true,
      propertyCityName:cityName
    });
    console.log(cityName);
  }
}


const styles = StyleSheet.create({
	container: {
    flexDirection:'row',
    flexWrap:'wrap',
    flex: 1,
    paddingTop: 10
	},
	item: {
		padding: 5,
		fontSize: 12,
		height: 30,
    fontWeight:'bold',
	},
  name:{
    fontSize:14,
    fontWeight:'bold',
    color:'#3A5FCD',
    paddingTop:5,
    paddingLeft:5
  },
  reset:{
    padding:10,
    borderWidth:1,
    margin:5,
    marginLeft:60,
    marginTop:20,
    marginBottom:20,
    borderColor:'white',
    backgroundColor:'#4F94CD',
    borderRadius:5,
    width:120,
    alignItems:'center',
  },
  resetText:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  },
  city:{
    height:50,
    borderBottomWidth:1,
    borderColor:'white',
    padding:10,
    margin:5,
    marginTop:10,
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    backgroundColor:'#20b2aa',
  },
  searchButton:{
    borderWidth:1,
    borderColor:'white',
    padding:10,
    margin:5,
    marginTop:20,
    marginBottom:20,
    borderRadius:5,
    marginLeft:30,
    width:120,
    alignItems:'center',
    borderColor:'#4F94CD',
    backgroundColor:'#4F94CD',
  },
  searchText:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  }

})