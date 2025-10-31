import { useContext } from "react";
import { Button } from "@mui/material";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("theme is ::", theme);

  return (
    <Button
      variant="contained"
      onClick={toggleTheme}
      sx={{
        backgroundColor: theme === "light" ? "#1976d2" : "#9c27b0",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeToggle;
