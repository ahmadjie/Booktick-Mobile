import React, { Component } from 'react';
import { Container } from 'native-base';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import EventDetail from './screens/EventDetail';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: Home,
			Details: 'Hume'
		},
		EventDetail: {
			screen: EventDetail
		}
	},
	{
		initialRouteName: 'Home'
	}
);

// const AppBottomNavigator = createBottomTabNavigator(
// 	{
// 		Home: {
// 			screen: Home,
// 			Details: 'Hume'
// 		},
// 		EventDetail: {
// 			screen: EventDetail
// 		}
// 	},
// 	{
// 		initialRouteName: 'Home'
// 	}
// );

const App = createAppContainer(AppNavigator);
export default App;
