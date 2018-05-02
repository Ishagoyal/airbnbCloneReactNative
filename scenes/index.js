import React,{Component} from 'react';
import { Provider } from 'react-redux';
import {Router,Scene} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'

import {store} from '../store/configureStore';
import {persistor} from '../store/configureStore';
import Home from '../scenes/Home';
import Property from '../scenes/Property';
import BookProperty from '../scenes/BookProperty';
import TabIcon from '../components/TabIcon';
import Profile from '../scenes/Profile';
import Trips from '../scenes/Trips';
import Saved from '../scenes/Saved';
import Inbox from '../scenes/Inbox';
import EditProfile from '../scenes/EditProfile';
import Notifications from '../scenes/Notifications';
import CreditsAndCoupons from '../scenes/CreditsAndCoupons';
import InviteFriends from '../scenes/InviteFriends';
import Payments from '../scenes/Payments';
import Settings from '../scenes/Settings';
import GetHelp from '../scenes/GetHelp';
import GiveFeedback from '../scenes/GiveFeedback';
import GuestNumber from '../scenes/GuestNumber';

export default class Scenes extends Component{
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Scene key="root">
              <Scene key="property" component={Property} title="Property" /> 
              <Scene key="bookProperty" component={BookProperty} title="BookProperty" />
              <Scene key="guests" component={GuestNumber} title="GuestNumber" direction="vertical"/>
              <Scene key="editProfile" component={EditProfile} title="EditProfile"/>
              <Scene key="notifications" component={Notifications} title="Notifications"/>
              <Scene key="creditsAndCoupons" component={CreditsAndCoupons} title="CreditsAndCoupons"/>
              <Scene key="inviteFriends" component={InviteFriends} title="InviteFriends"/>
              <Scene key="payments" component={Payments} title="Payments"/>
              <Scene key="settings" component={Settings} title="Settings"/>
              <Scene key="getHelp" component={GetHelp} title="GetHelp"/>
              <Scene key="giveFeedback" component={GiveFeedback} title="GiveFeedback"/>
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
                  component={Home}
                >
                </Scene>
                <Scene
                  key="trips" 
                  title="Trips" 
                  icon={TabIcon}
                  activeBackgroundColor="#DDD"
                  navigationBarStyle={{ backgroundColor: 'green' }}
                  titleStyle={{ color: 'white', alignSelf: 'center' }}
                  component={Trips}
                >
                </Scene>
                <Scene 
                  key="saved" 
                  title="Saved" 
                  icon={TabIcon}
                  activeBackgroundColor="#DDD"
                  navigationBarStyle={{ backgroundColor: 'green' }}
                  titleStyle={{ color: 'white', alignSelf: 'center' }}
                  component={Saved}
                >
                </Scene>
                <Scene 
                  key="inbox" 
                  title="Inbox" 
                  icon={TabIcon}
                  activeBackgroundColor="#DDD"
                  navigationBarStyle={{ backgroundColor: 'green' }}
                  titleStyle={{ color: 'white', alignSelf: 'center' }}
                  component={Inbox}
                >
                </Scene>
                <Scene
                  key="profile" 
                  title="Profile" 
                  icon={TabIcon}
                  activeBackgroundColor="#DDD"
                  navigationBarStyle={{ backgroundColor: 'green' }}
                  titleStyle={{ color: 'white', alignSelf: 'center' }}
                  component={Profile}
                >
                </Scene>
              </Scene>
            </Scene>  
          </Router>
        </PersistGate>  
      </Provider>
    )
  }
}

