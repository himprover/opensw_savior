import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function TimeSetPage({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.head}></View>
			<View style={styles.content}>
				<View style={styles.map}>
					<Text>TimeSetPage</Text>
				</View>
				<View style={styles.btn}></View>
			</View>
			<View style={styles.footer}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
	},
	head: {
		flex: 1,
		backgroundColor: 'black',
	},
	content: {
		flex: 3,
		backgroundColor: 'orange',
	},
	map: {
		flex: 2,
		backgroundColor: 'blue',
	},
	btn: {
		flex: 3,
		backgroundColor: 'red',
	},
	footer: {
		flex: 1,
		backgroundColor: 'gray',
	},
});

export default TimeSetPage;
