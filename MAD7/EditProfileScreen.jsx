import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Alert
} from "react-native";

const EditedProfileScreen = () =>{
    return(
        <View style = {styles.container}>
            <text></text>
            <Button 
                title = 'Click Here '
                onPress={() => Alert("Button Clicked")} />
        </View>
    );
};

export default EditedProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
});