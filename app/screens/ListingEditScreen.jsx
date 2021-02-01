import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
import CategoryPickerItem from "../components/CategoryPickerItem/CategoryPickerItem";
import AppForm from "../components/Forms/AppForm/AppForm";
import AppFormField from "../components/Forms/AppFormField/AppFormField";
import AppFormImagePicker from "../components/Forms/AppFormImagePicker/AppFormImagePicker";
import AppFormPicker from "../components/Forms/AppFormPicker/AppFormPicker";
import AppSubmitButton from "../components/Forms/AppSubmitButton/AppSubmitButton";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select one image!"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Electronics", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Test2", value: 4, backgroundColor: "red", icon: "apps" },
  { label: "Test2.1", value: 5, backgroundColor: "green", icon: "email" },
  { label: "Test2.2", value: 6, backgroundColor: "blue", icon: "lock" },
  { label: "Test3", value: 7, backgroundColor: "red", icon: "apps" },
  { label: "Test3.1", value: 8, backgroundColor: "green", icon: "email" },
  { label: "Test3.2", value: 9, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
  const location = useLocation();
  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
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
    padding: 10,
  },
});
export default ListingEditScreen;
