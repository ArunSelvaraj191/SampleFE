import { Box, Button } from "@mui/material";
import TextInput from "../components/TextInput";
import { useFormValidation } from "../hooks/useFormValidation";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validate = (values) => {
    let errors = {};
    if ("name" in values && !values?.name?.trim()) {
      errors.name = "Name is Required";
    }
    // else {
    //   errors.name = "";
    // }
    if ("email" in values) {
      if (!values?.email) errors.email = "Email is Required";
      //   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
      ) {
        errors.email = "Invalid Email!";
      }
      //    else {
      //     errors.email = "";
      //   }
    }
    if ("password" in values) {
      if (!values.password) errors.password = "Password is required";
      else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 character";
      }
      //   else {
      //     errors.password = "";
      //   }
    }
    console.log("error from parent :", errors);
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    initialValues,
    validate
  );

  const onSubmit = async () => {
    try {
      console.log("Form Values :", values);
      await API.post("/register", values);
      navigate("/");
    } catch (error) {
      console.error(
        "API Error :::",
        error,
        error.response?.data?.message || "Register failed"
      );
    }
    // alert("Form Successfully submitted");
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register Page</h1>
      <TextInput
        label="Name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        sx={{ marginBottom: 2 }}
      />
      <TextInput
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        sx={{ marginBottom: 2 }}
      />
      <TextInput
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Box>
        <Button sx={{ mt: 2 }} onClick={() => navigate("/")}>
          Already have an account? Login
        </Button>
      </Box>
    </Box>
  );
};
export default Signup;
