import axios from "axios";

export const API = axios.create({
  'baseURL': 'https://dummyjson.com',
  'headers': {
    'Content-Type': 'application/json'
  }
})

API.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('auth-token')
  if (authToken)
    config.headers.Authorization = `Bearer ${authToken}`
  return config
})