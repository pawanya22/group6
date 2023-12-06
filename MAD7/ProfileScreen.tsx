// import React, { useContext } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";

// // import FormButton from "../components/FormButton";
// // import { AuthContext } from "../navigation/AuthProvider";

// // import firestore from "@react-native-firebase/firestore";

// const ProfileScreen: React.FC = () => {
//   //const { user, logout } = useContext(AuthContext);

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={{ 
//             justifyContent:"center",
//             alignItems:"center"
//         }}
//         showsVerticalScrollIndicator={false}
//       >
//         <Image
//           style={styles.userImg}
//           source={require("D:\\React Native\\Profile\\profile\\Image.jpg")}
//         />
//         <Text style={styles.userName}>Dream World</Text>
//         <Text style={styles.aboutUser}>The Nmae of The Place is ...........</Text>

//         <View style={styles.userBtnWrapper}>
//           <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
//             <Text style={styles.userBtnText}>Message</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
//             <Text style={styles.userBtnText}>Follow</Text>
//           </TouchableOpacity>
//         </View>

//         <View style = {styles.userInforWrapper} >     
//             <View style ={styles.userInforMItem}>
//                 <text style = {styles.userInfoTitle}>22</text>
//                 <text style = {styles.userInforSubTitle}>Posts</text>
//             </View>
//             <View style ={styles.userInforMItem}>
//                 <text style = {styles.userInfoTitle}>22</text>
//                 <text style = {styles.userInforSubTitle}>Followers</text>
//             </View>
//             <View style ={styles.userInforMItem}>
//                 <text style = {styles.userInfoTitle}>22</text>
//                 <text style = {styles.userInforSubTitle}>Following</text>
//             </View>


//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "afff",
//     padding: 20,
//   },

//   userImg: {
//     height: 150,
//     width: 150,
//     borderRadius: 75,
//   },

//   userName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 10,
//     marginBottom: 10,
//   },

//   aboutUser: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: "#666",
//     textAlign: "center",
//     marginBottom: 10,
//   },

//   userBtnWrapper: {
//     flexDirection: "row",
//     justifyContent: "center",
//     width: "100%",
//     marginBottom: 10,
//   },

//   userBtn: {
//     borderColor: "#2e64e5",
//     borderWidth: 2,
//     borderRadius: 3,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginHorizontal: 5, 
//   },

//   userBtnText: {
//     color: "#2e64e5",
//   },

//   userInforWrapper: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//     marginVertical: 20,
//   },

//   userInforMItem: {
//     justifyContent: "center",
//   },

//   userInfoTitle: {
//     fontSize: 12,
//     color: "#666",
//     textAlign: "center",
//   },

//   userInforSubTitle:{
//     fontSize:12,
//     color:'#666',
//     textAlign:"center",
//   },
// });


 