import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppImageInput from "../AppImageInput/AppImageInput";

const AppImageInputList = ({ imageURIs = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageURIs.map((uri) => (
            <View style={styles.image} key={uri}>
              <AppImageInput
                imageURI={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default AppImageInputList;
