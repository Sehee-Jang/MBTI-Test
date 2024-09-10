import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>MBTI 무료 성격 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.</p>
      <p>로그인 페이지로 이동하려면 아래 버튼을 클릭하세요.</p>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Home;
