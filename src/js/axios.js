import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE;

axios.interceptors.request.use((config) => {
  const t = localStorage.getItem('gt_access_token');
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export default axios;