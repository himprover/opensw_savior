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
