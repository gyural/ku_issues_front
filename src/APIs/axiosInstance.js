import axios from 'axios';

const API_URL = 'https://udr2.wild2.duckdns.org'; // 서버의 API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // 쿠키를 포함하도록 설정
});

export default axiosInstance;
