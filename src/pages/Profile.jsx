import React, { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { Container, Title, Form, Button } from "../styles/CommonStyles";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || ""); // 닉네임 상태 정의, 초기값은 user 객체의 닉네임 또는 빈 문자열
  const navigate = useNavigate();

  // 컴포넌트가 처음 렌더링될 때 사용자 프로필을 가져옴
  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰을 가져옴
  //       const profile = await getUserProfile(token); // API를 통해 사용자 프로필을 가져옴
  //       setNickname(profile.nickname); // 닉네임 상태를 가져온 프로필의 닉네임으로 설정
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Failed to fetch user profile:", error);
  //       navigate("/login"); // 로그인 페이지로 리디렉션
  //     }
  //   };
  //   fetchUserProfile();
  // }, [navigate]); // navigate가 변경될 때마다 effect가 실행됨

  // 닉네임 입력값이 변경될 때 호출되는 함수
  const handleNicknameChange = (e) => {
    setNickname(e.target.value); // 입력값을 닉네임 상태에 반영
  };

  // 폼이 제출될 때 호출되는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({ nickname });
      console.log(response);
      setUser({ ...user, nickname: response.nickname });
      alert("닉네임이 변경되었습니다.");
    } catch (e) {
      alert("프로필 업데이트에 실패했습니다.");
    }

    // try {
    //   const formData = new FormData(); // 새로운 FormData 객체 생성
    //   formData.append("nickname", nickname); // FormData에 닉네임 추가

    //   const response = await updateProfile(formData); // 프로필 업데이트 API 호출

    //   if (response.success) {
    //     // 업데이트 성공 시
    //     setUser((prev) => ({
    //       ...prev, // 이전 상태를 유지하면서
    //       nickname: response.nickname, // 닉네임을 새로 업데이트된 값으로 변경
    //     }));
    //     alert("닉네임이 변경되었습니다.");
    //   } else {
    //     alert("닉네임이 변경에 실패했습니다. 다시 시도해주세요.");
    //   }
    // } catch (error) {
    //   console.error("Failed to update profile: ", error);
    //   alert("프로필 업데이트에 실패했습니다.");
    // }
  };

  return (
    <Container>
      <Title>프로필 수정</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>닉네임: </label>
          <input
            type='text'
            value={nickname}
            onChange={handleNicknameChange}
            placeholder='새 닉네임'
          />
        </div>
        <Button type='submit'>프로필 업데이트</Button>
      </Form>
    </Container>
  );
};

export default Profile;
