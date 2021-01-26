import React from "react";
import { Button, View } from "react-native";

import styles from "./styles";

const ButtonComponent = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="LOGIN" color="#fff" />
    </View>
  );
};

export default ButtonComponent;
