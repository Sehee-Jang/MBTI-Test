import React from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Container, Title } from "../styles/CommonStyles";

const TestPage = ({ user }) => {
  const navigate = useNavigate();

  // 테스트 제출 처리 함수
  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers); // MBTI 결과 계산

    // 결과 데이터 객체 생성
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(), // 현재 날짜와 시간을 ISO 문자열로 변환하여 저장
      visibility: true, // 결과 공개 여부
    };
    await createTestResult(resultData); // 테스트 결과를 API를 통해 저장
    navigate("/results");
  };

  return (
    <div>
      <Container>
        <TestPageTitle>
          <h1>MBTI 무료 성격 테스트</h1>
          <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.</p>
        </TestPageTitle>

        <TestForm onSubmit={handleTestSubmit} />
      </Container>
    </div>
  );
};

const TestPageTitle = styled.div`
  margin-bottom: 20px;
`;
export default TestPage;
