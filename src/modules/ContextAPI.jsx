import { Box } from "@mui/material";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

const ContextAPI = () => {
  return (
    <ThemeProvider>
      <h1>ContextAPI Module</h1>
      <ThemeToggle />
    </ThemeProvider>
  );
};
export default ContextAPI;
