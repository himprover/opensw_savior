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

/*
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../common/RootStackParams';


type MainPageProp = StackNavigationProp<RootStackParamList, 'Main'>;

function MainPage() {
	const navigation = useNavigation<MainPageProp>();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>MainPageProp</Text>
			<Button title='login' onPress={() => navigation.navigate('Auth')} />
		</View>
	);
}

export default MainPage;
*/
