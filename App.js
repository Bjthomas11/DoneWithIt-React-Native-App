import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
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

const App = () => {
  return (
    <AppScreen>
      <AppTextInput icon="email" placeholder="Email" />
    </AppScreen>
  );
};

export default App;
