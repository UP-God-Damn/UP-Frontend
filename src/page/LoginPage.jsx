import React, { useState, useEffect } from "react";
import * as S from "../css/Login";
import axios from "axios";

function LoginPage() {
  const [signData, setSignData] = useState({
    accountId: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setSignData({
      ...signData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(signData);
  }, [signData]);

  const onCheck = () => {
    axios
      .post("http://13.209.66.252:8080/user/login", {
        accountId: signData.accountId,
        password: signData.password,
      })
      .then((res) => {
        const { accessToken, refreshToken } = res.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        alert("환영합니다.");
        window.location.assign("/");
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          alert("비밀번호를 확인해주세요.");
        } else {
          console.log(err);
          alert("에러가 발생했습니다.");
        }
      });
  };

  const onSignup = () => {
    window.location.assign("/signup");
  };

  return (
    <S.Background>
      <S.Gradation_1></S.Gradation_1>
      <S.Gradation_2></S.Gradation_2>
      <S.Body>
        <S.Body_left>
          <S.LogoImg fill="white" />
          <S.Body_left_font>
            해결하지 못한 에러를 해결해드립니다
          </S.Body_left_font>
        </S.Body_left>
        <S.Body_right>
          <S.Login_font>login</S.Login_font>
          <S.Label>
            <S.Label_font htmlFor="">아이디</S.Label_font>
            <S.Input
              onChange={onChange}
              type="text"
              id="accountId"
              name="accountId"
              placeholder="아이디를 입력하세요"
            />
          </S.Label>
          <S.Label>
            <S.Label_font htmlFor="">비밀번호</S.Label_font>
            <S.Input
              onChange={onChange}
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </S.Label>
          <S.Login onClick={onCheck}>로그인</S.Login>
          <S.font>
            <S.font_story>계정이 없으신가요?</S.font_story>
            <S.font_signup onClick={onSignup}>회원가입</S.font_signup>
          </S.font>
        </S.Body_right>
      </S.Body>
    </S.Background>
  );
}

export default LoginPage;
