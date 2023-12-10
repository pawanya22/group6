import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/Register';
import {useAuth} from '../../hooks/useAuth'
import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../screens/UserProfile';
import EditProfileScreen from '../screens/EditUserProfile';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { user } = useAuth();
  if (user){
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="HomeScreen"
        >

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="EditUserProfile" component={EditProfileScreen} />




        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else{
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="WelcomeScreen"
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />



        </Stack.Navigator>
      </NavigationContainer>
    );

  }

  
}

export default AppNavigator;
