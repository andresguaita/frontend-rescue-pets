import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledModal = styled.div`
display: flex;
align-items: center ;
justify-content: center ;
  text-align: center;
  margin: 2px;
  position: fixed; 
  z-index: 100; 
  top: 24%;
  left: 33%;
  width: 32%; 
  height: 66%; 
  overflow: none; 
  background-color: ${allColors.colors[0]}; 
  border: 2px;
  border-radius: 1em;
  opacity: 92%;
  border-radius: 6.5px;
  box-shadow: 0 0 15px gray;
  h2{
    color: ${allColors.colors[4]};
    font-size: 3.6rem ;
    font-weight: bold ;
    margin-bottom: 1.5rem ;
    font-family: "roboto"
  }
  span {
    font-size: 1.1rem ;
    font-weight: bold ;
    color: ${allColors.colors[7]};
    font-family: "roboto";
    letter-spacing: 1px ;
  }
  .campo {
      display: flex;
      margin-bottom: 2rem;
      align-items: center;
      label {
        flex-basis: 7rem;
        margin-left: 1rem;
        font-size: 1.2rem ;
        font-family: "roboto";
        color: ${allColors.colors[4]}
      }
      
    }
`;

export const Styledselect= styled.select`
width: 65%;
height: 40px;
background: #ddf4ff ;
color: gray ;
padding-left: 5px ;
margin-left: 10px ;
border-top: 0px ;
border-left: 0px ;
border-right: 0px ;
border-color: ${allColors.colors[8]} ;
border-width: 3px ;
border-radius: 5px ;


cursor: pointer;

option{
  font-size: 1.2rem ;
}
`;