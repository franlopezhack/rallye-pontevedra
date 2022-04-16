import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3001",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(error)
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export function getMaps(){
    return http.get('/api/maps')
}