import React, { Component } from 'react';
import { Container } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import EventDetail from './screens/EventDetail';
// export default class App extends Component {
// 	render() {
// 		return (
// 			<Container>
// 				<Home />
// 			</Container>
// 		);
// 	}
// }

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: Home,
			headers: null
		},
		EventDetail: {
			screen: EventDetail
		}
	},
	{
		initialRouteName: 'Home'
	}
);

const App = createAppContainer(AppNavigator);
export default App;
// // export default createAppContainer(AppNavigator);
