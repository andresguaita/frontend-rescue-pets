import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledModal = styled.div`
  text-align: center;
  margin: 2px;
padding: 2px;
  position: fixed; 
  z-index: 100; 
  top: 24%;
  left: 27%;
  width: 40%; 
  height: 66%; 
  overflow: none; 
  background-color: rgb(255, 255, 255); 
  border: 2px;
  border-radius: 1em;
  opacity: 98%;
  text-transform: capitalize;
  border-radius: 6.5px;
  box-shadow: 0 0 15px gray;

  h2{
    color: ${allColors.colors[3]};
  }
`;

export const Styledselect= styled.select`
width: 50%;
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
`;