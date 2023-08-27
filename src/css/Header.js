import { styled } from "styled-components";
import Logo from "../icons/logo";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: white;
`;

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
  margin: 18px 0px 0px 0px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;
