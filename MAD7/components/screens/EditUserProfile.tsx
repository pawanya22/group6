import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert ,Button} from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker, { Image as ImageType } from 'react-native-image-crop-picker';
//import {db} from '../../config/firebase';
import {auth} from '../../config/firebase';


interface UserData {
  fname: string;
  lname: string;
  about: string;
  phone: string;
  country: string;
  city: string;
}

const EditProfileScreen: React.FC = () => {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

    const pickImage = async () => {
        try {
          const image = await ImagePicker?.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true,
            compressImageQuality: 0.7,
            freeStyleCropEnabled: true,
          });
    
          console.log(image);
          setSelectedImage({ uri: image.path } as unknown as ImageType);
        } catch (error:any) {
          console.log(error);
        }
      };
    

  const [userData, setUserData] = useState<UserData>({
    fname: '',
    lname: '',
    about: '',
    phone: '',
    country: '',
    city: '',
  });

  const handleUpdate = async () => {
    try {
      // Assuming you have a 'profiles' collection in Firestore
      //const profilesRef = db.collection('profiles');

      // Add the new user data to Firestore
      //await profilesRef.add(userData);

      // Navigate and show success message
      navigation.navigate('UserProfile');
      Alert.alert('Profile Updated!', 'Your profile has been updated successfully.');
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'An error occurred while updating the profile.');
    }
  };


  return (
    <LinearGradient colors={['#000000', '#020A45']} style={styles.linearGradient}>
        <View style={styles.container}>
            <View style={styles.profileContainer}>
            {selectedImage && (
        <Image source={selectedImage} style={styles.profileImage} />
      )}
      <Button title="Pick Image" onPress={pickImage} />
    
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.action}>
                <Image source={require('../../assets/icons8-user-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    placeholderTextColor="#666666"
                    value={userData.fname}
                    onChangeText={(text) => setUserData({ ...userData, fname: text })}
                />
                </View>
                <View style={styles.action}>
                <Image source={require('../../assets/icons8-user-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    placeholderTextColor="#666666"
                    value={userData.lname}
                    onChangeText={(text) => setUserData({ ...userData, lname: text })}
                />
                </View>
                <View style={styles.action}>
                <Image source={require('../../assets/icons8-phone-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Phone"
                    placeholderTextColor="#666666"
                    keyboardType="number-pad"
                    value={userData.phone}
                    onChangeText={(text) => setUserData({ ...userData, phone: text })}
                />
                </View>
                <View style={styles.action}>
                <Image source={require('../../assets/icons8-world-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Country"
                    placeholderTextColor="#666666"
                    value={userData.country}
                    onChangeText={(text) => setUserData({ ...userData, country: text })}
                />
                </View>
                <View style={styles.action}>
                <Image source={require('../../assets/icons8-location-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    placeholder="City"
                    placeholderTextColor="#666666"
                    value={userData.city}
                    onChangeText={(text) => setUserData({ ...userData, city: text })}
                />
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                    onPress={(handleUpdate)}
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginHorizontal: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 2,
    justifyContent:'center',
    alignItems:'center'
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'white',
    fontFamily:Font['regular'],
    fontSize:FontSize['medium'],
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
    marginTop: 10,
    marginBottom:20},
  button: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginStart: 10,
  },
  buttonText: {
    color: Colors.onPrimary,
    fontFamily: Font['bold'],
    fontSize: FontSize['medium'],
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
});

export default EditProfileScreen;
