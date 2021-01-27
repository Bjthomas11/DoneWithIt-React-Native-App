import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen/AppScreen";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import AppButton from "../components/AppButton/AppButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AppScreen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppTextInput
        placeholder="Email"
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />

      <AppTextInput
        placeholder="Password"
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <AppButton title="Login" onPress={() => console.log(email, password)} />
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
