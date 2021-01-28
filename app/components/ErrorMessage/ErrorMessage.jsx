import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";

import AppText from "../AppText/AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) {
    return null;
  }
  return <AppText style={styles.text}>{error}</AppText>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.primaryColor,
  },
});

export default ErrorMessage;
