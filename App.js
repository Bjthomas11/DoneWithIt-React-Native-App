import React from "react";
import { Button, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppScreen from "./app/components/AppScreen/AppScreen";

const Tweets = ({ navigation }) => (
  <AppScreen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </AppScreen>
);

const TweetDetails = ({ route }) => (
  <AppScreen>
    <Text>Tweet Details {route.params.id}</Text>
  </AppScreen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "#fff",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      options={({ route }) => ({ title: route.params.id })}
      name="TweetDetails"
      component={TweetDetails}
    />
  </Stack.Navigator>
);

const Account = () => (
  <AppScreen>
    <Text>Account</Text>
  </AppScreen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "#fff",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "#333",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweets}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
