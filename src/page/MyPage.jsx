import React, { useState, useEffect } from "react";
import * as S from "../style/My";
import axios from "axios";

function MyPage() {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState("");
  const [token, setToken] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [responseData, setResponseData] = useState([]);

  const onRefresh = () => {
    const token = sessionStorage.getItem("refreshToken");
    axios
      .post(`${API_BASE_URL}/user/refresh`, "", {
        headers: {
          "Refresh-Token": `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const { accessToken, refreshToken } = res.data;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  useEffect(() => {
    onGetPage();
    setToken(sessionStorage.getItem("accessToken"));
    onData();
  }, []);

  useEffect(() => {
    onGetPage();
  }, [pageNum]);

  const onGetPage = () => {
    axios
      .get(`${API_BASE_URL}/post/user?page=${pageNum}&size=4`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.postResponses);
        setResponseData(res.data.postResponses);
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          sessionStorage.removeItem("accessToken");
          onRefresh();
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  const onDelete = () => {
    const id = localStorage.getItem("id");
    axios
      .delete(`${API_BASE_URL}/post/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        alert("삭제되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          sessionStorage.removeItem("accessToken");
          onRefresh();
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  const onData = () => {
    axios
      .get(`${API_BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          sessionStorage.removeItem("accessToken");
          onRefresh();
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  const onServer = () => {
    axios
      .delete(`${API_BASE_URL}/user/logout`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");
        alert("로그아웃되었습니다.");
        window.location.assign("/");
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const onLogout = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      onServer();
    } else {
      alert("취소되었습니다.");
    }
  };

  const onPlus = () => {
    setPageNum(pageNum + 1);
  };

  const onMinus = () => {
    setPageNum(pageNum - 1);
  };

  const onView = () => {
    window.location.assign("/view");
  };

  const onAmend = (e) => {
    const postId = e.currentTarget.getAttribute("name");
    localStorage.setItem("id", postId);
    window.location.assign("/amend");
  };

  const onDel = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const postId = e.currentTarget.getAttribute("name");
      localStorage.setItem("id", postId);
      onDelete();
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
              <S.imgSrc src={data.profileImgeUrl}></S.imgSrc>
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
              {responseData.map((post) => (
                <S.main>
                  <S.main_left onClick={onView}>
                    <S.title>{post.title}</S.title>
                    <S.information>
                      <S.information_div>
                        <S.PeopleIcon></S.PeopleIcon>
                        <S.information_font>
                          {post.userNickname}
                        </S.information_font>
                      </S.information_div>
                      <S.information_div>
                        <S.CalenderIcon></S.CalenderIcon>
                        <S.information_font>
                          {post.createDate}
                        </S.information_font>
                      </S.information_div>
                      <S.information_div>
                        <S.langeIcon></S.langeIcon>
                        <S.information_font>{post.language}</S.information_font>
                      </S.information_div>
                    </S.information>
                    <S.tag_div>
                      <S.tag>{post.state}</S.tag>
                      <S.tag_major>{post.major}</S.tag_major>
                    </S.tag_div>
                  </S.main_left>
                  <S.main_right>
                    <S.button onClick={onAmend} name={post.id}>
                      수정
                    </S.button>
                    <S.button onClick={onDel} name={post.id}>
                      삭제
                    </S.button>
                  </S.main_right>
                </S.main>
              ))}
            </S.check>
            <S.plus_div>
              <S.plus onClick={onMinus}>이전</S.plus>
              <S.plus onClick={onPlus}>다음</S.plus>
            </S.plus_div>
          </S.body_bottom>
        </S.body>
      </S.Background>
    </>
  );
}

export default MyPage;
