import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

const AppScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default AppScreen;
