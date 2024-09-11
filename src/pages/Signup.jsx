import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { Container, Title, StyledLink } from "../styles/CommonStyles";

const Signup = () => {
  const navigate = useNavigate();

  // 회원가입 처리 함수
  const handleSignup = async (formData) => {
    try {
      // register 함수 호출하여 회원가입 요청 보내기
      const response = await register(formData);

      // 회원가입 성공 여부 확인
      if (response.success) {
        console.log("회원가입 성공 후 페이지 이동");
        navigate("/login"); // 회원가입 후 로그인 페이지로 이동
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <AuthForm mode='signup' onSubmit={handleSignup} />
      <div>
        <p>
          이미 계정이 있으신가요? <StyledLink to='/login'>로그인</StyledLink>
        </p>
      </div>
    </Container>
  );
};

export default Signup;
