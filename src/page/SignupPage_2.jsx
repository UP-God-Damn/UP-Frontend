import React, { useState, useRef } from "react";
import * as S from "../css/Signup_2";
import axios from "axios";

function SignupPage_2() {
  const imageInputRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const onCheck = () => {
    // axios
    // .post("http://52.78.143.155:8080/user/signup", {
    //   ...
    // })
    if (window.confirm("가입하시겠습니까?")) {
      alert("가입되었습니다.");
      window.location.assign("/");
    } else {
      alert("취소되었습니다.");
    }
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
    <S.Background>
      <S.Body>
        <S.Login_font>signUp</S.Login_font>
        <S.image_div>
          <S.label>프로필 이미지</S.label>
          {imgSrc !== "" ? (
            <img src={imgSrc} width="300px" height="300px"></img>
          ) : (
            <S.image onClick={handleImageClick}>
              <S.inpor>
                <S.Img></S.Img>
                <S.image_font>이미지를 삽입해주세요</S.image_font>
              </S.inpor>
            </S.image>
          )}
        </S.image_div>
        <S.font>
          프로필 이미지를 설정하지 않을 경우에는 기본 프로필로 설정됩니다.
        </S.font>
        <S.signup_button onClick={onCheck}>가입하기</S.signup_button>
      </S.Body>
      <S.input
        type="file"
        accept="image/png, image/jpeg"
        ref={imageInputRef}
        onChange={handleChange}
      />
    </S.Background>
  );
}

export default SignupPage_2;
