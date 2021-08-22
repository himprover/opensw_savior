import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../common/RootStackParams';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../common/MainBottomTabParams';

type TEST2Prop = CompositeNavigationProp<
	StackNavigationProp<RootStackParamList, 'Main'>,
	BottomTabNavigationProp<MainBottomTabParamList, 'TEST2'>
>;

function Test2() {
	const navigation = useNavigation<TEST2Prop>();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>TEST2</Text>
			<Button title='Login' onPress={() => navigation.navigate('TEST1')} />
		</View>
	);
}

export default Test2;
