import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput/AppTextInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
  const { setFailedTouch, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlurEvent={() => setFailedTouch(name)}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
