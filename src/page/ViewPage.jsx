import React, { useEffect, useState } from "react";
import * as S from "../style/View";
import axios from "axios";

function ViewPage() {
  // const API_BASE_URL = process.env.REACT_APP_API_URL;
  const API_BASE_URL = "http://13.209.66.252:8080";
  const [comment, setComment] = useState("");
  const [del, setDel] = useState(false);
  const [re, setRe] = useState(false);
  const [commentView, setCommentView] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    onData();
  }, []);

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
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
      });
  };

  const commentPlus = () => {
    if (comment.length >= 5) {
      if (window.confirm("댓글을 입력하시겠습니까?")) {
        alert("입력되었습니다.");
      } else {
        alert("취소되었습니다.");
      }
    } else {
      alert("글을 확인해주세요.");
    }
  };

  const onCommentV = () => {
    setCommentView(true);
  };

  const onRetouch = () => {
    setRe(true);
  };

  const onSave = () => {
    if (window.confirm("댓글을 수정하시겠습니까?")) {
      alert("수정되었습니다.");
      setRe(false);
      setDel(false);
    } else {
      alert("취소되었습니다.");
    }
  };

  const onDelete = () => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };

  const onOne = () => {
    setDel(!del);
  };

  const ChangeComment = (input) => {
    setComment(input.target.value);
  };

  return (
    <S.Background>
      <S.Body>
        <S.title_div>
          <S.title>{data.title}</S.title>
        </S.title_div>
        <S.title_div>
          <S.information>
            <S.information_div>
              <S.PeopleIcon src="profileImage"></S.PeopleIcon>
              <S.information_font>{data.userNickname}</S.information_font>
            </S.information_div>
            <S.information_div>
              <S.CalenderIcon></S.CalenderIcon>
              <S.information_font>{data.createDate}</S.information_font>
            </S.information_div>
            <S.information_div>
              <S.langeIcon></S.langeIcon>
              <S.information_font>{data.language}</S.information_font>
            </S.information_div>
          </S.information>
          <S.tag>{data.state}</S.tag>
        </S.title_div>
        <S.body_main>
          <S.main_text>{data.content}</S.main_text>
          <S.comment_div>
            <S.comment
              maxlength="5000"
              onChange={ChangeComment}
              placeholder="댓글을 작성해주세요 (5 ~ 5000자)"
            ></S.comment>
            <S.Plus onClick={commentView ? commentPlus : onCommentV}>
              <S.CommentImg></S.CommentImg>
            </S.Plus>
          </S.comment_div>
          {commentView ? (
            <S.comment_li style={{ height: re ? "150px" : "75px" }}>
              <S.li_div>
                <S.li_div>
                  <S.PeopleIcon></S.PeopleIcon>
                  <S.comment_id>댓글 작성자</S.comment_id>
                  <S.comment_date>댓글 작성 날짜</S.comment_date>
                </S.li_div>
                <S.one_div onClick={onOne}>
                  <S.one></S.one>
                  <S.one></S.one>
                  <S.one></S.one>
                </S.one_div>
              </S.li_div>
              <S.click_div>
                {re ? (
                  <S.comment_text>댓글 내용</S.comment_text>
                ) : (
                  <S.comment_font>댓글 내용</S.comment_font>
                )}
                {re ? (
                  <S.click_dis>
                    <S.click_save
                      onClick={onSave}
                      style={{ display: del ? "inline-block" : "none" }}
                    >
                      저장하기
                    </S.click_save>
                  </S.click_dis>
                ) : (
                  <S.click_dis>
                    <S.click_retouch
                      onClick={onRetouch}
                      style={{ display: del ? "inline-block" : "none" }}
                    >
                      수정하기
                    </S.click_retouch>
                    <S.click_del
                      onClick={onDelete}
                      style={{ display: del ? "inline-block" : "none" }}
                    >
                      삭제하기
                    </S.click_del>
                  </S.click_dis>
                )}
              </S.click_div>
            </S.comment_li>
          ) : (
            <div></div>
          )}
        </S.body_main>
      </S.Body>
    </S.Background>
  );
}

export default ViewPage;
