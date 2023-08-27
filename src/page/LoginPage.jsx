import React, { useState } from "react";
import * as S from "../css/Login";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onCheck = () => {
    if (window.confirm("아이디와 비밀번호 체크")) {
      alert("환영합니다.");
      window.location.assign("/");
    } else {
      alert("아이디나 비밀번호가 틀렸습니다.");
    }
  };

  const onSignup = () => {
    window.location.assign("/signup");
  };

  const ChangePa = (input) => {
    setPassword(input.target.value);
  };

  const ChangeId = (input) => {
    setId(input.target.value);
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
              onChange={ChangeId}
              type="text"
              placeholder="아이디를 입력하세요"
            />
          </S.Label>
          <S.Label>
            <S.Label_font htmlFor="">비밀번호</S.Label_font>
            <S.Input
              onChange={ChangePa}
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
