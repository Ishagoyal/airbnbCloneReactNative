import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image,TouchableHighlight, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import propertyListData from '../utils/Data.json';
import { connect } from 'react-redux';
import Login from '../components/Login';

//var count=0;
//var isPropertyExists = false;
//var objectLength = Object.keys(propertyListData).length;


class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      propertyCityName:'',
      isSearchingCity:false,
      searchCityName:'',
      isPropertyExists:false
    }

    //this.ifPropertyExists = this.ifPropertyExists.bind(this);
  }

  render(){
    if (this.props.isLoggedIn){
      return (
        <View style={{flex:1}}>
          {this.renderSearchBar()}
          {this.renderList()}
        </View>
      );
    }
    else {
      return <Login />; 
    }  
  }
  
  renderList(){
    if(this.state.isSearchingCity){
      return(
        <View style={{flex:1}}>
          <FlatList
           data={propertyListData}
           renderItem={({item}) => this.renderPropertyOnCityBasis(item)}
           keyExtractor={(item, index) => item.id}
           key="renderPropertyOfACity"
          />
        </View>
      )
    }
    else if(!this.state.isSearchingCity){
      return(
        <View style={{flex:1}}>
          <FlatList
           data={propertyListData}
           renderItem={({item}) => this.renderPropertyListRow(item)}
           keyExtractor={(item, index) => item.id}
           key="renderAllPropertyList"
          />
        </View>
      )
    }
  }

  onPressPropertyName(item){
    Actions.property({propertyId: 1});  
  }

 /* ifPropertyExists(){
    this.setState({
      isPropertyExists : true
    });
  }  */
 
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
    /*this.setState((prevState) => ({
      itemCount: prevState.itemCount + 1,
    }));*/
    if(item.city == this.state.propertyCityName){
      //{this.ifPropertyExists()}
      return(
        <View style={styles.container}>
          <Image source = {{uri:item.images.image1}} style={{width:400,height: 200,padding:5}} />
          <Text style={styles.name} onPress={this.onPressPropertyName.bind(this,item)}>{item.name} </Text>
          <Text style={styles.item} >{item.price} </Text>
          <Text style={styles.item} >{item.address} </Text>
        </View> 
      );
    }
    else{
    //else if ((itemCount == objectLength) && (isPropertyExists == false)){
      return(
        <View style={styles.container}>
          <Text style={styles.error}>{'No place found in this City!'}</Text>
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
      searchCityName:'',
    });
  }

  onPressSearchButton(cityName){
    this.setState({
      isSearchingCity:true,
      propertyCityName:cityName
    });
  }
}

const mapStateToProps = (state, ownProps ) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  };
}

export default connect(mapStateToProps)(Home);


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
  },
  error:{

  }
})