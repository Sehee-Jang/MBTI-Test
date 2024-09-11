import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Registration error: ",
      error.response?.data || error.message // 서버에서 받은 에러 메시지가 있으면 그걸 사용하고, 없으면 기본 에러 메시지를 사용
    );
    if (error.response?.data.message === "이미 존재하는 유저 id입니다.") {
      alert("이미 존재하는 아이디입니다.");
    }
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
