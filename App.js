import React,{Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';

import Home from './components/Home';
import Property from './components/Property';

export default class App extends Component{
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="home" component={Home} title="Home" initial={true} />
					<Scene key="property" component={Property} title="Property" />
				</Scene>	
			</Router>
		)
	}
}

