// api.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.105:8080', 
});

// Intercepta todas as requisições e adiciona o token JWT
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;