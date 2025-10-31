import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MiniTask = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="outlined" onClick={() => navigate("/counter")}>
        {" "}
        Counter App{" "}
      </Button>
      <Button variant="outlined" onClick={() => navigate("/studentlist")}>
        {" "}
        Student List{" "}
      </Button>
      <Button variant="outlined" onClick={() => navigate("/user-list")}>
        {" "}
        User List{" "}
      </Button>
      <Button variant="outlined" onClick={() => navigate("/context")}>
        {" "}
        Context API{" "}
      </Button>
      <Button variant="outlined" onClick={() => navigate("/signup")}>
        Signup
      </Button>
    </Box>
  );
};

export default MiniTask;
