import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Actor from './src/screen/Actor';
import { ScrollView } from 'native-base';



function App(): JSX.Element {
  return (
  <Actor/>
  );
}

export default App;
