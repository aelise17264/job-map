import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReviewScreen from './ReviewScreen';

function SettingScreen() {
	return (
		<View styles={styles.screen}>
			<Text>SettingScreen</Text>
		</View>
	);
}

export default SettingScreen;

const styles = StyleSheet.create({});
