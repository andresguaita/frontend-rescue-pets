import styled from "styled-components";
import allColors from "../variables/Colors";


export const StyleInput = styled.input`
  width: 100%;
  height: 30px;
  background: ${allColors.colors[7]};
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  border-top:0px;
  border-left: 0px;
  border-right:0px;
  border-color: ${allColors.colors[8]};
  border-width: 3px;
  border-radius: 5px;
  justify-content: center ;
  align-items:  center;
  cursor: pointer;
  
`;



export const StyleInputMin = styled.input`
  width: 60%;
  height: 35px;
  background: ${allColors.colors[7]};
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  border-top:0px;
  border-left: 0px;
  border-right:0px;
  border-color: ${allColors.colors[8]};
  border-width: 3px;
  border-radius: 5px;
  position: relative;
  bottom: 12px;
  
  
`;
