import React from 'react';
import { Text } from 'react-native';

interface SplashProps {
	name: string;
	src: string;
}

function SplashPage({ name, src }: SplashProps) {
	return (
		<Text>
			Hello, name:{name} src:{src}
		</Text>
	);
}

SplashPage.defaultProps = {
	name: 'defname',
	src: 'defsrc',
};

export default SplashPage;
