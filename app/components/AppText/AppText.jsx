import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: "Avenir",
    color: colors.darkGrey,
  },
});

export default AppText;
