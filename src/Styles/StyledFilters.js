import styled from "styled-components";
import allColors from "../variables/Colors";
export const Container = styled.div`
  display: flex;
  margin-top: 2%;
  justify-content: center;
  padding:25px;
`;
export const SelectStyle = styled.select`
  width: 100%;
  height: 50px;
  background: ${allColors.colors[7]};
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  border-top:0px;
  border-left: 0px;
  border-right:0px;
  border-color: ${allColors.colors[3]};
  border-width: 3px;
  border-radius: 5px;
  cursor: pointer;
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;



export const SelectInput = styled.input`
  width: 100%;
  height: 50px;
  background: ${allColors.colors[7]};
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  border-top:0px;
  border-left: 0px;
  border-right:0px;
  border-color: ${allColors.colors[3]};
  border-width: 3px;
  border-radius: 5px;
  cursor: pointer;
  
`;
