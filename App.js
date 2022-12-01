import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapView';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';

function StackScreens() {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator initialRouteName="ReviewScreen">
			<Stack.Screen name="SettingScreen" component={SettingScreen} />
			<Stack.Screen name="ReviewScreen" component={ReviewScreen} />
		</Stack.Navigator>
	);
}

class App extends React.Component {
	render() {
		const Tab = createMaterialBottomTabNavigator();
		return (
			<NavigationContainer>
				<Tab.Navigator
					headerShown="true"
					barStyle={{
						paddingBottom: 8,
						alignContent: 'center',
					}}
					screenOptions={{ headerShown: true }}
				>
					<Tab.Screen
						component={WelcomeScreen}
						name="Welcome"
						options={{
							tabBarLabel: 'Welcome',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="home" color={color} size={26} />
							),
						}}
					/>
					<Tab.Screen
						name="Auth"
						component={AuthScreen}
						options={{
							tabBarLabel: 'Auth',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons
									name="security"
									color={color}
									size={26}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="Map"
						component={MapScreen}
						options={{
							tabBarLabel: 'Map',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons
									name="sign-direction"
									color={color}
									size={26}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="Deck"
						component={DeckScreen}
						options={{
							tabBarLabel: 'Deck',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="cards" color={color} size={26} />
							),
						}}
					/>
					<Tab.Screen
						name="StackScreens"
						component={StackScreens}
						options={{
							tabBarLabel: 'Stack',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons
									name="airballoon"
									color={color}
									size={26}
								/>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}

// https://reactnavigation.org/
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
