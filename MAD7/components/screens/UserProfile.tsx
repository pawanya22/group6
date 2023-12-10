import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar, Title, Caption } from 'react-native-paper';
import Share from 'react-native-share';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import { useNavigation } from '@react-navigation/native';
import {auth,}  from '../../config/firebase';
import { signOut } from 'firebase/auth';


const UserProfile: React.FC = () => {
  const navigation = useNavigation();
    
  const myCustomShare = async () => {
    const shareOptions = {
      message: "Discover your next cinematic adventure with MovieMagnet! 🎬🍿 Don't miss out on the latest blockbusters and hidden gems. Dive into MovieMagnet for an unforgettable movie-watching experience!",
      source: require('../../assets/Heart_corazón.svg.png'),
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
    <LinearGradient colors={['#000000', '#020A45']} style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Avatar.Image
              source={{
                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
              }}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, {
                marginTop: 15,
                marginBottom: 5,
              }]}>John Doe</Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
          </View>
          <View style={styles.userInfoSectionDetails}>
            <View style={styles.row}>
              <Image source={require('../../assets/icons8-location-50.png')} style={styles.userinfoicon} />
              <Text style={styles.userinfo}>Kolkata, India</Text>
            </View>
            <View style={styles.row}>
              <Image source={require('../../assets/icons8-phone-50.png')} style={styles.userinfoicon} />
              <Text style={styles.userinfo}>+91-900000009</Text>
            </View>
            <View style={styles.row}>
              <Image source={require('../../assets/icons8-email-50.png')} style={styles.userinfoicon} />
              <Text style={styles.userinfo}>john_doe@email.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditUserProfile')
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WelcomeScreen')
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.menuItem}
          >
            <Image source={require('../../assets/icons8-heart-50.png')} style={styles.icon} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={(myCustomShare)}
            style={styles.menuItem}
          >
            <Image source={require('../../assets/icons8-share-50.png')} style={styles.icon} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={styles.menuItem}
          >
            <Image source={require('../../assets/icons8-support-50.png')} style={styles.icon} />
            <Text style={styles.menuItemText}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={styles.menuItem}
          >
            <Image source={require('../../assets/icons8-settings-50.png')} style={styles.icon} />
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>
        </View>

        
      </SafeAreaView>
    </LinearGradient>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  userInfoSectionDetails: {
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  userinfo: {
    fontFamily: Font['regular'],
    fontSize: FontSize['small'],
    color: "#F9F6EE",
    marginLeft: 20,
  },
  userinfoicon: {
    width: 20,
    height: 20,
    tintColor: '#F9F6EE',
    marginRight: 1,
  },
  title: {
    fontSize: FontSize['large'],
    fontFamily: Font['semiBold'],
    color: 'white',
    marginBottom: 0,
  },
  caption: {
    fontSize: FontSize['medium'],
    marginTop: -5,
    fontFamily: Font['regular'],
    color: '#F9F6EE',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuItemText: {
    color: 'white',
    marginLeft: 20,
    fontFamily: Font['regular'],
    fontSize: FontSize['medium'],
    lineHeight: 26,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: 'white',
    marginRight: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -15,
    marginBottom:20
  },
  button: {
    borderWidth:1,
    borderColor:'white',
    //backgroundColor: Colors.button,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginStart:10
  },
  buttonText: {
    color: Colors.onPrimary,
    fontFamily: Font['bold'],
    fontSize: FontSize['medium'],
    textAlign: 'center',
  },
});
