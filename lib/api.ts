import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ostrich-talks-api.onrender.com',
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  // TODO: Configure Firebase auth and add the token to auth header for api call
  // config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
