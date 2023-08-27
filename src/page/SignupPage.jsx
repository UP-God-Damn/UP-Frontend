import React, { useState, useEffect } from "react";
import * as S from "../css/Signup";
import axios from "axios";

function SignupPage() {
  const [signData, setSignData] = useState([
    {
      nickname: "",
      accountId: "",
      password: "",
    },
  ]);
  const [id, setId] = useState("");
  const [idCheck, setIdCheck] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  useEffect(() => {
    axios
    .post("http://52.78.143.155:8080/user/signup", {
      ...
    })
  });

  const onCheck = () => {
    if (id.length >= 6 && idCheck) {
      if (name.length >= 2) {
        if (password.length >= 6 && password === passwordCheck) {
          const updatedSignData = {
            ...signData,
            nickname: name,
            accountId: id,
            password: password,
          };
          if (window.confirm("다음으로 넘어가시겠습니까?")) {
            alert("확인되었습니다.");
            window.location.assign("/signup_next");
          } else {
            alert("취소되었습니다.");
          }
        } else {
          alert("비밀번호를 확인해주세요.");
        }
      } else {
        alert("닉네임을 확인해주세요.");
      }
    } else {
      alert("아이디를 확인해주세요.");
    }
  };

  const ChangePa = (input) => {
    setPassword(input.target.value);
  };

  const ChangePaCheck = (input) => {
    setPasswordCheck(input.target.value);
  };

  const ChangeName = (input) => {
    setName(input.target.value);
  };

  const ChangeId = (input) => {
    setId(input.target.value);
  };

  const CheckId = () => {
    if (true) {
      setIdCheck(true);
      alert("사용 가능한 아이디입니다.");
    } else {
      alert("아이디를 확인해주세요.");
    }
  };

  return (
    <S.Background>
      <S.Body>
        <S.Login_font>signUp</S.Login_font>
        <S.Label_div>
          <S.Label>
            <S.Label_font htmlFor="">아이디</S.Label_font>
            <S.Id_div>
              <S.Input_Id
                onChange={ChangeId}
                type="text"
                placeholder="아이디를 입력하세요 (6~12자)"
                maxLength="12"
              />
              <S.check onClick={CheckId}>중복확인</S.check>
            </S.Id_div>
          </S.Label>
          <S.Label>
            <S.Label_font htmlFor="">닉네임</S.Label_font>
            <S.Input
              onChange={ChangeName}
              type="text"
              placeholder="닉네임을 입력하세요 (2~12자)"
              maxLength="12"
            />
          </S.Label>
          <S.Label>
            <S.Label_font htmlFor="">비밀번호</S.Label_font>
            <S.Input
              onChange={ChangePa}
              type="password"
              placeholder="비밀번호를 입력하세요 (6~20자)"
              maxLength="20"
            />
          </S.Label>
          <S.Label>
            <S.Label_font htmlFor="">비밀번호 확인</S.Label_font>
            <S.Input
              onChange={ChangePaCheck}
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              maxLength="20"
            />
          </S.Label>
          <S.signup_button onClick={onCheck}>다음으로</S.signup_button>
        </S.Label_div>
      </S.Body>
    </S.Background>
  );
}

export default SignupPage;
