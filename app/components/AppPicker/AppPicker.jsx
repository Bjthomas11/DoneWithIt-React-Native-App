import React, { useState, Fragment } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import AppText from "../AppText/AppText";
import AppScreen from "../AppScreen/AppScreen";
import AppPickerItem from "../AppPickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.mediumGrey}
              style={styles.icon}
            />
          )}

          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.mediumGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modal} animationType="slide">
        <AppScreen>
          <Button title="close" onPress={() => setModal(false)} />
        </AppScreen>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <AppPickerItem
              label={item.label}
              onPress={() => {
                setModal(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
