import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
import CategoryPickerItem from "../components/CategoryPickerItem/CategoryPickerItem";
import AppForm from "../components/Forms/AppForm/AppForm";
import AppFormField from "../components/Forms/AppFormField/AppFormField";
import AppFormPicker from "../components/Forms/AppFormPicker/AppFormPicker";
import AppSubmitButton from "../components/Forms/AppSubmitButton/AppSubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category")
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Electronics", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Electronics", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Electronics", value: 3, backgroundColor: "blue", icon: "lock" }
];

const ListingEditScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={25} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />

        <AppFormField
          maxLength={25}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />

        <AppSubmitButton title="Post It!" />
      </AppForm>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
export default ListingEditScreen;
