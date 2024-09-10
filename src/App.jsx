import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import TestPage from "./pages/TestPage";
import TestResult from "./pages/TestResult";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path='/' element={<Home />} />ㄴ
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute user={user}>
                <Profile user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/test'
            element={
              <ProtectedRoute user={user}>
                <TestPage user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/results'
            element={
              <ProtectedRoute user={user}>
                <TestResult user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
