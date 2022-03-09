import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledHeaderContainer = styled.div`
  padding-top: 8em;
  text-align: center;
  width: 100%;
  height: 70%;
  display: flex;
  margin: 1em;
`;

export const StyledImg = styled.img`
  width: 87%;
`;

export const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  width: 40%;
  border-radius: 9px;
  padding: 1em;
  color: ${allColors.colors[3]};
  h1{
    font-size: 55px;
  }
`;

export const StyledRight = styled.div`
  margin: 4px;
  width: 60%;

  border-radius: 9px;
  padding: 1em;
  font-size: 30px;
  color: beige;
`;
