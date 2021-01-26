import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import colors from "../../config/colors";

const AppListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    paddingBottom: 3,
    color: colors.darkGrey,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.mediumGrey,
    fontWeight: "400",
  },
});

export default AppListItem;
