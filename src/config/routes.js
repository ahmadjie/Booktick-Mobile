import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../../screens/Home';
import EventDetail from '../../screens/EventDetail';
​
export default createStackNavigator(routes);
const routes = {
    home: { screen: Home },
    eventdetail: { screen: EventDetail }
}
​
export default routes;