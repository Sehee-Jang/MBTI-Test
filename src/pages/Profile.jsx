import React, { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const profile = await getUserProfile(token);
        setNickname(profile.nickname);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        navigate("/login"); // 로그인 페이지로 리디렉션
      }
    };
    fetchUserProfile();
  }, [navigate]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const token = localStorage.getItem("accessToken");
      // const response = await updateProfile({ nickname }, token);

      const formData = new FormData();
      formData.append("nickname", nickname);

      const response = await updateProfile(formData);

      if (response.success) {
        setUser((prev) => ({
          ...prev,
          nickname: response.nickname,
        }));
        alert("닉네임이 변경되었습니다.");
      } else {
        alert("닉네임이 변경에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Failed to update profile: ", error);
      alert("프로필 업데이트에 실패했습니다.");
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input
              type='text'
              value={nickname}
              onChange={handleNicknameChange}
              placeholder='새 닉네임'
            />
          </div>
          <button type='submit'>프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
