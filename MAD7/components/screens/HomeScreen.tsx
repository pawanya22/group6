import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';

const { height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#000000', '#020A45']} style={styles.linearGradient}>
      <SafeAreaView style={styles.safeView}>
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to WelcomeScreen');
              navigation.navigate('WelcomeScreen');
            }}
            style={{
              padding: Spacing / 6,
            }}
          >
            <Text
              style={{
                fontFamily: Font['semiBold'],
                color: Colors.text,
                textAlign: 'center',
                fontSize: FontSize.large,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to UserProfile');
              navigation.navigate('UserProfile');
            }}
            style={{
              padding: Spacing / 6,
            }}
          >
            <Text
              style={{
                fontFamily: Font['semiBold'],
                color: Colors.text,
                textAlign: 'center',
                fontSize: FontSize.large,
              }}
            >
              ProfileScreen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to EditUserProfile');
              navigation.navigate('EditUserProfile');
            }}
            style={{
              padding: Spacing / 6,
            }}
          >
            <Text
              style={{
                fontFamily: Font['semiBold'],
                color: Colors.text,
                textAlign: 'center',
                fontSize: FontSize.large,
              }}
            >
              EditProfileScreen
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
});

export default HomeScreen;
