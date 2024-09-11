import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../api/auth";
import { Button } from "../styles/CommonStyles";
import styled from "styled-components";


// 회원가입과 로그인 폼을 만드는 AuthForm 컴포넌트, mode와 onSubmit을 props로 받음
// onSubmit 도 회원가입과 로그인 페이지에서 각각 구현을 하고 props 로 넘겨줌
const AuthForm = ({ mode, onSubmit }) => {
  const navigate = useNavigate();

  // 폼 데이터를 관리하는 state
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: mode === "signup" ? "" : "", // 회원가입일 때만 닉네임 필드 활성화, 빈 문자열로 초기화
  });

  // 입력 필드 값이 변경될 때 호출되는 함수
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value); // 입력값 확인
    setFormData({
      ...formData, // 기존 값 유지
      [e.target.name]: e.target.value, // 입력된 필드의 name 속성 값에 따라 해당 필드만 업데이트
    });
  };

  // 폼 제출 시 실행되는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("폼 데이터: ", formData); // formData 값 확인

    try {
      if (mode === "login") {
        // 로그인일 경우
        const response = await login({
          id: formData.id, // 입력받은 id와
          password: formData.password, // 입력받은 password를 login 함수에 전달
        });
        console.log("로그인 응답:  ", response);
        if (response.success) {
          onSubmit(formData); // 로그인 성공 시 상위 컴포넌트로 결과 전달
          navigate("/"); //  로그인 성공 시 메인으로 이동
        } else {
          alert("로그인에 실패했습니다. 다시 시도해주세요.");
        }
      } else if (mode === "signup") {
        // 회원가입일 경우
        const response = await register({
          id: formData.id, // 입력받은 id와
          password: formData.password, // 입력받은 password,
          nickname: formData.nickname, // 그리고 입력받은 nickname을 register 함수에 전달
        });
        console.log("회원가입 응답:", response);
        if (response.success) {
          onSubmit(formData); // 회원가입 성공 시 상위 컴포넌트로 결과 전달
          navigate("/login"); // 회원가입 성공 후 로그인 페이지로 이동
        } else {
          alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
      }
    } catch (error) {
      console.error("Error details: ", error);
      alert(
        `${mode === "login" ? "로그인" : "회원가입"} 실패: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  // id 입력을 위한 input 만 힌트로 만들어 두었습니다. 참고해서 한번 만들어봅시다!
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type='text'
        name='id'
        value={formData.id}
        onChange={handleChange}
        placeholder='아이디'
        required
      />
      <Input
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
        placeholder='비밀번호'
        required
      />
      {/* 회원가입일 경우에만 닉네임 입력 필드 표시 */}
      {mode === "signup" && (
        <Input
          type='text'
          name='nickname'
          value={formData.nickname}
          onChange={handleChange}
          placeholder='닉네임'
          required
          className='w-full p-4 border border-gray-300 rounded-lg'
        />
      )}
      <Button type='submit'>
        {/* 만약 mode === "login"의 조건이 참이면 "로그인"이 출력, 거짓이면 "회원가입" 출력  */}
        {mode === "login" ? "로그인" : "회원가입"}
      </Button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem; /* 입력 필드 사이의 여백 */
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
`;
export default AuthForm;
