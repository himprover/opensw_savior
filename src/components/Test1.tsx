import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../common/RootStackParams';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../common/MainBottomTabParams';

type TEST1Prop = CompositeNavigationProp<
	StackNavigationProp<RootStackParamList, 'Main'>,
	BottomTabNavigationProp<MainBottomTabParamList, 'TEST1'>
>;

function Test1() {
	const navigation = useNavigation<TEST1Prop>();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>TEST1</Text>
			<Button title='Login' onPress={() => navigation.navigate('TEST2')} />
		</View>
	);
}

export default Test1;
