import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as S from "../style/Header";

function Header() {
  const [token, setToken] = useState("");

  const onChange = (e) => {
    const searchValue = e.target.value;
    localStorage.setItem("search", searchValue);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      window.location.assign("/");
    }
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("accessToken"));
  }, []);

  const onLogo = () => {
    localStorage.setItem("search", "");
    window.location.assign("/");
  };

  const onLogin = () => {
    localStorage.setItem("search", "");
    window.location.assign("/login");
  };

  const onSignup = () => {
    localStorage.setItem("search", "");
    window.location.assign("/signup");
  };

  const onMypage = () => {
    localStorage.setItem("search", "");
    window.location.assign("/mypage");
  };

  return (
    <>
      <S.Header>
        <S.Div>
          <S.LogoImg onClick={onLogo}></S.LogoImg>
          {token ? (
            <S.div>
              <S.search>
                <S.input onChange={onChange} onKeyPress={onKeyPress}></S.input>
                <S.Search />
              </S.search>
              <S.mypageButton onClick={onMypage}>마이페이지</S.mypageButton>
            </S.div>
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
