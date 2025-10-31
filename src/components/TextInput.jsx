import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  sx,
  required = false,
}) => {
  return (
    <TextField
      required={required}
      fullWidth
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={!!error} // error = "required" => !error => false => !!error => true
      helperText={error || ""}
      variant="outlined"
      sx={sx}
    />
  );
};

export default TextInput;
