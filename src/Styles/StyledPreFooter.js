import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/wave2.svg"

export const StyledPreFooter = styled.div `
  text-align: center;
  height: 500px;
 
  justify-content: space-around; 
  display: flex;
  width: 100%; //ancho
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10px ;
  padding-bottom: 12px ;
`;

export const StyledCard = styled.div `
  height: 400px;
  width: 400px;
  background-color: #EAE9E9;
  border-radius: 4px;
  padding: 2em;
  margin: 3%;
  text-align: center;
  align-items: center;
  transition: all 0.7s;
  cursor: pointer;
  text-decoration: none;
  
  overflow: hidden;
  border-radius: 10px;
  
 
  
  
  p {
    text-align: center;
    font-size: 15px;
    font-weight: bold ;
    
  
  }

  h1{
    color: #6F8AB7;
    
  }

  :hover{
    background-color: ${allColors.colors[0]} ;
    transform: rotateZ(3deg) ;
    height: 430px;
    width: 440px;
    
    p{
      color:  ${allColors.colors[1]};
    }
    h1{
      color: ${allColors.colors[7]} ;
    }
    center{
      color:  ${allColors.colors[1]};
    }
    
  }
`;
