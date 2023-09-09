import { styled } from "styled-components";
import MainCalender from "../icons/MainCalender";
import MainPeople from "../icons/MainPeople";
import Mainlange from "../icons/Mainlange";
import profile from "../icons/profile";

export const Background = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  padding: 60px 0px 30px 0px;
`;

export const body = styled.div`
  margin: 0px 363px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const body_head = styled.div`
  width: 1193px;
  height: 75px;
  padding: 0px 0px 10px 0px;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const mypage_font = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const logout = styled.button`
  background-color: #191c1b;
  width: 89.29px;
  height: 30px;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

export const body_top = styled.div`
  display: flex;
  width: 1193px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  margin: 0px 363px 0px 363px;
  box-shadow: 4px 8px 10px gray;
  display: flex;
  align-items: center;
`;

export const label_div = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const label = styled.div`
  font-size: 16px;
  margin: 10px 0px 10px 40px;
`;

export const body_bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 1193px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  margin: 30px 363px 0px 363px;
  box-shadow: 4px 8px 10px gray;
`;

export const story = styled.div`
  font-size: 20px;
  margin: 25px 0px 0px 20px;
`;

export const line = styled.div`
  border-top: 3px solid #191c1b;
  width: 55px;
  margin: 9px 0px 0px 20px;
`;

export const border = styled.div`
  border-bottom: 1px solid #e1e2e3;
  width: 990px;
  height: 50px;
  margin-left: 100px;
  padding-bottom: 15px;
`;

export const check = styled.div`
  display: flex;
  margin: 10px 100px;
  width: 990px;
  align-items: center;
  flex-direction: column;
`;

export const button = styled.button`
  width: 72px;
  height: 30px;
  font-size: 14px;
  color: white;
  border-radius: 10px;
  background-color: #191c1b;
  border: none;
  margin: 0px 15px;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

export const main = styled.div`
  width: 1050px;
  height: 85px;
  border-bottom: 1px solid #e1e2e3;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
`;

export const main_left = styled.div`
  height: 85px;
  cursor: pointer;
`;

export const main_right = styled.div`
  height: 85px;
  display: flex;
  align-items: end;
`;

export const title = styled.div`
  font-size: 24px;
  font-weight: bold;
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

export const PeopleIcon = styled(MainPeople)`
  width: 15px;
  height: 16.67px;
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

export const tag_div = styled.div`
  display: flex;
  align-items: center;
`;

export const tag = styled.div`
  width: 52.56px;
  height: 17.92px;
  background-color: #e1837b;
  /* background-color: #9DD679; */
  border-radius: 12px;
  font-size: 10.75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const tag_major = styled.div`
  height: 17.92px;
  /* background-color: #9DD679; */
  border-radius: 12px;
  font-size: 10.75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #191c1b;
  margin-left: 15px;
  padding: 0px 15px;
`;

export const plus = styled.div`
  margin: 10px 0px;
  text-align: center; 
  color: #191c1b;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 30px;
`;

export const imgSrc = styled(profile)``;
