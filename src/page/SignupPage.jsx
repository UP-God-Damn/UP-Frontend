import React, { useState, useEffect, useRef } from "react";
import * as S from "../css/Signup";
import * as A from "../css/Signup_2";
import axios from "axios";

function SignupPage() {
  const imageInputRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [pageNum, setPageNum] = useState(true);
  const [idCheck, setIdCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [signData, setSignData] = useState({
    nickname: "",
    accountId: "",
    password: "",
  });
  const formData = new FormData();
  const fileInput = document.querySelector("#fileInput");

  const formD = () => {
    const request = {
      nickname: signData.nickname,
      accountId: signData.accountId,
      password: signData.password,
    };
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );
    if(fileInput)
      formData.append("image", fileInput.files[0] | "");
    server();
  };

  const server = () => {
    let entries = formData.entries();
    for (const pair of entries) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios
      .request({
        url: `http://13.209.66.252:8080/user/signup`,
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("가입되었습니다.");
        window.location.assign("/");
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const onCheck = () => {
    if (signData.nickname.length >= 2) {
      if (signData.accountId.length >= 6 && idCheck) {
        if (signData.password.length && signData.password === passwordCheck) {
          alert("확인되었습니다.");
          setPageNum(false);
        } else {
          alert("비밀번호를 확인해주세요.");
        }
      } else {
        alert("아이디를 확인해주세요.");
      }
    } else {
      alert("닉네임을 확인해주세요.");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setSignData({
      ...signData,
      [name]: value,
    });
  };

  const onPass = (input) => {
    setPasswordCheck(input.target.value);
  };

  useEffect(() => {
    console.log(signData);
  }, [signData]);

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const onCheck_page = () => {
    if (window.confirm("가입하시겠습니까?")) {
      formD();
    } else {
      alert("취소되었습니다.");
    }
  };

  const onDoublecheck = () => {
    axios
      .get(`http://13.209.66.252:8080/user/${signData.accountId}`)
      .then((res) => {
        setIdCheck(true);
        alert("사용 가능한 아이디입니다.");
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          alert("사용할 수 없는 아이디입니다.");
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        setImgSrc(e.target?.result);
      }
    };
  };

  return (
    <>
      {pageNum ? (
        <S.Background>
          <S.Body>
            <S.Login_font>signUp</S.Login_font>
            <S.Label_div>
              <S.Label>
                <S.Label_font htmlFor="accountId">아이디</S.Label_font>
                <S.Id_div>
                  <S.Input_Id
                    onChange={onChange}
                    type="text"
                    id="accountId"
                    name="accountId"
                    placeholder="아이디를 입력하세요 (6~12자)"
                    maxLength="12"
                  />
                  <S.check onClick={onDoublecheck}>중복확인</S.check>
                </S.Id_div>
              </S.Label>
              <S.Label>
                <S.Label_font htmlFor="nickname">닉네임</S.Label_font>
                <S.Input
                  onChange={onChange}
                  id="nickname"
                  name="nickname"
                  type="text"
                  placeholder="닉네임을 입력하세요 (2~12자)"
                  maxLength="12"
                />
              </S.Label>
              <S.Label>
                <S.Label_font htmlFor="password">비밀번호</S.Label_font>
                <S.Input
                  onChange={onChange}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요 (6~20자)"
                  maxLength="20"
                />
              </S.Label>
              <S.Label>
                <S.Label_font htmlFor="passwordCheck">
                  비밀번호 확인
                </S.Label_font>
                <S.Input
                  onChange={onPass}
                  id="passwordCheck"
                  name="passwordCheck"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  maxLength="20"
                />
              </S.Label>
              <S.signup_button onClick={onCheck}>다음으로</S.signup_button>
            </S.Label_div>
          </S.Body>
        </S.Background>
      ) : (
        <A.Background>
          <A.Body>
            <A.Login_font>signUp</A.Login_font>
            <A.image_div>
              <A.label>프로필 이미지</A.label>
              {imgSrc !== "" ? (
                <img src={imgSrc} width="300px" height="300px"></img>
              ) : (
                <A.image onClick={handleImageClick}>
                  <A.inpor>
                    <A.Img></A.Img>
                    <A.image_font>이미지를 삽입해주세요</A.image_font>
                  </A.inpor>
                </A.image>
              )}
            </A.image_div>
            <A.font>
              프로필 이미지를 설정하지 않을 경우에는 기본 프로필로 설정됩니다.
            </A.font>
            <A.signup_button onClick={onCheck_page}>가입하기</A.signup_button>
          </A.Body>
          <A.input
            type="file"
            accept="image/png, image/jpeg"
            ref={imageInputRef}
            onChange={handleChange}
            id="fileInput"
          />
        </A.Background>
      )}
    </>
  );
}

export default SignupPage;
