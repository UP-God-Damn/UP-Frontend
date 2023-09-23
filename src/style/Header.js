import { styled } from "styled-components";
import Logo from "../icons/logo";
import SearchImg from "../icons/searchImg";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: white;
`;

export const search = styled.div`
  width: 600px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 0px 10px;
  margin: 10px 90px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const input = styled.input`
  width: 500px;
  height: 30px;
  border: none;
  background-color: #f0f0f0;
  font-family: 'Noto Sans KR', sans-serif;
  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

export const div = styled.div`
  display: flex;
`;

export const Search = styled(SearchImg)``;

export const Div = styled.div`
  margin: 0px 363px;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled(Logo)`
  width: 56.18px;
  height: 30px;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const LoginButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: white;
  margin-top: 18px;
  margin: 18px 15px 0px 0px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

export const SignupButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: white;
  margin: 18px 0px 0px 15px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

export const mypageButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: white;
  margin: 10px 0px 0px 0px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;
