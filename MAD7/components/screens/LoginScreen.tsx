import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import AppTextInput from '../../components/AppTextInput';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword , sendPasswordResetEmail} from '@firebase/auth';
import {auth,}  from '../../config/firebase';
import { FirebaseError } from 'firebase/app';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //const auth = getAuth();

  const __doSignIn = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Error', 'Please enter both email and password.');
        return;
      }

      let response = await signInWithEmailAndPassword(auth, email, password);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Authenticated successfully');
        console.log('User logged in successfully with name:', email);
        navigation.navigate('HomeScreen');
      }
    } catch (e: any) {
      console.error(e.message);
      Alert.alert('Error', e.message);
    }
  };
  

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Password Reset Email Sent',
        'Please check your email for instructions on resetting your password.'
      );
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'User not found. Please check the email address.');
      } else {
        console.error('Error sending password reset email:', error.message);
        Alert.alert(
          'Error',
          'An error occurred while sending the password reset email.'
        );
      }
    }
  };


  return (
    <LinearGradient colors={['#000000','#020A45']} style={styles.linearGradient}>
      <SafeAreaView style={styles.safeView}>
        <View style={{ padding: Spacing * 2 }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                fontFamily: Font['bold'],
                marginVertical: Spacing * 3,
              }}>
              Login here
            </Text>
            <Text
              style={{
                fontFamily: Font['semiBold'],
                fontSize: FontSize.medium,
                maxWidth: '80%',
                textAlign: 'center',
                color: '#F9F6EE',
              }}>
              Welcome back{'\n'}
              you've been missed!
            </Text>
          </View>
          <View style={{ marginVertical: Spacing * 3, marginBottom: Spacing / 2 }}>
            <AppTextInput
              placeholder="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <AppTextInput
              placeholder="Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
            />
          </View>

          <View>
            <TouchableOpacity
            onPress={handleForgotPassword}>
            <Text
              style={{
                fontFamily: Font['semiBold'],
                fontSize: FontSize.small,
                color: '#F9F6EE',
                alignSelf: 'flex-end',
              }}>
              Forgot your password ?
            </Text>
            </TouchableOpacity>
           
          </View>
          <View style={{ marginTop: Spacing * 2.5 }}>
            <TouchableOpacity
              onPress={__doSignIn}
              style={{
                padding: Spacing * 2,
                backgroundColor: Colors.button,
                marginVertical: Spacing * 3,
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                shadowOffset: { width: 0, height: Spacing },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              }}>
              <Text
                style={{
                  fontFamily: Font['bold'],
                  color: 'white',
                  textAlign: 'center',
                  fontSize: FontSize.large,
                }}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
              console.log('pressed');
            }}
            style={{ padding: Spacing / 2 }}>
            <Text
              style={{
                fontFamily: Font['bold'],
                color: Colors.text,
                textAlign: 'center',
                fontSize: FontSize.medium,
              }}>
              Create new account
            </Text>
          </TouchableOpacity>

          <View style={{ marginVertical: Spacing * 4 }}>
            <Text
              style={{
                fontFamily: Font['semiBold'],
                color: Colors.primary,
                textAlign: 'center',
                fontSize: FontSize.small,
              }}>
              Or continue with
            </Text>

            <View
              style={{
                marginTop: Spacing,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}>
                <Image
                  source={require('../../assets/icons8-google-50.png')}
                  style={{
                    width: Spacing * 2,
                    height: Spacing * 2,
                    tintColor: '#191970',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}>
                <Image
                  source={require('../../assets/icons8-facebook-50.png')}
                  style={{
                    width: Spacing * 2,
                    height: Spacing * 2,
                    tintColor: '#191970',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}>
                <Image
                  source={require('../../assets/icons8-apple-50.png')}
                  style={{
                    width: Spacing * 2,
                    height: Spacing * 2,
                    tintColor:'#191970',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
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
    borderRadius: 0
  },
});

export default LoginScreen;
