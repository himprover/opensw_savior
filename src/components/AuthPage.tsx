import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../common/RootStackParams';

type AuthPageProp = StackNavigationProp<RootStackParamList, 'Auth'>;

function AuthPage() {
	const navigation = useNavigation<AuthPageProp>();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Auth Screen</Text>
			<Button title='login' onPress={() => navigation.navigate('Main')} />
		</View>
	);
}

export default AuthPage;
