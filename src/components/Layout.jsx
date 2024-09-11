import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ children, user }) => {
  const navigate = useNavigate();

  // 로그인 하지 않은 사용자를 login 페이지로 보냄
  useEffect(() => {
    const currentPath = window.location.pathname; // 현재 URL 경로를 가져옴
    // 사용자가 로그인하지 않았고 현재 경로가 /signup이 아닐 경우 로그인 페이지로 리디렉션
    if (!user && currentPath !== "/signup") {
      // signup 경로일 때는 리디렉션 하지 않도록 조건 추가
      navigate("/login"); // 로그인 페이지로 이동합니다.
    }
  }, [user, navigate]); // user 또는 navigate가 변경될 때마다 useEffect가 실행

  const handleLogout = () => {
    // 로그아웃 처리 로직
    localStorage.removeItem("token"); // 로컬 스토리지에서 토큰을 제거하여 로그아웃 처리
    navigate("login"); // 로그아웃 후 로그인 페이지로 이동
  };

  return (
    <Container>
      <Header>
        <Nav>
          <Link to='/'>홈 </Link>
          <Link to='/profile'>프로필 </Link>
          <Link to='/test'>테스트하기 </Link>
          <Link to='/results'>테스트 결과</Link>
          <Actions>
            {user ? (
              <>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to='/login'>로그인</Link>
            )}
          </Actions>
        </Nav>
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 1rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
`;

export default Layout;
