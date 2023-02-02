import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export function createHeader() {
  const auth = JSON.parse(localStorage.getItem("@Auth:token"));
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` },
  };
  return config;
}

export default instance;
