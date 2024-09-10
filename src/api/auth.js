import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Registration error: ",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login error: ", error.response?.data || error.message);
    throw error;
  }
};

export const getUserProfile = async (token) => {
  
  const response = await axios.get(`${API_URL}/user`, token);
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await axiod.patch(`${API_URL}/profile`, formData);
  return response.data;
};
