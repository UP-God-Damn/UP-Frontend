import { styled } from "styled-components";
import Comment from "../icons/comment";
import MainCalender from "../icons/MainCalender";
import Mainlange from "../icons/Mainlange";

export const Background = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  padding: 110px 0px 80px 0px;
`;

export const Body = styled.div`
  width: 993px;
  background-color: white;
  border-radius: 20px;
  margin: 0px 363px 0px 363px;
  box-shadow: 4px 8px 10px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 100px;
`;

export const title_div = styled.div`
  border-bottom: 1px solid #e1e2e3;
  width: 990px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const tag = styled.div`
  background-color: #e1837b;
  /* background-color: #9DD679; */
  width: 80px;
  height: 30px;
  border-radius: 20px;
  font-size: 14px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const information = styled.div`
  display: flex;
  align-items: center;
`;

export const information_div = styled.div`
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalenderIcon = styled(MainCalender)`
  width: 15px;
  height: 15px;
`;

export const PeopleIcon = styled.img`
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
`;

export const langeIcon = styled(Mainlange)`
  width: 15px;
  height: 15px;
`;

export const information_font = styled.div`
  margin-left: 10px;
  font-size: 14px;
  color: #767676;
`;

export const body_main = styled.div``;

export const main_text = styled.pre`
  font-size: 12px;
  color: #191c1b;
  padding: 10px 15px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const comment_div = styled.div`
  width: 990px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const comment = styled.textarea`
  width: 930px;
  height: 90px;
  border: none;
  border-radius: 10px;
  resize: none;
  font-family: 'Noto Sans KR', sans-serif;
  &:focus {
    outline: none;
  }
`;

export const Plus = styled.button`
  background-color: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const CommentImg = styled(Comment)`
  width: 30px;
  height: 26.67px;
`;

export const li_div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const comment_li = styled.div`
  margin-top: 15px;
  width: 950px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 15px 20px;
`;

export const comment_id = styled.div`
  margin-left: 5px;
  font-size: 14px;
  color: #767676;
`;

export const comment_date = styled.div`
  margin-left: 5px;
  font-size: 10px;
  color: #767676;
`;

export const comment_font = styled.div`
  font-size: 12px;
  color: #191c1b;
  margin: 5px 10px 0px 0px;
  width: 900px;
`;

export const comment_text = styled.textarea`
  font-size: 12px;
  color: #191c1b;
  margin: 5px 10px 0px 0px;
  height: 100px;
  width: 900px;
  border-radius: 10px;
  border: none;
  resize: none;
  font-family: 'Noto Sans KR', sans-serif;
  &:focus {
    outline: none;
  }
`;

export const one = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #191c1b;
  margin: 0px 1px;
`;

export const one_div = styled.div`
  height: 15px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const click_retouch = styled.div`
  background-color: white;
  border-radius: 5px 5px 0px 0px;
  width: 90px;
  height: 20px;
  font-size: 10px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const click_del = styled.div`
  background-color: white;
  border-radius: 0px 0px 5px 5px;
  width: 90px;
  height: 20px;
  color: #da6156;
  font-size: 10px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const click_save = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 90px;
  height: 20px;
  font-size: 10px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const click_div = styled.div`
  display: flex;
`;

export const click_dis = styled.div`
  display: flex;
  flex-direction: column;
`;

export const div = styled.div`
  width: 1000px;
`;

export const Img = styled.img`
  width: 990px;
`;
