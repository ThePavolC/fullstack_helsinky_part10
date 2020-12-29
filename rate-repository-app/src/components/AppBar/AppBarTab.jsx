import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.appBarText,
    padding: 14,
  },
});

const AppBarTab = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.text} fontWeight="bold" fontSize="subheading">
        {text}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
