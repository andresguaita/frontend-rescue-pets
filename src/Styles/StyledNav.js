import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyleNavBar = styled.nav`
  padding: 0px;
  position: relative;
  z-index: 100;
  width: 100%;
  height: 14%;
 
 
`;

export const Divmenu = styled.div`
  display: flex;
  padding-right: 1px;
  float: right;
  font-size: 15px;
  text-decoration: none;
  font-weight: bold;
  margin:0px;
 
  
 

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
