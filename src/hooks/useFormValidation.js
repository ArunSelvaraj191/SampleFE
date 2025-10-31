import { useState } from "react";

export const useFormValidation = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  console.log("values :::", values);
  console.log("errors :::", errors);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    // validate field on change
    if (validate) {
      const fieldError = validate({ [name]: value });
      setErrors({ ...errors, ...fieldError });
    }
  };

  // Carring Function
  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      console.log(
        "validationErrors :::",
        validationErrors,
        Object.keys(validationErrors).length === 0
      );
      if (Object.keys(validationErrors).length === 0) {
        callback();
      }
    } else {
      callback();
    }
  };

  return { values, errors, handleChange, handleSubmit };
};
