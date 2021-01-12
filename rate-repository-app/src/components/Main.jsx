import React from "react";
import { StyleSheet, View } from "react-native";
import { Redirect, Route, Switch } from "react-router-native";
import RepositoryList from "../components/RepositoryList";
import RepositoryDetail from "./RepositoryDetail";
import AppBar from "./AppBar";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/repository/:repositoryId" exact>
          <RepositoryDetail />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
