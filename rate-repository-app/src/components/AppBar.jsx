import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: theme.colors.appBarText,
    padding: 14,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link
        to="/"
        component={AppBarTab}
        text={"Repositories"}
        onPress={() => {}}
      />
      <Link
        to="/signin"
        component={AppBarTab}
        text={"Sign in"}
        onPress={() => {}}
      />
    </View>
  );
};

export default AppBar;
