import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledCard = styled.div`

  height: 210px ;
  width: 195px;
  background-color: ${allColors.colors[3]};
  border-radius: 4px;
  padding-top: 1em;
  margin: 1%;
  transition: top ease 0.5s;
  cursor: pointer;
  text-decoration: none;
  transition: ease-in 0.3s;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  background: #fff;
  text-align: center;
  text-decoration: none;
  
  align-self: start;

  
  &:hover {
  top: -2px;
  background-color:${allColors.colors[3]};
  color: red;
  text-decoration: none;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(0.89);
  h1{
    color: white;
  }
 

}
`;

export const StyledCardContainer = styled.div`
 display: inline-flex !important;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around; 
  text-align: center;
  width: 100%; 
  background-color: ${allColors.colors[8]};
 overflow: hidden;
  text-align: center;
  align-self: start;
  margin: 0px;
  padding: 18px;
  
 

  a{
    color:  ${allColors.colors[8]}
  }
  h1{
    text-align: center !important;
    padding: 3px;
    color: ${allColors.colors[3]};
    
  }
  
  p{
    text-align: center !important;
    color: ${allColors.colors[2]};
    font-size: 12px;
    
  }
`;

export const ImgCard = styled.img`
 height :74%;
image-orientation: flip;
 
`;


export const StyledInfo = styled.div`
color: ${allColors.colors[2]};
background-color: ${allColors.colors[8]};
text-align: center;
 
`;

export const StyledInfo2 = styled.div`
color: white;
background-color: ${allColors.colors[8]};
text-align: center;
 
`;
