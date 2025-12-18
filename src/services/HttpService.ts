import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

const http = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 90000,
});

http.interceptors.request.use(async (config) => {
  // const session = await getSession();
  // const accessToken = session?.token;
  // if (accessToken) {
  //   config.headers['Authorization'] = `Bearer ${accessToken}`;
  // }
  return config;
},
  (error) => Promise.reject(error)
);

export default http;