import { styled } from "styled-components";
import loginIcon from "../icons/loginIcon";
import loginGo from "../icons/loginGo";
import MainCalender from "../icons/MainCalender";
import MainPeople from "../icons/MainPeople";
import Mainlange from "../icons/Mainlange";

export const Background = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  padding: 125px 0px 100px 0px;
  display: flex;
`;

export const body = styled.div`
  width: 888px;
  height: 730px;
  background-color: white;
  border-radius: 20px;
  margin: 0px 363px 0px 669px;
  box-shadow: 4px 8px 10px gray;
`;

export const Login = styled.div`
  position: fixed;
  width: 276px;
  height: 120px;
  background-color: white;
  border-radius: 20px;
  margin: 0px 15px 0px 363px;
  box-shadow: 4px 8px 10px gray;
`;

export const Mypage = styled.div`
  position: fixed;
  width: 276px;
  height: 207px;
  background-color: white;
  border-radius: 20px;
  margin: 0px 15px 0px 363px;
  box-shadow: 4px 8px 10px gray;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const font = styled.div`
  font-size: 14px;
  margin: 15px 0px 0px 18px;
`;

export const login_div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 15px 0px 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const mypage_div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 15px 0px 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #E1E2E3;
  &:hover {
    cursor: pointer;
  }
`;

export const icon = styled(loginIcon)`
  width: 40px;
  height: 40px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const login_font = styled.div`
  font-size: 16px;
  margin: 0px 30px;
`;

export const login_id = styled.div`
  font-size: 16px;
  margin: 0px 30px;
`;

export const login_label = styled.div`
  font-size: 14px;
  margin: 0px 30px;
`;

export const login_value = styled.div`
  font-size: 12px;
  margin: 0px 30px;
`;

export const loginImg = styled(loginGo)`
  width: 9.19px;
  height: 13.89px;
`;

export const Major = styled.select`
  font-size: 16px;
  border: 1.44px solid #ababab;
  border-radius: 10px;
  width: 128px;
  height: 36px;
  margin-right: 45px;
  text-align: center;
`;

export const Major_option = styled.option`
  font-size: 16px;
`;

export const border = styled.div`
  border-bottom: 1px solid #e1e2e3;
  height: 78.28px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const List_mypage = styled.div`
  position: fixed;
  width: 276px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  margin: 250px 15px 0px 363px;
  box-shadow: 4px 8px 10px gray;
`;

export const List_login = styled.div`
  position: fixed;
  width: 276px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  margin: 150px 15px 0px 363px;
  box-shadow: 4px 8px 10px gray;
`;

export const list_border = styled.div`
  border-bottom: 1px solid #e1e2e3;
  width: 240px;
  height: 45px;
  margin-left: 18px;
  color: #191c1b;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const li = styled.div`
  font-size: 14px;
  color: #767676;
  margin: 20px 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const main = styled.div`
  width: 744px;
  height: 85px;
  border-bottom: 1px solid #e1e2e3;
  padding: 20px 0px;
  margin: 0px 72px 0px 72px;
  &:hover {
    cursor: pointer;
  }
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

export const create = styled.div`
  position: fixed;
  width: 276px;
  height: 38px;
  background-color: #191c1b;
  border-radius: 10px;
  margin: 450px 15px 0px 363px;
  box-shadow: 4px 8px 10px gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
