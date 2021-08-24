import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../common/MainBottomTabParams';

import MainPage from './MainPage';
import TimeSetPage from './TimeSetPage';
import OotdSetPage from './OotdSetPage';
import MapSetPage from './MapSetPage';
import MsgSetPage from './MsgSetPage';
import LiveTrackPage from './LiveTrackPage';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

function Tabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Time' component='TimeSetPage'></Tab.Screen>
			<Tab.Screen name='Ootd' component='OotdSetPage'></Tab.Screen>
			<Tab.Screen name='Home' component='MainPage'></Tab.Screen>
			<Tab.Screen name='Map' component='MapSetPage'></Tab.Screen>
			<Tab.Screen name='Msg' component='MsgSetPage'></Tab.Screen>
		</Tab.Navigator>
	);
}

export default Tabs;
