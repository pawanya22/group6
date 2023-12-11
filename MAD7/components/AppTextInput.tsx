import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={'#191970'}
      style={[
        {
          fontFamily: Font["regular"],
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: '#E5E4E2',
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        focused && {
          borderWidth: 4,
          borderColor: '#191970',
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: 'white',
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
          color:"#191970"
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
