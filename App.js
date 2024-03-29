import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapView';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';
import {Button} from 'react-native-elements';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import store from './store';

function StackScreens() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="ReviewScreen">
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          headerTitle: 'Settings',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Button
              title="Review"
              onPress={() => navigation.navigate('ReviewScreen')}
              type="outline"
            />
          ),
        }}
      />
      <Stack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{
          headerTitle: 'Review',
          headerTitleAlign: 'center',
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          headerRight: () => (
            <Button
              title="Settings"
              onPress={() => navigation.navigate('SettingScreen')}
              type="outline"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

class App extends React.Component {
  render() {
    const Tab = createMaterialBottomTabNavigator();

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            headerShown="true"
            barStyle={{
              paddingBottom: 8,
              alignContent: 'center',
            }}
            screenOptions={{headerShown: true}}
          >
            <Tab.Screen
              component={WelcomeScreen}
              name="Welcome"
              options={{
                tabBarLabel: 'Welcome',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Auth"
              component={AuthScreen}
              options={{
                tabBarLabel: 'Auth',
                tabBarIcon: ({color}) => (
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
                tabBarIcon: ({color}) => (
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
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="cards"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="StackScreens"
              component={StackScreens}
              options={{
                tabBarLabel: 'Stack',
                tabBarIcon: ({color}) => (
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
      </Provider>
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
