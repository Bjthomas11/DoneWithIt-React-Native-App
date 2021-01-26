import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Button,
  Image,
  Text
} from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>Sell what you don't need!</Text>
      </View>

      <View style={styles.loginBtn}></View>
      <View style={styles.registertBtn}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },

  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primaryColor
  },
  registertBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondaryColor
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  text: {
    marginTop: 10
  }
});

export default WelcomeScreen;
