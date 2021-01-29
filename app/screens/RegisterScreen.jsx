import React from "react";
import { StyleSheet } from "react-native";
import * as yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
import AppForm from "../components/Forms/AppForm/AppForm";
import AppFormField from "../components/Forms/AppFormField/AppFormField";
import AppSubmitButton from "../components/Forms/AppSubmitButton/AppSubmitButton";

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          placeholder="Name"
          icon="account"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="name"
        />
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

        <AppSubmitButton title="Register" />
      </AppForm>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
