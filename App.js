import React,{Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';

import Page1 from './components/Page1';
import Page2 from './components/Page2';

export default class App extends Component{
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="page1" component={Page1} title="Page1" initial={true} />
					<Scene key="page2" component={Page2} title="Page2" />
				</Scene>	
			</Router>
		)
	}
}

