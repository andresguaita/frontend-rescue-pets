import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/wave2.svg"

export const StyledDetails = styled.div`
  //Contenedor
  height: 100%;
  display: flex;
  color: ${allColors.colors[8]};
  align-items: center;
  justify-content: space-around;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10px;
  padding :40px;
  
`;

export const StyledDetailsLeft = styled.div`
  
  width: 50%;
  border-radius: 9px;
 margin:0;
  font-size: 35px;
  text-align: center;
 
 border-radius: 12px;
  h1 {
    color: ${allColors.colors[8]};
    font-size: 12px !important;
  }
 
`;

export const StyledDetailsRight = styled.div`
background-color: white;

  width: 50%;
  padding: 18px;
  margin:19px;
  box-shadow: 0 0 15px #B8B9BA;
  border-radius: 12px;
  h2 {
    color: ${allColors.colors[8]};
    font-size: 18px !important;
  }
  span {
    color: ${allColors.colors[2]};
    font-size: 13px !important;
    
  }

  h1 {
    color: ${allColors.colors[2]};
    font-size: 15px !important;
    text-align: center;
   
  }
  h3 {
    text-align: center;
    color: ${allColors.colors[3]};
    font-size: 33px !important;
  }

  p{
font-size : 15px;


  }
  
`;


export const Cuadro = styled.div`
 width: 100%;
 height:475px;
 overflow: hidden;
 border-radius: 19px;

`

export const Imgag = styled.img`
  width: 120%;
`

export const StyledDetails2 = styled.div`
  //Contenedor
  height: 90%;
  display: flex;
  color: ${allColors.colors[8]};
  align-items: center;
  justify-content: space-around;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  padding : 0 40px;
  
`;