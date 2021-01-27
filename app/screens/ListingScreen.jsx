import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AppCard from "../components/AppCard/AppCard";
import AppScreen from "../components/AppScreen/AppScreen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale!",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for sale!",
    price: "1,000",
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});

export default ListingScreen;
