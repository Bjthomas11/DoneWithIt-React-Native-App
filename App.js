import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Switch } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton/AppButton";
import AppCard from "./app/components/AppCard/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import AppScreen from "./app/components/AppScreen/AppScreen";
import AppIcon from "./app/components/AppIcon/AppIcon";
import AppListItem from "./app/components/AppListItem/AppListItem";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";
import AppPicker from "./app/components/AppPicker/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

// const itemsData = [
//   {
//     label: "Furniture",
//     value: 1,
//   },
//   {
//     label: "Clothing",
//     value: 2,
//   },
//   {
//     label: "Cameras",
//     value: 3,
//   },
// ];

const App = () => {
  // const [cat, setCat] = useState(itemsData[0]);
  // const [isNew, setIsNew] = useState(false);
  {
    /* <Switch value={isNew} onValueChange={(value) => setIsNew(value)} /> */
  }

  {
    /* <AppPicker
        selectedItem={cat}
        onSelectItem={(item) => setCat(item)}
        placeholder="test"
        icon="apps"
        items={itemsData}
      />
      <AppTextInput placeholder="test" icon="email" /> */
  }
  return <LoginScreen />;
};

export default App;
