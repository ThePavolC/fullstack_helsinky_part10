import { Formik } from "formik";
import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";

import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    button: {
      padding: 20,
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: theme.colors.primary,
      borderRadius: 6,
      color: "white",
    },
  });

  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
