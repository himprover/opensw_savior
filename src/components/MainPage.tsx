import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function MainPage() {
	return (
		<View>
			<View style={styles.head}></View>
			<View style={styles.container}>
				<View style={styles.map}></View>
			</View>
			<View style={styles.footer}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	head: {
		flex: 1,
		backgroundColor: 'black',
	},
	container: {
		flex: 10,
		backgroundColor: 'red',
	},
	map: {
		backgroundColor: 'blue',
	},
	footer: {
		flex: 2,
		backgroundColor: 'gray',
	},
});

export default MainPage;
