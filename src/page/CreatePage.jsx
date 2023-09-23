import React, { useState, useRef, useEffect } from "react";
import * as S from "../style/Create";
import axios from "axios";

function CreatePage() {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({
    title: "",
    content: "",
    language: "",
    state: "",
    major: "",
  });
  const formData = new FormData();
  const fileInput = document.querySelector("#fileInput");
  const imageInputRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [idData, setIdData] = useState("");

  const onRefresh = () => {
    const token = sessionStorage.getItem("refreshToken");
    axios
      .post(`${API_BASE_URL}/user/refresh`, "", {
        headers: {
          "Refresh-Token": `${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        const { accessToken, refreshToken } = res.data;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const formD = () => {
    if (fileInput) {
      formData.append("image", fileInput.files[0]);
    }
    serverFormData();
  };

  useEffect(() => {
    if (idData !== "" && imgSrc !== "") {
      formD();
    } else {
      if (idData !== "") {
        alert("등록되었습니다.");
        window.location.assign("/");
      }
    }
  }, [idData, imgSrc]);

  const server = () => {
    const token = sessionStorage.getItem("accessToken");
    axios
      .post(`${API_BASE_URL}/post`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIdData(res.data);
      })
      .catch((err) => {
        // console.error(err);
        if (err.response && err.response.status === 401) {
          sessionStorage.removeItem("accessToken");
          onRefresh();
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  const serverFormData = () => {
    const token = sessionStorage.getItem("accessToken");
    axios
      .post(`${API_BASE_URL}/post/postImage/${idData.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert("등록되었습니다.");
        window.location.assign("/");
      })
      .catch((err) => {
        // console.error(err);
        if (err.response && err.response.status === 401) {
          sessionStorage.removeItem("accessToken");
          onRefresh();
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

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const onCreate = () => {
    if (data.title.length >= 5) {
      if (data.content.length >= 20) {
        if (data.language !== "") {
          if (data.major !== "") {
            if (data.state !== "") {
              if (window.confirm("등록하시겠습니까?")) {
                server();
              } else {
                alert("취소되었습니다.");
              }
            } else {
              alert("분류를 확인해주세요.");
            }
          } else {
            alert("전공을 확인해주세요.");
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
            placeholder="제목을 입력해주세요 (5~25자)"
            maxLength="25"
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
              placeholder="사용한 프로그래밍 언어를 입력해주세요"
            ></S.language_input>
          </S.language>
          <S.major>
            <S.major_label>전공</S.major_label>
            <S.major_select onChange={onChange} id="major" name="major">
              <S.major_option value="">전공을 선택해주세요</S.major_option>
              <S.major_option value="FRONTEND">프론트엔드</S.major_option>
              <S.major_option value="BACKEND">백엔드</S.major_option>
              <S.major_option value="EMBEDDED">임베디드</S.major_option>
              <S.major_option value="FLUTTER">플러터</S.major_option>
              <S.major_option value="IOS">IOS</S.major_option>
              <S.major_option value="AOS">안드로이드</S.major_option>
              <S.major_option value="DEVOPS">DEVOPS</S.major_option>
            </S.major_select>
          </S.major>
          <S.tag>
            <S.tag_label>분류</S.tag_label>
            <S.tag_select onChange={onChange} id="state" name="state">
              <S.tag_option value="">해결 / 질문</S.tag_option>
              <S.tag_option value="SOLUTION">해결</S.tag_option>
              <S.tag_option value="QUESTION">질문</S.tag_option>
            </S.tag_select>
          </S.tag>
        </S.two>
        <S.contents>
          <S.contents_label>내용</S.contents_label>
          <S.contents_input
            onChange={onChange}
            id="content"
            name="content"
            placeholder="내용을 입력해주세요 (20~10000자)"
            maxLength="10000"
          ></S.contents_input>
        </S.contents>
        <S.Img_label>사진</S.Img_label>
        <S.Img_div>
          {imgSrc !== "" ? (
            <img src={imgSrc} height="200px"></img>
          ) : (
            <S.Img onClick={handleImageClick}>
              <S.plus_Img></S.plus_Img>
            </S.Img>
          )}
        </S.Img_div>
        <S.button onClick={onCreate}>등록하기</S.button>
      </S.Body>
      <S.input
        type="file"
        accept="image/png, image/jpeg"
        ref={imageInputRef}
        onChange={handleChange}
        id="fileInput"
      />
    </S.Background>
  );
}

export default CreatePage;
