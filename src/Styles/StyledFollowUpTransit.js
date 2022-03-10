import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/wave2.svg"
import { Link } from 'react-router-dom'

export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: block;
height: 100%;
  display: flex;
  color: ${allColors.colors[0]};
  align-items: center;
  justify-content: space-around;
  /* margin-top: 35px;
  padding :40px; */
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
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

/* border-radius: 6px ; */
border-spacing: 0;
border-collapse: collapse;
border-spacing:0px; 
border-collapse: collapse;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;

th,
td {
border: 1px solid  white;
text-align: center;
padding: 8px;
padding-left: 4px;
padding-right: 4px;
font-size: 15px;
font-family: "roboto";
height: 0;
overflow:visible;
width:400px;
}

th {
background-color: #63ac44;
color: #ffffff;
overflow: visible;

}

td {
background-color: #ddf4ff;
overflow: visible;
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

export const Button = styled.button`
margin: 0.2em;
  background-color: ${allColors.colors[3]};
  border-radius: 3px;
  height: 28px;
  font-size: 15px;
  width: max-content;
  
  border: 0;
  font-weight: bold;
  color : white;
  text-align: center;
vertical-align: middle;
line-height: 1px; 
  cursor: pointer;
  a {
    color: white;
  }
  &:hover {
    background-color: ${allColors.colors[2]};
  }

`


export const BackStyl = styled.button`
/* margin-top: 2%; */
/* margin-left: 2%; */
background: none;
border: none;
padding: 0;
outline: inherit;
font-size: 50px;
/* font-family: 'Space Grotesk', sans-serif; */
font-weight: bold;
color: ${allColors.colors[3]};
width: 3%;
display: flex;
/* position: absolute; */
/* top: 2%; */
justify-content: left;
height: 100px;

    &:hover{
        cursor:pointer;
        color: ${allColors.colors[2]};
        transition: all .6s ease
    }
    &:focus {
        outline: none;
    }
`



export const LinkBack = styled(Link)`
color: white;
display: flex;
justify-content: left;
font-size: 10 rem;
margin-left: 2.5%;
/* margin-top: 2%; */
    &:hover{
            cursor:pointer;
            color: #26ddf2;
            transition: all .6s ease
        }
`