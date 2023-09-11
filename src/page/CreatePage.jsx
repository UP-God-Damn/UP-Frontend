import React, { useState, useRef, useEffect } from "react";
import * as S from "../style/Create";
import axios from "axios";

function CreatePage() {
    // const API_BASE_URL = process.env.REACT_APP_API_URL;
  const API_BASE_URL = "http://13.209.66.252:8080";
  const [data, setData] = useState({
    title: "",
    content: "",
    language: "",
    state: "",
    major: "",
  });
  const imageInputRef = useRef(null);
  const [imgSrc, setImgSrc] = useState([]);
  const formData = new FormData();
  const fileInput = document.querySelector("#fileInput");
  const [token, setToken] = useState("");
  const [idData, setIdData] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const formD = () => {
    if (fileInput) {
      formData.append("image", fileInput.files[0]);
    } else {
      formData.append("image", "");
    }
    server();
    serverFormData();
  };

  const server = () => {
    const token = localStorage.getItem("accessToken");
    axios
      .post(`${API_BASE_URL}/post`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setIdData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const serverFormData = () => {
    axios
      .post(
        `${API_BASE_URL}/post/postImage/${idData.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        alert("등록되었습니다.");
        window.location.assign("/");
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        setImgSrc((previmgsrc) => [...previmgsrc, e.target?.result]);
      }
    };
  };

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const onCreate = () => {
    if (data.title.length >= 3) {
      if (data.content.length >= 20) {
        if (data.language !== "") {
          if (data.major !== "") {
            if (data.state !== "") {
              if (window.confirm("등록하시겠습니까?")) {
                formD();
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
            placeholder="제목을 입력해주세요 (3~70자)"
            maxLength="70"
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
              <S.major_option value="ANDROID">안드로이드</S.major_option>
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
          {imgSrc.map((item, index) => (
            <S.Img_input src={item}></S.Img_input>
          ))}
          <S.Img onClick={handleImageClick}>
            <S.plus_Img></S.plus_Img>
          </S.Img>
        </S.Img_div>
        <S.button onClick={onCreate}>등록하기</S.button>
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

export default CreatePage;
