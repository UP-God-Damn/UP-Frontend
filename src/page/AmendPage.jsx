import React, { useState, useEffect, useRef } from "react";
import * as S from "../style/Amend";
import axios from "axios";

function AmendPage() {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({
    title: "",
    content: "",
    language: "",
    state: "",
    major: "",
  });
  const [getData, setGetData] = useState("");
  const [imgSrc, setImgSrc] = useState("");

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
    console.log(getData);
    setImgSrc(getData.file);
  }, [getData]);

  useEffect(() => {
    onData();
  }, []);

  const onPatch = () => {
    const id = localStorage.getItem("id");
    axios
      .patch(`${API_BASE_URL}/post/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        alert("수정되었습니다.");
        window.location.assign("/");
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
    const id = localStorage.getItem("id");
    axios
      .get(`${API_BASE_URL}/post/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setGetData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const onRemove = () => {
    onCheck();
    if (data.title.length >= 3) {
      if (data.content.length >= 20) {
        if (data.language !== "") {
          if (window.confirm("수정하시겠습니까?")) {
            onPatch();
          } else {
            alert("취소되었습니다.");
          }
        } else {
          alert("사용언어를 입력해주세요.");
        }
      } else {
        alert("내용을 확인해주세요.");
      }
    } else {
      alert("제목을 확인해주세요.");
    }
  };

  const onCheck = (e) => {
    if (!data.title) {
      data.title = getData.title;
    }
    if (!data.content) {
      data.content = getData.content;
    }
    if (!data.language) {
      data.language = getData.language;
    }
    if (!data.state) {
      if (getData.state === "해결") {
        data.state = "SOLUTION";
      } else {
        data.state = "QUESTION";
      }
    }
    if (!data.major) {
      if (getData.major === "프론트엔드") {
        data.major = "FRONTEND";
      } else if (getData.major === "백엔드") {
        data.major = "BACKEND";
      } else if (getData.major === "임베디드") {
        data.major = "EMBEDDED";
      } else if (getData.major === "플러터") {
        data.major = "FLUTTER";
      } else if (getData.major === "IOS") {
        data.major = "IOS";
      } else if (getData.major === "안드로이드") {
        data.major = "ANDROID";
      } else {
        data.major = "DEVOPS";
      }
    }
    console.log(data);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onBack = () => {
    window.location.assign("/");
  };

  return (
    <S.Background>
      <S.Body>
        <S.return_div>
          <S.return_Img></S.return_Img>
          <S.return_font onClick={onBack}>돌아가기</S.return_font>
        </S.return_div>
        <S.title>
          <S.title_label>제목</S.title_label>
          <S.title_input
            onChange={onChange}
            type="text"
            id="title"
            name="title"
            maxLength="70"
            defaultValue={getData.title}
          ></S.title_input>
        </S.title>
        <S.two>
          <S.language>
            <S.language_div>
              <S.language_label>사용언어</S.language_label>※ 공백없이 모두
              소문자로 입력해주세요
            </S.language_div>
            <S.language_input
              onChange={onChange}
              type="text"
              id="language"
              name="language"
              defaultValue={getData.language}
            ></S.language_input>
          </S.language>
          <S.major>
            <S.major_label>전공</S.major_label>
            <S.major_select onChange={onChange} id="major" name="major">
              <S.major_option
                value="FRONTEND"
                selected={getData.major === "프론트엔드" ? "selected" : ""}
              >
                프론트엔드
              </S.major_option>
              <S.major_option
                value="BACKEND"
                selected={getData.major === "백엔드" ? "selected" : ""}
              >
                백엔드
              </S.major_option>
              <S.major_option
                value="EMBEDDED"
                selected={getData.major === "임베디드" ? "selected" : ""}
              >
                임베디드
              </S.major_option>
              <S.major_option
                value="FLUTTER"
                selected={getData.major === "플러터" ? "selected" : ""}
              >
                플러터
              </S.major_option>
              <S.major_option
                value="IOS"
                selected={getData.major === "IOS" ? "selected" : ""}
              >
                IOS
              </S.major_option>
              <S.major_option
                value="ANDROID"
                selected={getData.major === "안드로이드" ? "selected" : ""}
              >
                안드로이드
              </S.major_option>
              <S.major_option
                value="DEVOPS"
                selected={getData.major === "DEVOPS" ? "selected" : ""}
              >
                DEVOPS
              </S.major_option>
            </S.major_select>
          </S.major>
          <S.tag>
            <S.tag_label>분류</S.tag_label>
            <S.tag_select onChange={onChange} id="state" name="state">
              <S.tag_option
                value="SOLUTION"
                selected={getData.state === "해결" ? "selected" : ""}
              >
                해결
              </S.tag_option>
              <S.tag_option
                value="QUESTION"
                selected={getData.state === "질문" ? "selected" : ""}
              >
                질문
              </S.tag_option>
            </S.tag_select>
          </S.tag>
        </S.two>
        <S.contents>
          <S.contents_label>내용</S.contents_label>
          <S.contents_input
            onChange={onChange}
            id="content"
            name="content"
            maxLength="10000"
            defaultValue={getData.content}
          ></S.contents_input>
        </S.contents>
        <S.Img_label>사진</S.Img_label>
        <S.Img_div>
          {imgSrc !== "" ? (
            <img src={imgSrc} width="200px" height="200px"></img>
          ) : (
            <div></div>
          )}
        </S.Img_div>
        <S.button onClick={onRemove}>수정하기</S.button>
      </S.Body>
    </S.Background>
  );
}

export default AmendPage;
