import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../common/MainBottomTabParams';

import TimeSetPage from './TimeSetPage';
import OotdSetPage from './OotdSetPage';
import MapSetPage from './MapSetPage';
import MsgSetPage from './MsgSetPage';
import LiveTrackPage from './LiveTrackPage';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainPage() {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen name='TIME' component={TimeSetPage} />
			<BottomTab.Screen name='OOTD' component={OotdSetPage} />
			<BottomTab.Screen name='HOME' component={MainPage} />
			<BottomTab.Screen name='MAP' component={MapSetPage} />
			<BottomTab.Screen name='MSG' component={MsgSetPage} />
		</BottomTab.Navigator>
	);
}

export default MainPage;
