import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import AppText from "../components/AppText/AppText";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.container}>
        <AppText style={styles.title}>Red Jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: colors.secondaryColor,
    fontWeight: "700",
    fontSize: 20,
  },
});

export default ListingDetailsScreen;
