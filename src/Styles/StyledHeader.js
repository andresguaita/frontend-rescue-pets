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
  margin: 5px;
  width: 40%;
  border-radius: 9px;
  padding: 1em;
  font-size: 38px;
  color: ${allColors.colors[3]};
 
`;

export const StyledRight = styled.div`
  margin: 4px;
  width: 60%;

  border-radius: 9px;
  padding: 1em;
  font-size: 30px;
  color: beige;
`;
