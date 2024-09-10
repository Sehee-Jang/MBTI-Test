import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  // 로그인이 되어 있지 않다면, 로그인 페이지로 리다이렉트
  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
