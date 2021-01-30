import React from "react";
import { View, StyleSheet } from "react-native";
import AppIcon from "../AppIcon/AppIcon";
import AppText from "../AppText/AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.text}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%"
  },
  text: {
    marginTop: 5,
    textAlign: "center"
  }
});

export default CategoryPickerItem;
