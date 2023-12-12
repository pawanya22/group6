// AppNavigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import SearchScreen from '../screens/SearchScreen';
import PersonScreen from '../screens/PersonScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MovieCategoryScreen from '../screens/MovieCategoryScreen';
import FavoritesScreen from '../screens/FavoriteScreen'; // Import your FavoritesScreen
import { Ionicons } from '@expo/vector-icons';
import profileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="Movie" options={{ headerShown: false }} component={MovieScreen} />
      <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
      <Stack.Screen name="Person" options={{ headerShown: false }} component={PersonScreen} />
      <Stack.Screen name="profile" options={{ headerShown: false }} component={profileScreen} />
      <Stack.Screen name="MovieCategory" options={{ headerShown: false }} component={MovieCategoryScreen} />
    </Stack.Navigator>
  );
};

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Favorites') {
              iconName = 'heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopColor: 'transparent',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabBarTabStyle: {
            paddingVertical: 8,
          },
        })}
      >
        <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Tab.Screen name="Favorites" options={{ headerShown: false }} component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
