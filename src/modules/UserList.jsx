import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";

const UserList = () => {
  //   const [count, setCount] = useState(0);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log("UserList component mounted");
  //   }, []); // mounting stage
  //   useEffect(() => {
  //     console.log("Count updated:", count);
  //   }, [count]); // updating stage
  //   useEffect(() => {
  //     return () => {
  //       // unmounting stage
  //       console.log("UserList component unmounted");
  //     };
  //   }, []);

  const [userList, setUserList] = useState([]);

  console.log("UserList Rendered", userList);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("User Data :: ", data);
  //         setUserList(data);
  //       });
  //   }, []);

  // axios approach

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("User Data :: ", response);
      if (response.status === 200) {
        setUserList(response.data);
      }
    });
  }, []);

  return (
    <div>
      {/* UserList
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => navigate("/studentlist")}>Home</button> */}
      <h1>User List Component</h1>
      {userList?.length > 0 &&
        userList.map((user, index) => {
          return (
            <Box sx={{ display: "flex" }} key={index}>
              <Box>{user.name}</Box>
              <Box>{user.email}</Box>
            </Box>
          );
        })}
    </div>
  );
};

export default UserList;
