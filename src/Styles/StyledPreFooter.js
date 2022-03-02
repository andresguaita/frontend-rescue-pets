import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/wave2.svg"

export const StyledPreFooter = styled.div `
  text-align: center;
  height: 550px;
 
  justify-content: space-around; 
  display: flex;
  width: 100%; //ancho
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledCard = styled.div `
  height: 360px;
  width: 398px;
  background-color: #EAE9E9;
  border-radius: 4px;
  padding: 2em;
  margin: 3%;
  text-align: center;
  align-items: center;
  transition: top ease 0.5s;
  cursor: pointer;
  text-decoration: none;
  transition: ease-in 0.3s;
  overflow: hidden;
  border-radius: 10px;
 
 
  
  
  p {
    text-align: left;
    padding: 7px;
    font-size: 12px;
    
  }

  h1{
    color: #6F8AB7;
    
  }
`;
