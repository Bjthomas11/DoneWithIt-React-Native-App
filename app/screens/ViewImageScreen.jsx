import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color="black"
          style={styles.closeIcon}
        />
        <MaterialCommunityIcons
          name="close"
          size={24}
          color="black"
          style={styles.deleteIcon}
        />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 80
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 80
  }
});

export default ViewImageScreen;
