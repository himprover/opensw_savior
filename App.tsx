import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationStackAction } from 'react-navigation';

// makecomponent
import SplashPage from './src/components/SplashPage';

// plus
import * as Location from 'expo-location';

export default function App() {
	return <SplashPage />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
