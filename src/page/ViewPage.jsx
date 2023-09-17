import React, { useEffect, useState } from "react";
import * as S from "../style/View";
import axios from "axios";

function ViewPage() {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const [comment, setComment] = useState("");
  const [del, setDel] = useState(false);
  const [re, setRe] = useState(false);
  const [data, setData] = useState("");
  const [contentId, setContentId] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    onData();
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  const onData = () => {
    const id = localStorage.getItem("id");
    axios
      .get(`${API_BASE_URL}/post/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setComments(res.data.comments);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          alert("만료된 토큰입니다.");
          window.localStorage.removeItem("accessToken");
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  const onPlusComment = () => {
    const id = localStorage.getItem("id");
    const commentData = {
      id: id,
      content: comment,
    };
    axios
      .post(`${API_BASE_URL}/comment`, commentData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setContentId(res.data);
        console.log(res.data);
        alert("입력되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          alert("만료된 토큰입니다.");
          window.localStorage.removeItem("accessToken");
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  const onAmendComment = () => {
    const id = localStorage.getItem("id");
    const commentData = {
      id: id,
      content: comment,
    };
    axios
      .patch(`${API_BASE_URL}/comment`, commentData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("수정되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 401) {
          alert("만료된 토큰입니다.");
          window.localStorage.removeItem("accessToken");
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  const commentPlus = () => {
    if (comment.length >= 5) {
      if (window.confirm("댓글을 입력하시겠습니까?")) {
        onPlusComment();
      } else {
        alert("취소되었습니다.");
      }
    } else {
      alert("글을 확인해주세요.");
    }
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

  const onOne = (e) => {
    const postId = e.currentTarget.getAttribute("name");
    localStorage.setItem("commentId", postId);
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
              <S.PeopleIcon src={data.profileImage}></S.PeopleIcon>
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
          <S.Img
            src={data.file ? data.file : ""}
            style={{ display: data.file ? "inline-block" : "none" }}
          ></S.Img>
          <S.comment_div>
            <S.comment
              maxlength="5000"
              onChange={ChangeComment}
              placeholder="댓글을 작성해주세요 (5 ~ 5000자)"
            ></S.comment>
            <S.Plus onClick={commentPlus}>
              <S.CommentImg></S.CommentImg>
            </S.Plus>
          </S.comment_div>
          {comments.length > 0 ? (
            <div>
              {comments.map((item) => (
                <div key={item.id}>
                  {item.id === contentId ? (
                    <S.comment_li style={{ height: re ? "150px" : "75px" }}>
                      <S.li_div>
                        <S.li_div>
                          <S.PeopleIcon src={item.profileImage}></S.PeopleIcon>
                          <S.comment_id>{item.userNickname}</S.comment_id>
                          <S.comment_date>{item.createDate}</S.comment_date>
                        </S.li_div>
                        <S.one_div onClick={onOne} name={item.id}>
                          <S.one></S.one>
                          <S.one></S.one>
                          <S.one></S.one>
                        </S.one_div>
                      </S.li_div>
                      <S.click_div>
                        {re ? (
                          <S.comment_text
                            defaultValue={item.content}
                          ></S.comment_text>
                        ) : (
                          <S.comment_font>{item.content}</S.comment_font>
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
                    <S.comment_li style={{ height: re ? "150px" : "75px" }}>
                      <S.li_div>
                        <S.li_div>
                          <S.PeopleIcon src={item.profileImage}></S.PeopleIcon>
                          <S.comment_id>{item.userNickname}</S.comment_id>
                          <S.comment_date>{item.createDate}</S.comment_date>
                        </S.li_div>
                        <S.one_div onClick={onOne} name={item.id}>
                          <S.one></S.one>
                          <S.one></S.one>
                          <S.one></S.one>
                        </S.one_div>
                      </S.li_div>
                      <S.click_div>
                        {re ? (
                          <S.comment_text
                            defaultValue={item.content}
                          ></S.comment_text>
                        ) : (
                          <S.comment_font>{item.content}</S.comment_font>
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
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </S.body_main>
      </S.Body>
    </S.Background>
  );
}

export default ViewPage;
