import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/homeim2.svg"

export const StyledCard = styled.div`
  height: 390px ;
  width: 285px;
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
  box-shadow: 0 0 15px #ddd;
  background: #fff;
  text-align: center;
  text-decoration: none;
  align-self: start;


  &:hover {
  top: -2px;
  background-color:${allColors.colors[8]};
  color: #ffffff;
  text-decoration: none;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(0.89);
 

}
`

export const StyledCardContainer = styled.div`
  padding-top: 1em;
  text-align: center;
  width: 100%;
  color: ${allColors.colors[8]};
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around; 
  text-decoration: none;
  a{
    color:  ${allColors.colors[2]}
  }
  h1{
    text-align: center !important;
    padding: 1px;
    
  }
  
  p{
    text-align: center !important;
    color: ${allColors.colors[2]};
    font-size: 12px;
    
  }

`

export const StyledCardContainerFav = styled.div`
  padding-top: 1em;
  text-align: center;
  width: 100%;
  color: ${allColors.colors[8]};
  display: grid ;
  grid-template-columns: repeat(4, 1fr) ;
  text-decoration: none;
  background-image: url(${Img});
  justify-content: center ;
  align-items: center ;

  a{
    color:  ${allColors.colors[2]}
  }
  h1{
    text-align: center !important;
    padding: 1px;
    
  }
  
  p{
    text-align: center !important;
    color: ${allColors.colors[2]};
    font-size: 12px;
    
  }

`


export const StyledCardMini = styled.div`
  height: 230px ;
  width: 285px;
  background-color: ${allColors.colors[3]};
  border-radius: 4px;
  padding-top: 1em;
  margin: 1.5%;
  transition: top ease 0.5s;
  cursor: pointer;
  text-decoration: none;
  transition: ease-in 0.3s;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px #ddd;
  background: #fff;
  text-align: center;
  text-decoration: none;

  align-self: start;

  

  &:hover {
  top: -2px;
  background-color:${allColors.colors[8]};
  color: #ffffff;
  text-decoration: none;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(0.89);
 

}
`



export const ImgCard = styled.img`
 height :80%;
image-orientation: flip;

 
`;

export const ImgCardFlag = styled.img`
 height :30px;
image-orientation: flip;
 
`;
