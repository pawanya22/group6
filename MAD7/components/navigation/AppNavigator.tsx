import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import Register from '../screens/Register'

import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'




function AppNavigator() {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{headerShown:false}}
            initialRouteName="WelcomeScreen"
            >
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;