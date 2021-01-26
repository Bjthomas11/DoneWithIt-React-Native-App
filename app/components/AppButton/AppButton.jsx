import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../config/colors";

const AppButton = ({ title, onPress, color = "primaryColor" }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
