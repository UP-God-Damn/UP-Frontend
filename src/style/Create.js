import { styled } from "styled-components";
import returnImg from "../icons/returnImg";
import plus from "../icons/plus";

export const Background = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  padding: 125px 0px 100px 0px;
`;

export const input = styled.input`
  display: none;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Body = styled.div`
  width: 1053px;
  height: 900px;
  background-color: white;
  border-radius: 20px;
  margin: 0px 363px 0px 363px;
  box-shadow: 4px 8px 10px gray;
  display: flex;
  flex-direction: column;
  padding: 30px 70px;
`;

export const return_div = styled.div`
  width: 78px;
  height: 23px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const return_Img = styled(returnImg)`
  width: 16px;
  height: 12px;
`;

export const return_font = styled.div`
  color: #767676;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
`;

export const title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const title_label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: #191c1b;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const title_input = styled.input`
  width: 1010px;
  height: 45px;
  border-radius: 10px;
  padding: 0px 20px;
  border: 1px solid #e1e2e3;
  color: #191c1b;
  font-family: "Noto Sans KR", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const two = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const language = styled.div`
  display: flex;
  flex-direction: column;
`;

export const language_div = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #191c1b;
`;

export const language_label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: #191c1b;
  margin: 0px 10px 5px 5px;
`;

export const language_input = styled.input`
  width: 580px;
  height: 45px;
  border-radius: 10px;
  padding: 0px 20px;
  border: 1px solid #e1e2e3;
  color: #191c1b;
  font-family: "Noto Sans KR", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const major = styled.div`
  display: flex;
  flex-direction: column;
`;

export const major_label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: #191c1b;
  margin: 0px 10px 5px 35px;
`;

export const major_select = styled.select`
  width: 180px;
  height: 44px;
  border-radius: 10px;
  margin: 0px 0px 0px 30px;
  border: 1px solid #e1e2e3;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const major_option = styled.option`
  font-family: "Noto Sans KR", sans-serif;
`;

export const tag = styled.div`
  display: flex;
  flex-direction: column;
`;

export const tag_label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: #191c1b;
  margin: 0px 10px 5px 35px;
`;

export const tag_select = styled.select`
  width: 180px;
  height: 44px;
  border-radius: 10px;
  margin: 0px 0px 0px 30px;
  border: 1px solid #e1e2e3;
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const tag_option = styled.option`
  font-family: "Noto Sans KR", sans-serif;
`;

export const contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const contents_label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: #191c1b;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const contents_input = styled.textarea`
  width: 1010px;
  height: 290px;
  border-radius: 10px;
  padding: 0px 20px;
  border: 1px solid #e1e2e3;
  color: #191c1b;
  diplay: flex;
  resize: none;
  font-family: "Noto Sans KR", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const button = styled.button`
  width: 1050px;
  height: 50px;
  border-radius: 10px;
  background-color: #191c1b;
  border: none;
  color: white;
  margin-top: 35px;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const Img_label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: #191c1b;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const Img_div = styled.div`
  display: flex;
  align-items: center;
`;

export const Img_input = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

export const Img = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #e1e2e3;
  border-radius: 10px;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const plus_Img = styled(plus)``;
