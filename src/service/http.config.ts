import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://api.cc0820.top:8888",
});
export default http;
