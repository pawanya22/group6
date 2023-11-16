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
  
const Register = () => {
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
            Create account
          </Text>
          <Text
            style={{
              fontFamily: Font["regular"],
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
              color:"black",
            }}
          >
            Your movie profile, your rules. {'\n'}
            Let's make movie night extraordinary!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" secureTextEntry={true}/>
          <AppTextInput placeholder="Confirm Password" secureTextEntry={true}/>
        </View>

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
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Navigating to LoginScreen");
            navigation.navigate("LoginScreen");
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
            Already have an account
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
  )
}

const styles = StyleSheet.create({
  safeView:{
    flex:1,
    backgroundColor:'#F9F6EE',
},
})

export default Register;