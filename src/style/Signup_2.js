import { styled } from "styled-components";
import img from "../icons/img";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Login_font = styled.div`
  font-size: 40px;
  margin-bottom: 25px;
  font-weight: bold;
`;

export const image_div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const inpor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const label = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #191c1b;
  margin-top: 30px;
  margin-left: 10px;
`;

export const image = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const image_font = styled.div`
  font-size: 12px;
  color: #191c1b;
  margin-top: 10px;
`;

export const font = styled.div`
  font-size: 12px;
  color: #e1837b;
  margin-top: 12px;
`;

export const signup_button = styled.button`
  margin-top: 70px;
  width: 500px;
  height: 50px;
  background-color: #191c1b;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
  &:active {
    background-color: #191c1b;
    cursor: pointer;
  }
`;

export const Img = styled(img)`
  width: 45px;
  height: 45px;
`;

export const input = styled.input`
  display: none;
`;