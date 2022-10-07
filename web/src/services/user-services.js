import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});


// Interceptors
http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.response?.status === 401) {
      console.error("unauthenticated, redirect to login");
      localStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

// Routes

export function getUsers() {
  return http.get('/users')
}