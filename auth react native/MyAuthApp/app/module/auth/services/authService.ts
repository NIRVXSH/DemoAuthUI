import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000",
});


// call login API
export const loginApi = async (username: string, password: string) => {
  const res = await api.post("/login", { username, password });
  return res.data;
};

// call register API
export const registerApi = async (username: string, password: string) => {
  const res = await api.post("/register", { username, password });
  return res.data;
};
