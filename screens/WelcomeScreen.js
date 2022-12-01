import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to JobApp', color: '#DEBACE' },
	{ text: 'Use this to get a job', color: '#BA94D1' },
	{ text: 'Set your location, then swipe away', color: '#7F669D' },
];

class WelcomeScreen extends Component {
	render() {
		return <Slides data={SLIDE_DATA} />;
	}
}
export default WelcomeScreen;

const styles = StyleSheet.create({});
