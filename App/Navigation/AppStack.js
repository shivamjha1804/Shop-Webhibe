//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Home from '../Screens/Home';
import ButtomNavigator from './ButtomNavigator';
import Profile from '../Screens/Home/Profile/Profile';
import Cart from '../Screens/Home/Cart/Cart';
import Buy from '../Screens/Home/Buy/Buy';
import Payment from '../Screens/Home/Payment/Payment';


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
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        />

      <Stack.Screen 
        name="Cart" 
        component={Cart} 
        />

      <Stack.Screen 
        name="Buy" 
        component={Buy} 
        />

      <Stack.Screen 
        name="Payment" 
        component={Payment} 
        />
    </Stack.Navigator>
  );
};

export default AppStack;
