import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // your backend URL
});

// Register
export const registerUser = (data) => API.post('/register', data);

// Login
export const loginUser = (data) => API.post('/login', data);
