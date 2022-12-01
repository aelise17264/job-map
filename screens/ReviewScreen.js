import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import SettingScreen from './SettingScreen';

function ReviewScreen() {
	const navigation = useNavigation();
	return (
		<View>
			<Text>ReviewScreen</Text>
		</View>
	);
}
export default ReviewScreen;
