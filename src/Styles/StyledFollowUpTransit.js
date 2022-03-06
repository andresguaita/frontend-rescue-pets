import styled from "styled-components";
import allColors from "../variables/Colors";

export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: block;
height: 100%;
  display: flex;
  color: ${allColors.colors[0]};
  align-items: center;
  justify-content: space-around;
  margin-top: 35px;
  padding :40px;

  
`

export const CenterChild = styled.div`
 display: block;
position: relative;
align-self: center;
justify-self: center;
font-size: 9px;
 overflow-x: auto; 
 display: block;
 border-spacing: 0;
 
 input {
   width: 50%;
 }

`

export const Table = styled.table`

border-radius: 3px ;
border-spacing: 0;
border-collapse: collapse;
overflow-x:auto;
border-spacing:0px; 
border-collapse: collapse;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;

th,
td {
border: 1px solid  white;
text-align: center;
padding: 8px;
padding-left: 4px;
padding-right: 4px;
font-size: 10px;

overflow-x:auto;
width:1%;
}

th {
background-color: #63ac44;
color: #ffffff;


}

td {
background-color: #ddf4ff;
}

form {
display: flex;
gap: 5px;
}

form td:last-child {
display: flex;
justify-content: space-evenly;
}

form * {
font-size: 28px;
}
`