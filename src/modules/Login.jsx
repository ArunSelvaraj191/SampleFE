import { Box, Button, Typography } from "@mui/material";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";
import { useFormValidation } from "../hooks/useFormValidation";
import API from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, handleChange, handleSubmit } =
    useFormValidation(initialValues);

  const onSubmit = async () => {
    try {
      console.log("Login values :::", values);
      const { data } = await API.post("/login", values);
      console.log("Login data from Database :::", data);
      localStorage.setItem("token", data.token);
      alert(data.message);
      navigate("/profile");
    } catch (error) {
      console.error(
        "Login Error",
        error.response?.data?.message || "Login failed"
      );
      alert(error.response?.data?.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h2" color="primary" sx={{ mb: 2 }}>
        Login Page
      </Typography>
      <TextInput
        label={"Email"}
        name={"email"}
        type={"email"}
        required={true}
        sx={{ mb: 2 }}
        onChange={handleChange}
      />
      <TextInput
        label={"Password"}
        name={"password"}
        type={"password"}
        required={true}
        onChange={handleChange}
      />
      <Button type="submit" sx={{ mt: 2 }} variant="contained">
        Login
      </Button>
      <Box>
        <Button sx={{ mt: 2 }} onClick={() => navigate("/register")}>
          Don't have account? Register
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
