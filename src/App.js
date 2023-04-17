import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import Dashbord from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/" element={<Dashbord />} />
      </Routes>
    </>
  );
}

export default App;
