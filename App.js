import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText/AppText";
import ButtonComponent from "./app/components/Button/Button";

const App = () => {
  return (
    <View style={styles.container}>
      <ViewImageScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
