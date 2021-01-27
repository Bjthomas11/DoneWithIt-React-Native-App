import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import AppListItem from "../components/AppListItem/AppListItem";

import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator/ListItemSeperator";
import AppScreen from "../components/AppScreen/AppScreen";
import AppIcon from "../components/AppIcon/AppIcon";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primaryColor,
    },
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondaryColor,
    },
  },
];

const MyAccountScreen = () => {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <AppListItem
          image={require("../assets/brian.jpg")}
          title="Brian Thomas"
          subTitle="Brianthomas571@gmail.com"
          backgroundColor={colors.white}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              backgroundColor={colors.white}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <AppListItem
        title="Logout"
        IconComponent={
          <AppIcon name="logout" backgroundColor={colors.logout} />
        }
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});

export default MyAccountScreen;
