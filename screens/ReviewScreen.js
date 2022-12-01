import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import SettingScreen from './SettingScreen';

function ReviewScreen() {
	const navigation = useNavigation();
	return (
		<View>
			<Text>ReviewScreen</Text>
			<Button
				title="Back to Settings"
				onPress={() => navigation.navigate('SettingScreen')}
			/>
		</View>
	);
}
export default ReviewScreen;
