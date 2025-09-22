import axios from 'axios';

const API_URL = 'http://127.0.0.1:8005/api';  // Mahalliy sinov uchun

//  Token yuborish kerak bo‘lgan joylar uchun
const getAuthHeaders = () => {
  const token = localStorage.getItem('access');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Ro‘yxatdan o‘tish
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users/register/`, data);
    return response.data;
  } catch (error) {
    console.error('Ro‘yxatdan o‘tishda xatolik:', error);
    throw error.response?.data || { error: 'Tarmoq xatosi yoki server javobi yo‘q' };
  }
};

// Login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login/`, credentials);
    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
    return response.data;
  } catch (error) {
    console.error('Login xatoligi:', error);
    throw error.response?.data || { error: 'Tarmoq xatosi yoki server javobi yo‘q' };
  }
};

// // 📰 Barchaga ochiq yangiliklar API
// export const fetchNews = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/news/list/`, {
//       headers: getAuthHeaders(), // Autentifikatsiya opsiyasi
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Yangiliklarni olishda xatolik:', error.response?.status, error.response?.data);
//     throw error.response?.data || { error: 'Tarmoq xatosi yoki server javobi yo‘q' };
//   }
// };

// // 🏛 Bo‘limlar (departments) ro‘yxatini olish
// export const fetchDepartments = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/news/departments/`, {
//       headers: getAuthHeaders(),  // Autentifikatsiya talab qilishi mumkin
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Bo‘limlar ma'lumotini olishda xatolik:", error.response?.status, error.response?.data);
//     throw error.response?.data || { error: 'Tarmoq xatosi yoki server javobi yo‘q' };
//   }
// };

// / 📰 Barchaga ochiq yangiliklar API
export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_URL}/news/list/`);
    return response.data;
  } catch (error) {
    console.error('Yangiliklarni olishda xatolik:', error.response?.status, error.response?.data);
    throw error.response?.data || { error: 'Tarmoq xatosi yoki server javobi yo‘q' };
  }
};

// 🏛 Bo‘limlar (departments) ro‘yxatini olish
export const fetchDepartments = async () => {
  try {
    const response = await axios.get(`${API_URL}/news/departments/`);
    return response.data;
  } catch (error) {
    console.error("Bo‘limlar ma'lumotini olishda xatolik:", error.response?.status, error.response?.data);
    throw error.response?.data || { error: 'Tarmoq xatosi yoki server javobi yo‘q' };
  }
};