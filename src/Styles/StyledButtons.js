import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyleButton = styled.button`
  margin: 1em;
  background-color: ${allColors.colors[8]};
  border-radius: 5px;
  height: 50px;
  font-size: 17px;
  padding: 10px;
  border: 0;
  font-weight: bold;
  color : white;
  cursor: pointer;
  a {
    color: white;
  }
  &:hover {
    background-color: ${allColors.colors[2]};
  }
`;


export const StyleButtonMini = styled.button`
  margin: 1em;
  background-color: ${allColors.colors[3]};
  border-radius: 5px;
  height: 40px;
  font-size: 17px;
  padding: 10px;
  border: 0;
  font-weight: bold;
  color : white;
  cursor: pointer;
  a {
    color: white;
  }
  &:hover {
    background-color: ${allColors.colors[2]};
  }
`;


export const StyleButtonUbicacion = styled.button`
  margin: 0em;
  background-color: ${allColors.colors[3]};
  border-radius: 5px;
  height: 50px;
  font-size: 12px;
  padding: 6px;
  border: 0;
  font-weight: bold;
  color : white;
  cursor: pointer;
  a {
    color: white;
  }
  &:hover {
    background-color: ${allColors.colors[2]};
  }
`;



export const StyleButtonMini2 = styled.button`
  margin: 1em;
  background-color: ${allColors.colors[8]};
  border-radius: 5px;
  height: 40px;
  font-size: 17px;
  padding: 10px;
  border: 0;
  font-weight: bold;
  color : white;
  position: relative;
  bottom: 9px;
  cursor: pointer;
  a {
    color: white;
  }
  &:hover {
    background-color: ${allColors.colors[2]};
  }
`;

export const StyleButtonAccepted = styled.button`
  margin: 1em;
  background-color: ${allColors.colors[8]};
  border-radius: 5px;
  width: 100px;
  height: 50px;
  font-size: 17px;
  padding: 10px;
  border: 0;
  font-weight: bold;
  color : white;
  cursor: pointer;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  a {
    color: white;
  }
  &:hover {
    background-color: ${allColors.colors[2]};
  }
`;

export const StyleButtonRejected = styled.button`
  margin: 1em;
  background-color: ${allColors.colors[1]};
  border-radius: 5px;
  width: 100px;
  height: 50px;
  font-size: 17px;
  padding: 10px;
  border: 0;
  font-weight: bold;
  color : white;
  cursor: pointer;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  a {
    color: white;
  }
  &:hover {
    background-color: ${allColors.colors[2]};
  }
`;

export const StyleButtonView = styled.button`
  width: 120px;
  font-size: 20px;
  border-radius: 10px;
  border-style: none;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  &:hover{
    background-color: ${allColors.colors[8]};
    position: absolute;
    z-index: 2;
    margin-left: -65px;
    margin-top: -28px;
    height: 60px;
    width: 130px;
  }
`;

export const StyleButtonBack = styled.button`
  margin: 1em;
  background-color: ${allColors.colors[3]};
  border-radius: 5px;
  width: 100px;
  height: 50px;
  font-size: 17px;
  padding: 10px;
  border: 0;
  font-weight: bold;
  color : white;
  cursor: pointer;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  a {
    color: white;
  }
  &:hover {
    background-color: ${allColors.colors[2]};
  }
`;
