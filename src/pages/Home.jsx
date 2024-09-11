import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Title, Button } from "../styles/CommonStyles";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>MBTI 무료 성격 테스트</Title>
      <Description>
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.
      </Description>
      <CardsContainer>
        <Card>
          <h2>성격 유형 검사</h2>
          <p>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </Card>
        <Card>
          <h2>성격 유형 이해</h2>
          <p>
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </p>
        </Card>
        <Card>
          <h2>팀 평가</h2>
          <p>
            팀 내에서 자신의 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </Card>
      </CardsContainer>
      <Button onClick={() => navigate("/test")}>내 성격 알아보러 가기</Button>
    </Container>
  );
};

const Description = styled.p`
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 1rem; /* 카드 간의 간격 조정 */
  margin-bottom: 2rem;
`;

const Card = styled.div`
  flex: 1; /* 카드를 가로로 나란히 배치 */
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default Home;
