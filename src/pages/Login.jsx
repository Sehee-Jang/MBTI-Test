import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

// 로그인 페이지 컴포넌트, setUser를 props로 받음
const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    console.log("로그인 시도하는 아이디: ", formData.id);
    try {
      // 서버에 로그인 요청
      const response = await login(formData);
      console.log("로그인 시도하는 아이디: ", formData.id); // formData에 id 확인

      // 로그인 성공 시 사용자 정보를 처리
      if (response.success) {
        // 사용자 정보를 저장하거나 상태로 관리하는 로직 추가
        setUser({
          id: response.userId,
          accessToken: response.accessToken,
          nickname: response.nickname,
        });
        console.log("로그인 성공 후 페이지 이동");
        navigate("/"); // 로그인 후 메인으로 이동
        alert(`${response.userId}님 환영합니다.`);
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log("로그인 오류: ", error.response?.data || error.message);
      alert("Login failed");
    }

    // try {
    //   // 로그인 요청
    //   const response = await login({
    //     id: formData.id,
    //     password: formData.password,
    //   });

    //   console.log("response => ", response);
    //   // 로그인 성공 시 사용자 정보 저장
    //   if (response.success) {
    //     setUser({
    //       // setUser 함수를 통해 사용자 정보를 저장
    //       id: response.userId,
    //       accessToken: response.accessToken,
    //       nickname: response.nickname,
    //     });
    //     navigate("/"); // 로그인 후 페이지 이동
    //   } else {
    //     alert("로그인에 실패했습니다. 다시 시도해주세요.");
    //   }
    // } catch (error) {
    //   console.log("로그인 오류: ", error);
    //   alert("로그인에 실패했습니다. 다시 시도해주세요.");
    // }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode='login' onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to='/signup'>회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
