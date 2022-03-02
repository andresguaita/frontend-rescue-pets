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

height: 100%;
  display: flex;
  color: ${allColors.colors[0]};
  align-items: center;
  justify-content: space-around;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 80px;
  padding :40px;
`

export const CenterChild = styled.div`
position: relative;
align-self: center;
justify-self: center;
font-size: 10px;
`

export const Button = styled.button`
margin: 0.8em;
  background-color: ${allColors.colors[3]};
  border-radius: 5px;
  height: 40px;
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

.app-container {
display: flex;
flex-direction: column;
gap: 10px;
padding: 1rem;
}

table {
border-collapse: collapse;
width:80%;

}

th,
td {
border: 1px solid #ffffff;
text-align: left;
padding: 8px;
font-size: 11px;
border-radius: 4px;
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