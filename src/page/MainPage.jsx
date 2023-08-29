import React, { useState, useEffect } from "react";
import * as S from "../css/Main";
import axios from "axios";

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [major, setMajor] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://13.209.66.252:8080/post/search?title=&state=&major=&page=2&size=3"
      )
      .then((res) => {
        alert("res");
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  }, []);

  const onLogin = () => {
    window.location.assign("/login");
  };

  const onMypage = () => {
    window.location.assign("/mypage");
  };

  const onMessage = () => {
    window.location.assign("/create");
  };

  const onView = () => {
    window.location.assign("/view");
  };

  const onComment = () => {
    alert("로그인 후에 이용해주세요.");
  };

  const onMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleTagSelect = (major) => {
    setSelectedTag(major);
  };

  return (
    <S.Background>
      {isLoggedIn ? (
        <S.Mypage>
          <S.font>MY PAGE</S.font>
          <S.mypage_div onClick={onMypage}>
            <S.Div>
              <S.Img></S.Img>
              <S.login_id>admin</S.login_id>
            </S.Div>
            <S.loginImg></S.loginImg>
          </S.mypage_div>
          <S.mypage_div>
            <S.login_label>전공</S.login_label>
            <S.login_value>백엔드</S.login_value>
          </S.mypage_div>
          <S.login_div>
            <S.login_label>내 활동</S.login_label>
            <S.login_value>작성글 74</S.login_value>
          </S.login_div>
        </S.Mypage>
      ) : (
        <S.Login>
          <S.font>MY PAGE</S.font>
          <S.login_div onClick={onLogin}>
            <S.Div>
              <S.icon></S.icon>
              <S.login_font>로그인 해주세요</S.login_font>
            </S.Div>
            <S.loginImg></S.loginImg>
          </S.login_div>
        </S.Login>
      )}
      {isLoggedIn ? (
        <S.List_mypage>
          <S.list_border>게시글 목록</S.list_border>
          <S.li>해결한 ERROR 해결책</S.li>
          <S.li>해결하지 못한 ERROR 질문</S.li>
        </S.List_mypage>
      ) : (
        <S.List_login>
          <S.list_border>게시글 목록</S.list_border>
          <S.li
            style={{
              color: selectedTag === "해결" ? "#191c1b" : "#767676",
              fontWeight: selectedTag === "해결" ? "bold" : "regular",
              textDecoration: selectedTag === "해결" ? "underline" : "none",
            }}
            active={selectedTag === "해결"}
            onClick={() => handleTagSelect("해결")}
          >
            해결한 ERROR 해결책
          </S.li>
          <S.li
            style={{
              color: selectedTag === "질문" ? "#191c1b" : "#767676",
              fontWeight: selectedTag === "질문" ? "bold" : "regular",
              textDecoration: selectedTag === "질문" ? "underline" : "none",
            }}
            active={selectedTag === "질문"}
            onClick={() => handleTagSelect("질문")}
          >
            해결하지 못한 ERROR 질문
          </S.li>
        </S.List_login>
      )}
      {isLoggedIn ? (
        <S.create onClick={onMessage}>글 작성하기</S.create>
      ) : (
        <div></div>
      )}
      <S.body>
        <S.border>
          <S.Major onChange={onMajorChange}>
            <S.Major_option value="">전공</S.Major_option>
            <S.Major_option value="프론트엔드">프론트엔드</S.Major_option>
            <S.Major_option value="백엔드">백엔드</S.Major_option>
            <S.Major_option value="디자인">디자인</S.Major_option>
            <S.Major_option value="임베디드">임베디드</S.Major_option>
            <S.Major_option value="플러터">플러터</S.Major_option>
            <S.Major_option value="정보보안">정보보안</S.Major_option>
            <S.Major_option value="게임개발">게임개발</S.Major_option>
            <S.Major_option value="AI">AI</S.Major_option>
            <S.Major_option value="IOS">IOS</S.Major_option>
            <S.Major_option value="안드로이드">안드로이드</S.Major_option>
            <S.Major_option value="기타">기타</S.Major_option>
          </S.Major>
        </S.border>
        <S.main onClick={isLoggedIn ? onView : onComment}>
          <S.title>404 Not Found</S.title>
          <S.information>
            <S.information_div>
              <S.PeopleIcon></S.PeopleIcon>
              <S.information_font>admin01</S.information_font>
            </S.information_div>
            <S.information_div>
              <S.CalenderIcon></S.CalenderIcon>
              <S.information_font>2023 / 07 /16</S.information_font>
            </S.information_div>
            <S.information_div>
              <S.langeIcon></S.langeIcon>
              <S.information_font>JAVA</S.information_font>
            </S.information_div>
          </S.information>
          <S.tag_div>
            <S.tag>질문</S.tag>
            <S.tag_major>백엔드</S.tag_major>
          </S.tag_div>
        </S.main>
      </S.body>
    </S.Background>
  );
}

export default MainPage;
