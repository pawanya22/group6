import { Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, } from 'react-native'
  import React from 'react'
  import Spacing from "../../constants/Spacing";
  import FontSize from "../../constants/FontSize";
  import Colors from "../../constants/Colors";
  import Font from "../../constants/Font";
  import AppTextInput from "../AppTextInput";
  import { useNavigation } from '@react-navigation/native';
  const { height } = Dimensions.get("window");
  import {useState,useEffect} from 'react';

const HomeScreen = () => {
    const navigation= useNavigation();
  return (
    <View>
      <TouchableOpacity
          onPress={() => {
            console.log("Navigating to WelcomeScreen");
            navigation.navigate("WelcomeScreen");
          }}
          style={{
            padding: Spacing/6,
          }}
        >
          <Text
            style={{
              fontFamily: Font["semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen