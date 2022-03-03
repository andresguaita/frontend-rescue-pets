import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/wave2.svg"

export const Container = styled.div`
  //Contenedor
  height: 100%;
  display: flex;
  color: ${allColors.colors[8]};
  align-items: center;
  justify-content: space-around;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 80px;
  padding :40px;
  
`;



export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: block;
height: 100%;
  display: flex;
  color: ${allColors.colors[0]};
  align-items: center;
  justify-content: space-around;
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

export const Button = styled.button`
margin: 0.2em;
  background-color: ${allColors.colors[3]};
  border-radius: 3px;
  height: 30px;
  font-size: 10px;
  width: auto;
  
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

export const Button3 = styled.button`
margin: 0.2em;
  background-color: ${allColors.colors[8]};
  border-radius: 3px;
  height: 30px;
  font-size: 13px;
  width: auto;
  
 
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
export const Button2 = styled.button`
margin-top: 1.5%;
position: absolute; 
right: 0;
/* align-self: center; */
justify-self: right;
font-size: 10px;

&:hover {
        cursor: pointer;;
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