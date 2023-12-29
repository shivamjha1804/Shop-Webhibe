//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import SignIn from '../Screens/Auth/SignIn';
import Slider from '../Screens/Auth/Slider/Slider';
import SignUp from '../Screens/Auth/SignUp/SignUp';
import ForgetPassword from '../Screens/Auth/ForgetPassword/ForgetPassword';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Onbroding'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name='Slider' 
                component={Slider}
            />
            
            <Stack.Screen name="SignIn" component={SignIn} />

            <Stack.Screen 
                name='SignUp' 
                component={SignUp}
            />

            <Stack.Screen 
                name='ForgetPassword' 
                component={ForgetPassword}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
