import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import propertyListData from '../utils/data.json';

//var isSearchingCity = false;
//var  isResetButtonNotPressed = true;

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      propertyCityName:this.props.cityNameObtained,
      isSearchingCity:false 
    }
  }

	render() {
    console.log(this.state.isSearchingCity);
		return (
			<View style={{flex:1}}>
        {this.renderSearchBar()}
        <TouchableHighlight style={styles.reset} onPress={this.onPressResetAllButton.bind(this)}>
          <Text style={styles.resetText}>Reset All</Text>
        </TouchableHighlight>
        {this.state.isSearchingCity ? (
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

  renderPropertyOnCityBasis(item){
    if(item.city==this.state.propertyCityName){
      return(
        <View style={styles.container}>
          <Image source = {{uri:item.images.image1}} style={{width:400,height: 200,padding:5}} />
          <Text style={styles.name} onPress={this.onPressPropertyName.bind(this,item)}>{item.name} </Text>
          <Text style={styles.item} >{item.price} </Text>
          <Text style={styles.item} >{item.address} </Text>
        </View> 
      );
    }
  }

  renderSearchBar(){
    return(
      <View>
        <TouchableHighlight style={styles.search} onPress={this.onPressSearchCityButton.bind(this)}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Image source={{uri: "http://www.pvhc.net/img2/lnuceeldknrdpozttbxm.png"}} style={{width:30,height:30}}/>
            <Text style={styles.searchText}>{'Search City'}</Text>
          </View>  
        </TouchableHighlight>
      </View>
    )  
  }

  onPressSearchCityButton(){
    this.setState({
      isSearchingCity:true
    })
    //isSearchingCity=true;
    Actions.searchCity();
  }

  onPressResetAllButton(){
   /* this.setState({
      isResetButtonNotPressed:false
    });*/

    //isResetButtonNotPressed=false;
    //isSearchingCity=false;
    this.setState({
      isSearchingCity:false
    })
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
  search:{
    padding:10,
    borderWidth:1,
    margin:5,
    marginTop:10,
    borderColor:'#20b2aa',
    backgroundColor:'#20b2aa',
    borderRadius:5
  },
  searchText:{
    color:'white',
    fontWeight:'bold',
    marginLeft:20,
    fontSize:16,
  },
  reset:{
    padding:10,
    borderWidth:1,
    margin:5,
    marginLeft:275,
    marginTop:10,
    borderColor:'#4F94CD',
    backgroundColor:'#4F94CD',
    borderRadius:5,
    width:80
  },
  resetText:{
    color:'white',
    fontWeight:'bold',
    fontSize:14,
  }

})