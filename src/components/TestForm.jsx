import React, { useState } from "react";
import { questions } from "../data/questions";
import styled from "styled-components";
import { Container, Title, Form, Button } from "../styles/CommonStyles";
const TestForm = ({ onSubmit }) => {
  // 테스트 질문 수에 맞춰 초기값이 null인 배열을 상태로 정의
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // 질문에 대한 답변이 변경될 때 호출되는 함수
  const handleChange = (index, answer) => {
    const newAnswers = [...answers]; // 현재 답변 배열을 복사
    newAnswers[index] = answer; // 해당 인덱스의 답변을 새로운 값으로 업데이트
    setAnswers(newAnswers); // 상태를 업데이트하여 리렌더링
  };

  // 폼 제출 시 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers); // 부모 컴포넌트로 현재 답변 배열을 전달
  };

  return (
    <CenteredContainer>
      <FormContainer onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <QuestionContainer key={q.id}>
            <p>{q.question}</p>
            {q.options.map((option, i) => (
              <OptionLabel key={i}>
                <input
                  type='radio'
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleChange(index, option)}
                />
                {option}
              </OptionLabel>
            ))}
          </QuestionContainer>
        ))}
        <Button type='submit' style={{ margin: "0 auto" }}>
          제출하기
        </Button>
      </FormContainer>
    </CenteredContainer>
  );
};
// 전체 페이지를 중앙 정렬하기 위한 컨테이너
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; // 수평 중앙 정렬
  align-items: center; // 수직 중앙 정렬
  min-height: 100vh; // 화면 전체 높이
  padding: 1rem;
  background-color: #fff; // 배경 색상
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 그림자
`;

// Form 스타일
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; // 각 질문과 버튼 사이의 여백
  padding: 1rem;
  width: 100%;
  max-width: 500px; // 폼 최대 너비
`;

// 질문과 옵션을 감싸는 스타일
const QuestionContainer = styled.div`
  margin-bottom: 1rem;
  text-align: left; // 질문과 옵션을 좌측 정렬
`;

const OptionLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem; // 옵션 간의 여백
  font-size: 1rem;
  cursor: pointer;
  text-align: left; // 옵션 텍스트 좌측 정렬
`;

export default TestForm;
