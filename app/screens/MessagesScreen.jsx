import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppListItem from "../components/AppListItem/AppListItem";
import AppScreen from "../components/AppScreen/AppScreen";
import ListItemSeperator from "../components/ListItemSeperator/ListItemSeperator";

const messages = [
  {
    id: 1,
    title: "title",
    description: "desc",
    image: require("../assets/brian.jpg"),
  },
  {
    id: 2,
    title: "title 2",
    description: "desc 2",
    image: require("../assets/brian.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
