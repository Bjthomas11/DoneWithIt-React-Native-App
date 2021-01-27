import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import AppButton from "../components/AppButton/AppButton";
import AppText from "../components/AppText/AppText";

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
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />

            <AppText style={{ color: "red" }}>{errors.email}</AppText>

            <AppTextInput
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
            />

            <AppText style={{ color: "red" }}>{errors.password}</AppText>

            <AppButton title="Login" onPress={handleSubmit} />
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
