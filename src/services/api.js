import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_DRAGONS_API
});

api.interceptors.response.use(response => response.data);

export default api;
