import { useFormikContext } from "formik";
import React from "react";

import AppImageInputList from "../../AppImageListInput/AppImageInputList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const AppFormImagePicker = ({ name }) => {
  const { touched, errors, values, setFieldValue } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageURI) => imageURI !== uri)
    );
  };
  return (
    <>
      <AppImageInputList
        imageURIs={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
