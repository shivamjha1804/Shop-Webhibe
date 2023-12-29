//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Home from '../Screens/Home';
import ButtomNavigator from './ButtomNavigator';


const Stack = createStackNavigator();

const AppStack = () => {
  // const { login_status } = useSelector(state => state.User)
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen 
        name="ButtomNavigator" 
        component={ButtomNavigator} 
      />
    </Stack.Navigator>
  );
};

export default AppStack;
