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
import AppTextInput from "../../components/AppTextInput";
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation= useNavigation()
  return (
    <SafeAreaView style={styles.safeView}>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Login here
          </Text>
          <Text
            style={{
              fontFamily: Font["semiBold"],
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center",
              color:"black"
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
            marginBottom: Spacing /2,
          }}
        >
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" secureTextEntry={true} />
        </View>

        <View>
          <Text
            style={{
              fontFamily: Font["semiBold"],
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
          
            }}
          >
            Forgot your password ?
          </Text>
        </View>
        <View style={{
          marginTop:Spacing*2.5,
        }}>
          <TouchableOpacity
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
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
                fontFamily: Font["bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
                
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => 
            {navigation.navigate("Register");
            console.log("pressed");
          }}

          style={{
            padding: Spacing / 2,
          }}
        >
          <Text
            style={{
              fontFamily: Font["bold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.medium,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 4,
          }}
        >
          <Text
            style={{
              fontFamily: Font["semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
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
                    tintColor: Colors.text, 
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
                    tintColor: Colors.text, 
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
                    tintColor: Colors.text, 
                  }}
                />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
    
}

const styles = StyleSheet.create({
  safeView:{
    flex:1,
    backgroundColor:"white"
  }
})

export default LoginScreen;