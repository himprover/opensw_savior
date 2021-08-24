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
			<Text>구글 로그인 페이지</Text>
			<Text>로그인 버튼 클릭 시 로그인 되었다 치고 메인으로 이동</Text>
			<Button title='login' onPress={() => navigation.navigate('Main')} />
		</View>
	);
}

export default AuthPage;
