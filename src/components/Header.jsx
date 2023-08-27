import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as S from "../css/Header";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogo = () => {
    window.location.assign("/");
  };

  const onLogin = () => {
    window.location.assign("/login");
  };

  const onSignup = () => {
    window.location.assign("/signup");
  };

  const onMypage = () => {
    window.location.assign("/mypage");
  };

  return (
    <>
      <S.Header>
        <S.Div>
          <S.LogoImg onClick={onLogo}></S.LogoImg>
          {isLoggedIn ? (
            <div>
              <S.mypageButton onClick={onMypage}>마이페이지</S.mypageButton>
            </div>
          ) : (
            <div>
              <S.LoginButton onClick={onLogin}>로그인</S.LoginButton>
              <S.SignupButton onClick={onSignup}>회원가입</S.SignupButton>
            </div>
          )}
        </S.Div>
      </S.Header>
      <Outlet />
    </>
  );
}

export default Header;
