import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.iconContainer}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </SafeAreaView>

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
    backgroundColor: "#333",
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
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30
  },
  deleteIcon: {
    backgroundColor: "#4ECDC4",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30
  }
});

export default ViewImageScreen;
