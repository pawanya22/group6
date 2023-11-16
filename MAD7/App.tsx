import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from './components/screens/WelcomeScreen'
import LoginScreen from './components/screens/LoginScreen'
import Register from './components/screens/Register'
import AppNavigator from './components/navigation/AppNavigator'


export default function App() {
  return (
     
      <AppNavigator></AppNavigator>
  )
}

const styles = StyleSheet.create({})