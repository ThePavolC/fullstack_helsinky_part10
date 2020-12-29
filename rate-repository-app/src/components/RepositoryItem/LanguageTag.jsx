import React from "react";
import { StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "../Text";

const LanguageTag = ({ language }) => {
  const languageTagStyles = StyleSheet.create({
    languageTag: {
      backgroundColor: theme.colors.primary,
      padding: 6,
      borderRadius: 8,
      color: "white",
      marginTop: 8,
    },
  });
  return <Text style={languageTagStyles.languageTag}>{language}</Text>;
};

export default LanguageTag;
