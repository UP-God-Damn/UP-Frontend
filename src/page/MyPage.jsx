import React, { useState, useEffect } from "react";
import * as S from "../style/My";
import axios from "axios";

function MyPage() {
  const [data, setData] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
    onData();
  }, []);

  const onData = () => {
    axios
      .get(`http://13.209.66.252:8080/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("에러가 발생했습니다. main");
      });
  };

  const onServer = () => {
    axios
      .delete(`http://13.209.66.252:8080/user/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.localStorage.removeItem("accessToken");
        window.localStorage.removeItem("refreshToken");
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const onLogout = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      onServer();
      alert("로그아웃되었습니다.");
      window.location.assign("/");
    } else {
      alert("취소되었습니다.");
    }
  };

  const onView = () => {
    window.location.assign("/view");
  };

  const onAmend = () => {
    window.location.assign("/amend");
  };

  const onDel = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };

  return (
    <>
      <S.Background>
        <S.body>
          <S.body_head>
            <S.mypage_font>MY PAGE</S.mypage_font>
            <S.logout onClick={onLogout}>로그아웃</S.logout>
          </S.body_head>
          <S.body_top>
            <S.Img>
              {data.profileImgUrl ? <img src={data.profileImgeUrl}></img> : <S.imgSrc />}
            </S.Img>
            <S.label_div>
              <S.label>아이디</S.label>
              <S.label>닉네임</S.label>
            </S.label_div>
            <S.label_div>
              <S.label>{data.accountId}</S.label>
              <S.label>{data.nickname}</S.label>
            </S.label_div>
          </S.body_top>
          <S.body_bottom>
            <S.border>
              <S.story>작성글</S.story>
              <S.line></S.line>
            </S.border>
            <S.check>
              <S.main>
                <S.main_left onClick={onView}>
                  <S.title>글 제목</S.title>
                  <S.information>
                    <S.information_div>
                      <S.PeopleIcon></S.PeopleIcon>
                      <S.information_font>아이디</S.information_font>
                    </S.information_div>
                    <S.information_div>
                      <S.CalenderIcon></S.CalenderIcon>
                      <S.information_font>날짜</S.information_font>
                    </S.information_div>
                    <S.information_div>
                      <S.langeIcon></S.langeIcon>
                      <S.information_font>언어</S.information_font>
                    </S.information_div>
                  </S.information>
                  <S.tag_div>
                    <S.tag>질문</S.tag>
                    <S.tag_major>백엔드</S.tag_major>
                  </S.tag_div>
                </S.main_left>
                <S.main_right>
                  <S.button onClick={onAmend}>수정</S.button>
                  <S.button onClick={onDel}>삭제</S.button>
                </S.main_right>
              </S.main>
            </S.check>
            <S.list_div>
              <S.list>1</S.list>
              <S.list>2</S.list>
              <S.list>3</S.list>
            </S.list_div>
          </S.body_bottom>
        </S.body>
      </S.Background>
    </>
  );
}

export default MyPage;
