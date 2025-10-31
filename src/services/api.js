import axios from "axios";

const API = axios.create({
  baseURL: "https://samplebe-aztn.onrender.com/api/auth",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  console.log("token ::", token);
  if (token) {
    req.headers.Authorization = `${token}`;
  }
  return req;
});

export default API;
