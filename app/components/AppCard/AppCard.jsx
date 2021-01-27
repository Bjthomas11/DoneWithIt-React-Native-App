import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText/AppText";

const AppCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 8,
    fontWeight: "600",
  },
  subTitle: {
    color: colors.secondaryColor,
    fontWeight: "700",
  },
});

export default AppCard;
