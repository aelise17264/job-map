import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class WelcomeScreen extends Component {
	render() {
		return (
			<View styles={styles.screen}>
				<Text>WelcomeScreen</Text>
				<Text>WelcomeScreen</Text>
				<Text>WelcomeScreen</Text>
				<Button title="testing" />
			</View>
		);
	}
}
export default WelcomeScreen;

const styles = StyleSheet.create({});
