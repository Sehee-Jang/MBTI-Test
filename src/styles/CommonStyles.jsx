import styled from "styled-components";
import { Link } from "react-router-dom";

// 버튼 스타일
export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  /* background-color: #007bff; */
  background-color: #ff5a5f; /* Airbnb Red */
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  min-width: 150px;
  max-width: 300px;
  box-sizing: border-box;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #f5484e;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: #ed343b;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

// 링크 스타일
export const StyledLink = styled(Link)`
  color: #ed343b;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// 공통 컨테이너 스타일
export const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

// 공통 제목 스타일
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

// 공통 폼 스타일
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
`;
