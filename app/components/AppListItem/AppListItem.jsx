import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText/AppText";

const AppListItem = ({
  title,
  subTitle,
  image,
  onPress,
  IconComponent,
  renderRightActions,
}) => {
  const [showChevrons, setShowChevrons] = useState(true);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}

          <View style={styles.textContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.mediumGrey}
              style={styles.icon}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    paddingBottom: 3,
    color: colors.darkGrey,
    fontWeight: "500",
    justifyContent: "center",
  },
  subTitle: {
    color: colors.mediumGrey,
    fontWeight: "400",
  },
});

export default AppListItem;
