import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabbar';

function MainPage() {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
}

export default MainPage;
