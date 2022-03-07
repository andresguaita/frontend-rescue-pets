import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyleNavBar = styled.nav`
background-color: ${allColors.colors[3]} ;
  padding: 0px;
  position: relative;
  z-index: 100;
  width: 100%;
  height: 14%;
  display: flex ;
  flex-direction: row-reverse;
 align-items: center;
 
`;

export const Divmenu = styled.div`
  display: flex;
  /* padding-right: 3rem; */
  float: right;
  font-size: 15px;
  text-decoration: none;
  font-weight: bold;
  margin:0px;
 align-items: center ;
  margin-right: 3rem;
 

`;

export const StyleLi = styled.li`
  margin: 1em;
  display: flex;
  
  
  white-space: nowrap;
  a {
    color: white;
   
    display: flex;
   
  }
     
  
 
  &:hover {
    a {
      color: ${allColors.colors[7]};
     
    }
  }
  
 

 


`;
