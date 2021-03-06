// default
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// component
import MainPage from './src/components/MainPage';
import AuthPage from './src/components/AuthPage';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/common/RootStackParams';

// firebase_googlelogin
import * as firebase from 'firebase';

// expo_map
import * as Location from 'expo-location';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Auth' component={AuthPage} />
				<Stack.Screen name='Main' component={MainPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
