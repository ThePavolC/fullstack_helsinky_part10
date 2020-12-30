import { Formik } from "formik";
import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import Text from "./Text";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be at least 4 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignInForm = ({ onSubmit, isValid }) => {
  const styles = StyleSheet.create({
    button: {
      padding: 20,
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: isValid
        ? theme.colors.buttonEnabled
        : theme.colors.buttonDisabled,
      borderRadius: 6,
      color: "white",
    },
    form: {
      marginTop: 14,
    },
  });

  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableWithoutFeedback onPress={onSubmit} disabled={isValid}>
        <Text style={styles.button}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isValid }) => (
        <SignInForm onSubmit={handleSubmit} isValid={isValid} />
      )}
    </Formik>
  );
};

export default SignIn;
