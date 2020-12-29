import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: theme.colors.inputBorder,
    borderWidth: 2,
    borderRadius: 6,
    paddingLeft: 20,
    marginHorizontal: 20,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style];

  if (error) {
    textInputStyle.push({ borderColor: theme.colors.inputError });
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
