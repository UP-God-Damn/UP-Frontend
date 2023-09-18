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
    const token = localStorage.getItem("refreshToken");
    axios
      .post(`${API_BASE_URL}/user/refresh`, "",{
        headers: {
          'Refresh-Token': `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const { accessToken, refreshToken } = res.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  useEffect(() => {
    onGetPage();
    setToken(localStorage.getItem("accessToken"));
    onData();
  }, []);

  useEffect(() => {
    onGetPage();
  }, [pageNum]);

  const onGetPage = () => {
    axios
      .get(`${API_BASE_URL}/post/user?page=${pageNum}&size=4`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setResponseData(res.data.postResponses);
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("accessToken");
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
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        alert("삭제되었습니다.");
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("accessToken");
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
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("accessToken");
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
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.localStorage.removeItem("accessToken");
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

  const onPlus = () => {
    setPageNum(pageNum + 1);
  };

  const onView = () => {
    window.location.assign("/view");
  };

  const onAmend = (e) => {
    const postId = e.currentTarget.getAttribute("name");
    localStorage.setItem("id", postId);
    window.location.assign("/amend");
  };

  const onDel = () => {
    if (window.confirm("삭제하시겠습니까?")) {
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
              {data.profileImgUrl ? (
                <img src={data.profileImgeUrl}></img>
              ) : (
                <S.imgSrc />
              )}
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
                    <S.button onClick={onDel}>삭제</S.button>
                  </S.main_right>
                </S.main>
              ))}
            </S.check>
            <S.plus onClick={onPlus}>더보기</S.plus>
          </S.body_bottom>
        </S.body>
      </S.Background>
    </>
  );
}

export default MyPage;
