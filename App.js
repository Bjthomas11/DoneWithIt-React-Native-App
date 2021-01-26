import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton/AppButton";
import AppCard from "./app/components/AppCard/AppCard";

const App = () => {
  return (
    <View style={styles.container}>
      <AppCard
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/card/jacket.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 120,
  },
});

export default App;
