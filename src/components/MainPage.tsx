import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TEST1 from './Test1';
import TEST2 from './Test2';
import { MainBottomTabParamList } from '../common/MainBottomTabParams';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainPage() {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen name='TEST1' component={TEST1} />
			<BottomTab.Screen name='TEST2' component={TEST2} />
		</BottomTab.Navigator>
	);
}

export default MainPage;
