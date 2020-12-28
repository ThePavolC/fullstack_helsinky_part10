import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
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
      </ScrollView>
    </View>
  );
};

export default AppBar;
