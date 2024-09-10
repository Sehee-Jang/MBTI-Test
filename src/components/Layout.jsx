import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <header>
        <nav>
          <Link to='/'>홈 </Link>
          <Link to='/profile'>프로필 </Link>
          <Link to='/test'>테스트하기 </Link>
          <Link to='/results'>테스트 결과</Link>
          <div className='space-x-4'>
            {user ? (
              <>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to='/login'>로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className='container mx-auto pt-10 main'>{children}</main>
    </div>
  );
};

export default Layout;
