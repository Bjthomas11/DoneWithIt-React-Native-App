import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
import AppFormField from "../components/AppFormField/AppFormField";
import AppSubmitButton from "../components/AppSubmitButton/AppSubmitButton";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({}) => (
          <>
            <AppFormField
              name="email"
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />

            <AppFormField
              name="password"
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />

            <AppSubmitButton title="Login" />
          </>
        )}
      </Formik>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;
