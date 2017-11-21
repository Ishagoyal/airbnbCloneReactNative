import React,{Component} from 'react';
import {Router,Scene, Modal} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import Home from './components/Home';
import Property from './components/Property';
import BookProperty from './components/BookProperty';
import TabIcon from './components/TabIcon';
import Profile from './components/Profile';
import Trips from './components/Trips';
import Saved from './components/Saved';
import Inbox from './components/Inbox';
import EditProfile from './components/EditProfile';
import Notifications from './components/Notifications';
import CreditsAndCoupons from './components/CreditsAndCoupons';
import InviteFriends from './components/InviteFriends';
import Payments from './components/Payments';
import Settings from './components/Settings';
import GetHelp from './components/GetHelp';
import GiveFeedback from './components/GiveFeedback';
import SearchCity from './components/SearchCity';
import GuestNumber from './components/GuestNumber';

export default class App extends Component{
  render() {
    return (
      <Router>
        <Scene key="modal" component={Modal}>
          <Scene key="root">
            <Scene key="property" component={Property} title="Property" />
            <Scene key="bookProperty" component={BookProperty} title="BookProperty" >
            </Scene>  
            <Scene key="guests" component={GuestNumber} schema="modal" title="GuestNumber" direction="vertical"/>
            <Scene key="editProfile" component={EditProfile} title="EditProfile"/>
            <Scene key="notifications" component={Notifications} title="Notifications"/>
            <Scene key="creditsAndCoupons" component={CreditsAndCoupons} title="CreditsAndCoupons"/>
            <Scene key="inviteFriends" component={InviteFriends} title="InviteFriends"/>
            <Scene key="payments" component={Payments} title="Payments"/>
            <Scene key="settings" component={Settings} title="Settings"/>
            <Scene key="getHelp" component={GetHelp} title="GetHelp"/>
            <Scene key="giveFeedback" component={GiveFeedback} title="GiveFeedback"/>
            <Scene key="searchCity" component={SearchCity} title="SearchCity"/>
            <Scene  
              key="tabbar"
              tabs
              swipeEnabled={false}
              showLabel={false}
              inactiveBackgroundColor='white'
              tabBarPosition={'bottom'}
              tabBarStyle={{backgroundColor:'orange'}}
              initial
            >
              <Scene
                key="explore" 
                title="Explore" 
                icon={TabIcon}
                activeBackgroundColor="#DDD"
                navigationBarStyle={{ backgroundColor: 'green' }}
                titleStyle={{ color: 'white', alignSelf: 'center' }}
              >
                <Scene key="homes" title="Explore" component={Home}/>
              </Scene>
              <Scene
                key="trips" 
                title="Trips" 
                icon={TabIcon}
                activeBackgroundColor="#DDD"
                navigationBarStyle={{ backgroundColor: 'green' }}
                titleStyle={{ color: 'white', alignSelf: 'center' }}
              >
                <Scene key="yourTrips" title="Trips" component={Trips}/>
              </Scene>
              <Scene 
                key="saved" 
                title="Saved" 
                icon={TabIcon}
                activeBackgroundColor="#DDD"
                navigationBarStyle={{ backgroundColor: 'green' }}
                titleStyle={{ color: 'white', alignSelf: 'center' }}
              >
                <Scene key="yourSavedPlaces" title="Saved" component={Saved}/>
              </Scene>
              <Scene 
                key="inbox" 
                title="Inbox" 
                icon={TabIcon}
                activeBackgroundColor="#DDD"
                navigationBarStyle={{ backgroundColor: 'green' }}
                titleStyle={{ color: 'white', alignSelf: 'center' }}
              >
                <Scene key="yourMessages" title="Inbox" component={Inbox}/>
              </Scene>
               <Scene
                key="profile" 
                title="Profile" 
                icon={TabIcon}
                activeBackgroundColor="#DDD"
                navigationBarStyle={{ backgroundColor: 'green' }}
                titleStyle={{ color: 'white', alignSelf: 'center' }}
              >
                <Scene key="myProfile" title="Profile" component={Profile}/>
              </Scene>
            </Scene>
          </Scene>
        </Scene>   
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'transparent', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

