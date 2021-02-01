import React from "react";
import { Button, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppScreen from "./app/components/AppScreen/AppScreen";

const Tweets = ({ navigation }) => (
  <AppScreen>
    <Text>Tweets</Text>
    <Link />
  </AppScreen>
);

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const TweetDetails = () => (
  <AppScreen>
    <Text>Tweet Details</Text>
  </AppScreen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
