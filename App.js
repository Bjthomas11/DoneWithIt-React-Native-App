import React from "react";
import { View } from "react-native";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
        }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
        }}
      />

      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "pink",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
};

export default App;
