import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";
import theme from "../../theme";
import { useQuery } from "@apollo/react-hooks";
import { AUTHORIZED_USER } from "../../graphql/queries";
import { useContext } from "react";
import AuthStorageContext from "../../contexts/AuthStorageContext";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const { data, loading } = useQuery(AUTHORIZED_USER);

  if (loading) {
    return <View style={styles.container}></View>;
  }

  const logOutUser = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const isUserLoggedIn = Boolean(data?.authorizedUser?.id);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" component={AppBarTab} text={"Repositories"} />
        {isUserLoggedIn ? (
          <Link
            to="/signout"
            component={AppBarTab}
            text={"Sign out"}
            onPress={() => logOutUser()}
          />
        ) : (
          <Link to="/signin" component={AppBarTab} text={"Sign in"} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
