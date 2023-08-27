import React, { useState, useRef } from "react";
import * as S from "../css/Create";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [main, setMain] = useState("");
  const [langu, setLangu] = useState("");
  const [major, setMajor] = useState("");
  const [tag, setTag] = useState("");
  const imageInputRef = useRef(null);
  const [imgSrc, setImgSrc] = useState([]);

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
    if (title.length >= 3) {
      if (main.length >= 20) {
        if (langu !== "") {
          if (major !== "") {
            if (tag !== "") {
              if (window.confirm("등록하시겠습니까?")) {
                alert("등록되었습니다.");
                window.location.assign("/");
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

  const ChangeLanguage = (input) => {
    setLangu(input.target.value);
  };

  const ChangeTitle = (input) => {
    setTitle(input.target.value);
  };

  const ChangeMain = (input) => {
    setMain(input.target.value);
  };

  const onMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const onTagChange = (event) => {
    setTag(event.target.value);
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
            onChange={ChangeTitle}
            type="text"
            placeholder="제목을 입력해주세요 (3~70자)"
            maxlength="70"
          ></S.title_input>
        </S.title>
        <S.two>
          <S.language>
            <S.language_div>
              <S.language_label>사용언어</S.language_label>※ 공백없이 모두
              소문자로 입력해주세요
            </S.language_div>
            <S.language_input
              onChange={ChangeLanguage}
              type="text"
              placeholder="사용한 프로그래밍 언어를 입력해주세요"
            ></S.language_input>
          </S.language>
          <S.major>
            <S.major_label>전공</S.major_label>
            <S.major_select onChange={onMajorChange}>
              <S.major_option value="">전공을 선택해주세요</S.major_option>
              <S.major_option value="프론트엔드">프론트엔드</S.major_option>
              <S.major_option value="백엔드">백엔드</S.major_option>
              <S.major_option value="디자인">디자인</S.major_option>
              <S.major_option value="임베디드">임베디드</S.major_option>
              <S.major_option value="플러터">플러터</S.major_option>
              <S.major_option value="정보보안">정보보안</S.major_option>
              <S.major_option value="게임개발">게임개발</S.major_option>
              <S.major_option value="AI">AI</S.major_option>
              <S.major_option value="IOS">IOS</S.major_option>
              <S.major_option value="안드로이드">안드로이드</S.major_option>
              <S.major_option value="기타">기타</S.major_option>
            </S.major_select>
          </S.major>
          <S.tag>
            <S.tag_label>분류</S.tag_label>
            <S.tag_select onChange={onTagChange}>
              <S.tag_option value="">해결 / 질문</S.tag_option>
              <S.tag_option value="해결">해결</S.tag_option>
              <S.tag_option value="질문">질문</S.tag_option>
            </S.tag_select>
          </S.tag>
        </S.two>
        <S.contents>
          <S.contents_label>내용</S.contents_label>
          <S.contents_input
            onChange={ChangeMain}
            placeholder="내용을 입력해주세요 (20~10000자)"
            maxlength="10000"
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
