import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./modules/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./modules/StudentList";
import UserList from "./modules/UserList";
import MiniTask from "./modules/MiniTask";
import ContextAPI from "./modules/ContextAPI";
import Signup from "./modules/Signup";
import Login from "./modules/Login";
import Profile from "./modules/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/minitask" element={<MiniTask />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/context" element={<ContextAPI />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
