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
    console.log("서버 응답:", response); // 서버 전체 응답 확인

    // 로그인 성공 시 토큰을 반환해야 함
    const token = response.data?.accessToken; // 서버 응답에서 accessToken을 추출

    if (token) {
      localStorage.setItem("accessToken", token); // 토큰을 localStorage에 저장
      console.log("토큰 저장됨:", token); // 확인용 로그 추가
      return response.data;
    } else {
      console.error("토큰이 반환되지 않았습니다.");
      return null;
    }
    // localStorage.setItem("accessToken", token); // 토큰을 localStorage에 저장
    // return response.data;
  } catch (error) {
    console.error("Login error: ", error.response?.data || error.message);
    throw error;
  }
};

export const getUserProfile = async (token) => {
  try {
    // 요청을 보낼 URL과 헤더를 설정합니다.
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        // 'Authorization' 헤더에 'Bearer' 타입으로 JWT 토큰을 포함시킵니다.
        Authorization: `Bearer ${token}`, // 서버가 인증할 수 있도록 토큰을 요청 헤더에 추가
      },
    });
    // 서버로부터 받은 사용자 프로필 데이터를 반환합니다.
    return response.data;
  } catch (error) {
    // 요청 중 오류가 발생하면 에러를 콘솔에 출력하고, 다시 발생시킵니다.
    console.error("Failed to fetch user profile:", error);
    throw error; // 오류를 상위 호출자에게 전달하여 추가적인 처리를 가능하게 합니다.
  }
};

export const updateProfile = async (formData) => {
  const response = await axiod.patch(`${API_URL}/profile`, formData);
  return response.data;
};
