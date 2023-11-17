import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import AppTextInput from "../AppTextInput";
import { useNavigation } from '@react-navigation/native';
//import { NativeStackScreenProps } from '@react-navigation/native-stack';
//import { RootStackParamList } from '../../types';

const { height } = Dimensions.get('window');


const WelcomeScreen = () => {
  const navigation= useNavigation()
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.imageBox}>
        <ImageBackground
          style={{
            height: height / 2,
          }}
          resizeMode="contain"
          source={require('../../assets/Heart_corazón.svg.png')}
        />
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 2,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              color: Colors.primary,
              fontFamily: Font['bold'],
              textAlign: 'center',
            }}
          >
            Stay in the {'\n'}
            Movie Loop
          </Text>

          <Text
            style={{
              fontSize: FontSize.small,
              color: Colors.text,
              fontFamily: Font['regular'],
              textAlign: 'center',
              marginTop: Spacing * 2,
            }}
          >
            Dive into a world of{'\n'}
            personalized movie recommendations {'\n'}
            that match your unique taste.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: '48%',
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: Font['bold'],
                color: Colors.onPrimary,
                fontSize: FontSize.large,
                textAlign: 'center',
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={{
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: '48%',
              borderRadius: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: Font['bold'],
                color: Colors.text,
                fontSize: FontSize.large,
                textAlign: 'center',
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#F9F6EE',
  },
  imageBox: {
    padding: 8,
    paddingTop: 20,
    paddingBottom: 5,
    alignContent: 'center',
  },
});

export default WelcomeScreen;
