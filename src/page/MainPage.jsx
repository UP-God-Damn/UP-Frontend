import React, { useState, useEffect } from "react";
import * as S from "../style/Main";
import axios from "axios";

function MainPage() {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const [major, setMajor] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [data, setData] = useState({});
  const [token, setToken] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [pageNum, setPageNum] = useState(0);

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
    const titleSearch = localStorage.getItem("search");
    if (major || selectedTag || titleSearch) {
      onGetSearch();
    } else {
      onGetPage();
    }
  }, [selectedTag, major, pageNum]);

  const onGetSearch = () => {
    const titleSearch = localStorage.getItem("search");
    axios
      .get(
        `${API_BASE_URL}/post/search?title=${titleSearch}&state=${selectedTag}&major=${major}&page=${pageNum}&size=10`
      )
      .then((res) => {
        setResponseData(res.data.postResponses);
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const onGetPage = () => {
    axios
      .get(
        `${API_BASE_URL}/post/search?title=&state=&major=&page=${pageNum}&size=10`
      )
      .then((res) => {
        setResponseData(res.data.postResponses);
        console.log(res.data.postResponses);
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
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
        if (err.response && err.response.status === 401) {
          sessionStorage.removeItem("accessToken");
          if (sessionStorage.getItem("refreshToken")) {
            onRefresh();
          }
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  useEffect(() => {
    const titleSearch = localStorage.getItem("search");
    setToken(sessionStorage.getItem("accessToken"));
    console.log(titleSearch);
    if (titleSearch) {
      onGetSearch();
    } else {
      onGetPage();
    }
  }, []);

  useEffect(() => {
    onData();
  }, [token]);

  const onPlus = () => {
    setPageNum(pageNum + 1);
  };

  const onMinus = () => {
    setPageNum(pageNum - 1);
  };

  const onLogin = () => {
    localStorage.setItem("search", "");
    window.location.assign("/login");
  };

  const onMypage = () => {
    localStorage.setItem("search", "");
    window.location.assign("/mypage");
  };

  const onMessage = () => {
    localStorage.setItem("search", "");
    window.location.assign("/create");
  };

  const onView = (e) => {
    localStorage.setItem("search", "");
    const postId = e.currentTarget.getAttribute("name");
    localStorage.setItem("id", postId);
    window.location.assign("/view");
  };

  const onComment = () => {
    alert("로그인 후에 이용해주세요.");
  };

  const onMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleTagSelect = (tag) => {
    if (tag === selectedTag) {
      setSelectedTag("");
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <S.Background>
      {token ? (
        <S.Mypage>
          <S.font>MY PAGE</S.font>
          <S.mypage_div onClick={onMypage}>
            <S.Div>
              <S.Img>
                <S.imgSrc src={data.profileImgeUrl} />
              </S.Img>
              <S.login_id>{data.nickname}</S.login_id>
            </S.Div>
            <S.loginImg></S.loginImg>
          </S.mypage_div>
          <S.login_div>
            <S.login_label>내 활동</S.login_label>
            <S.login_value>작성글 {data.totalPosts}</S.login_value>
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
      {token ? (
        <S.List_mypage>
          <S.list_border>게시글 목록</S.list_border>
          <S.li
            style={{
              color: selectedTag === "SOLUTION" ? "#191c1b" : "#767676",
              fontWeight: selectedTag === "SOLUTION" ? "bold" : "regular",
              textDecoration: selectedTag === "SOLUTION" ? "underline" : "none",
            }}
            active={selectedTag === "SOLUTION"}
            onClick={() => handleTagSelect("SOLUTION")}
          >
            해결한 ERROR 해결책
          </S.li>
          <S.li
            style={{
              color: selectedTag === "QUESTION" ? "#191c1b" : "#767676",
              fontWeight: selectedTag === "QUESTION" ? "bold" : "regular",
              textDecoration: selectedTag === "QUESTION" ? "underline" : "none",
            }}
            active={selectedTag === "QUESTION"}
            onClick={() => handleTagSelect("QUESTION")}
          >
            해결하지 못한 ERROR 질문
          </S.li>
        </S.List_mypage>
      ) : (
        <S.List_login>
          <S.list_border>게시글 목록</S.list_border>
          <S.li>해결한 ERROR 해결책</S.li>
          <S.li>해결하지 못한 ERROR 질문</S.li>
        </S.List_login>
      )}
      {token ? (
        <S.create onClick={onMessage}>글 작성하기</S.create>
      ) : (
        <div></div>
      )}
      <S.body>
        <S.border>
          <S.Major onChange={onMajorChange}>
            <S.Major_option value="">전공</S.Major_option>
            <S.Major_option value="FRONTEND">프론트엔드</S.Major_option>
            <S.Major_option value="BACKEND">백엔드</S.Major_option>
            <S.Major_option value="EMBEDDED">임베디드</S.Major_option>
            <S.Major_option value="FLUTTER">플러터</S.Major_option>
            <S.Major_option value="IOS">IOS</S.Major_option>
            <S.Major_option value="AOS">안드로이드</S.Major_option>
            <S.Major_option value="DEVOPS">DEVOPS</S.Major_option>
          </S.Major>
        </S.border>
        {responseData.map((post) => (
          <S.main onClick={token ? onView : onComment} name={post.id}>
            <S.title>{post.title}</S.title>
            <S.information>
              <S.information_div>
                <S.PeopleIcon></S.PeopleIcon>
                <S.information_font>{post.userNickname}</S.information_font>
              </S.information_div>
              <S.information_div>
                <S.CalenderIcon></S.CalenderIcon>
                <S.information_font>{post.createDate}</S.information_font>
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
          </S.main>
        ))}
        <S.plus_div>
          <S.plus onClick={onMinus}>이전</S.plus>
          <S.plus onClick={onPlus}>다음</S.plus>
        </S.plus_div>
      </S.body>
    </S.Background>
  );
}

export default MainPage;
