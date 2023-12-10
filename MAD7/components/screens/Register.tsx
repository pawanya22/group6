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
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import AppTextInput from "../../components/AppTextInput";
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth}  from '../../config/firebase';
import LinearGradient from 'react-native-linear-gradient';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const doSignUp = async () => {
    try {
      if (!email || !password || !name) {
        Alert.alert('Error', 'All fields are required.');
        return;
      }

      // Add your custom validation logic if needed

      let response = await createUserWithEmailAndPassword(auth,email, password);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Account created successfully');
        console.log('User signed up successfully with name:', name);
        // Optionally, you can navigate to another screen after successful registration
        navigation.navigate('LoginScreen');
      }
    } catch (error:any) {
      console.error(error.message);
      Alert.alert('Error', error.message);
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
                color: 'white',
                fontFamily: Font['bold'],
                marginVertical: Spacing * 3,
              }}>
              Create account
            </Text>
            <Text
              style={{
                fontFamily: Font['semiBold'],
                fontSize: FontSize.medium,
                maxWidth: '80%',
                textAlign: 'center',
                color: '#F9F6EE',
              }}>
              Your movie profile, your rules. {'\n'}
              Let's make movie night extraordinary!
            </Text>
          </View>
          <View style={{ marginVertical: Spacing * 3 }}>
            <AppTextInput
              placeholder="Full Name"
              value={name}
              onChangeText={(value) => setName(value)}
            />
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

          <TouchableOpacity
            onPress={doSignUp}
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
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            style={{ padding: Spacing / 6 }}>
            <Text
              style={{
                fontFamily: Font['semiBold'],
                color: Colors.text,
                textAlign: 'center',
                fontSize: FontSize.small,
              }}>
              Already have an account
            </Text>
          </TouchableOpacity>

          <View style={{ marginVertical: Spacing * 4 }}>
            <Text
              style={{
                fontFamily: Font['semiBold'],
                color: '#F9F6EE',
                textAlign: 'center',
                fontSize: FontSize.small,
              }}>
              Or continue with
            </Text>

            <View
              style={{
                marginTop: Spacing,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity style={{  
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
              <TouchableOpacity style={{  
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
              <TouchableOpacity style={{  
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
                      tintColor: '#191970', 
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

export default Register;
