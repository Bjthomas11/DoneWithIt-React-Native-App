import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../../AppPicker/AppPicker";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const AppFormPicker = ({
  items,
  width,
  name,
  placeholder,
  PickerItemComponent,
  numberOfColumns = 1
}) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
