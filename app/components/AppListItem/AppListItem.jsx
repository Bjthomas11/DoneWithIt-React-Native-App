import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import AppIcon from "../AppIcon/AppIcon";

const AppListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
  backgroundColor = "#fff",
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            backgroundColor: backgroundColor,
          }}
        >
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}

          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {},
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
    justifyContent: "center",
  },
  subTitle: {
    color: colors.mediumGrey,
    fontWeight: "400",
  },
});

export default AppListItem;
