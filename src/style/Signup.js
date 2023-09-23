import { styled } from "styled-components";

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

export const Label_div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0px;
`;

export const Label_font = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 478px;
  height: 50px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 0px 14px;
  font-family: 'Noto Sans KR', sans-serif;
  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

export const Id_div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input_Id = styled.input`
  width: 339px;
  height: 50px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 0px 14px;
  margin-right: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

export const check = styled.button`
  width: 126px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #191c1b;
  color: white;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
  &:active {
    background-color: #191c1b;
    cursor: pointer;
  }
`;

export const signup_button = styled.button`
  margin-top: 20px;
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
