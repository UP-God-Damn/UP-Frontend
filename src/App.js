import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./page/LoginPage";
import MyPage from "./page/MyPage";
import MainPage from "./page/MainPage";
import SignupPage from "./page/SignupPage";
import ViewPage from "./page/ViewPage";
import CreatePage from "./page/CreatePage";
import AmendPage from "./page/AmendPage";
import SignupPage_2 from "./page/SignupPage_2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup_next" element={<SignupPage_2 />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/amend" element={<AmendPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
