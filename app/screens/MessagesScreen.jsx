import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppListItem from "../components/AppListItem/AppListItem";
import AppScreen from "../components/AppScreen/AppScreen";
import ListItemDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator/ListItemSeperator";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    // Delete the message from messages
    const newMessages = messages.filter((msg) => msg.id !== message.id);

    setMessages(newMessages);
    // TODO Call the server to delete from backend
  };

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
            onPress={() => console.log("", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "title 2",
              description: "desc 2",
              image: require("../assets/brian.jpg"),
            },
          ]);
        }}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
