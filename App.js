import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import AppScreen from "./app/components/AppScreen/AppScreen";

import { Button, Image } from "react-native";
import AppImageInput from "./app/components/AppImageInput/AppImageInput";

const App = () => {
  const [imageURI, setImageURI] = useState();
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageURI(result.uri);
      }
    } catch (error) {
      console.log(`Error loading image: ${error}`);
    }
  };

  return (
    <AppScreen>
      <AppImageInput
        imageURI={imageURI}
        onChangeImage={(uri) => setImageURI(uri)}
      />
    </AppScreen>
  );
};

export default App;
