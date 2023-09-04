import { styled } from "styled-components";
import Logo from "../icons/logo";

export const Background = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  padding: 125px 0px 100px 0px;
`;

export const Body = styled.div`
  display: flex;
  width: 1193px;
  height: 730px;
  background-color: white;
  border-radius: 20px;
  margin: 0px 363px 0px 363px;
  box-shadow: 4px 8px 10px gray;
`;

export const Body_left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 730px;
  border-radius: 20px 0px 0px 20px;
  background-color: #242424;
`;

export const LogoImg = styled(Logo)`
  width: 165.7px;
  height: 88.49px;
  margin-bottom: 25px;
`;

export const Body_right = styled.div`
  margin-left: 97px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body_left_font = styled.div`
  font-size: 17px;
  color: white;
`;

export const Login_font = styled.div`
  font-size: 40px;
  margin-bottom: 25px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0px;
`;

export const Label_font = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 401px;
  height: 50px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 0px 14px;
  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

export const Login = styled.button`
  font-size: 15px;
  background-color: black;
  color: white;
  width: 430px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 51px;
  margin-bottom: 7px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #191c1b;
  }
`;

export const font = styled.div`
  display: flex;
`;

export const font_story = styled.div`
  font-size: 15px;
  color: #ababab;
  margin-right: 5px;
`;

export const font_signup = styled.button`
  font-size: 15px;
  color: #191c1b;
  font-weight: bold;
  margin-left: 5px;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
    color: #ababab;
  }
`;

export const Gradation_1 = styled.div`
  position: absolute;
  border-radius: 0px 0px 0px 20px;
  width: 400px;
  height: 550px;
  left: 363px;
  top: 305px;
  background: radial-gradient(
    99.74% 59.74% at 0.08% 62.99%,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const Gradation_2 = styled.div`
  position: absolute;
  width: 465px;
  height: 395px;
  left: 500px;
  top: 460px;
  border-radius: 0px 0px 0px 0px;
  background: radial-gradient(
    79.74% 59.74% at 97.08% 62.99%,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
